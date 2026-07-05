import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  emailConfig,
  errorMessages,
  successMessages,
  statusCodes,
  emailTemplates,
  apiUtils,
  envKeys,
  validationRules,
} from '@/config/api';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

const resend = new Resend(process.env[envKeys.resendApiKey]);

// Allow a handful of submissions per IP per hour — generous for a human,
// stops bots from draining the Resend quota.
const RATE_LIMIT = { limit: 5, windowMs: 60 * 60 * 1000 };

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { allowed, retryAfterSeconds } = rateLimit(`contact:${ip}`, RATE_LIMIT);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(retryAfterSeconds) },
        }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    const validation = apiUtils.validateRequired({ name, email, message });
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: errorMessages.contact.requiredFields },
        { status: statusCodes.badRequest }
      );
    }

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      name.length > validationRules.maxLength.name ||
      email.length > validationRules.maxLength.email ||
      message.length > validationRules.maxLength.message
    ) {
      return NextResponse.json(
        { success: false, error: errorMessages.general.badRequest },
        { status: statusCodes.badRequest }
      );
    }

    // Validate email format
    if (!apiUtils.isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: errorMessages.contact.invalidEmail },
        { status: statusCodes.badRequest }
      );
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env[envKeys.resendApiKey]) {
      console.error(`${envKeys.resendApiKey} is not configured`);
      return NextResponse.json(
        { success: false, error: errorMessages.contact.emailNotConfigured },
        { status: statusCodes.serverError }
      );
    }

    // Get recipient email from environment variable or use default
    const recipientEmail = process.env[envKeys.contactEmail] || emailConfig.defaultRecipient;

    // Escape HTML to prevent XSS attacks
    const safeName = apiUtils.escapeHtml(name);
    const safeEmail = apiUtils.escapeHtml(email);
    const safeMessage = apiUtils.escapeHtml(message);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `${emailConfig.from.name} <${emailConfig.from.email}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: emailConfig.subjects.contactForm(safeName),
      html: emailTemplates.contactFormHTML(safeName, safeEmail, safeMessage),
      text: emailTemplates.contactFormText(name, email, message),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: errorMessages.contact.emailSendFailed },
        { status: statusCodes.serverError }
      );
    }

    return NextResponse.json(
      { success: true, message: successMessages.contact.emailSent, data },
      { status: statusCodes.ok }
    );
  } catch (error) {
    // Log the detail server-side but never expose internals to the client
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: errorMessages.contact.internalError },
      { status: statusCodes.serverError }
    );
  }
}

