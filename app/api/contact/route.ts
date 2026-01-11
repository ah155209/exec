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
} from '@/config/api';

const resend = new Resend(process.env[envKeys.resendApiKey]);

export async function POST(request: NextRequest) {
  try {
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
    console.error('Contact API error:', error);
    const errorMessage = error instanceof Error ? error.message : errorMessages.contact.internalError;
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: statusCodes.serverError }
    );
  }
}

