/**
 * API Configuration
 * 
 * This file contains all API-related configuration including:
 * - Email service settings
 * - Error messages
 * - Validation rules
 * - Response messages
 * - Email templates
 */

// ============================================
// Email Service Configuration
// ============================================
export const emailConfig = {
  // Email sender configuration
  from: {
    name: 'Portfolio Contact',
    email: 'onboarding@resend.dev', // Change this after verifying your domain
    // After domain verification, use: 'Portfolio Contact <contact@yourdomain.com>'
  },
  
  // Default recipient (fallback if env var not set)
  defaultRecipient: 'your.email@example.com',
  
  // Email subject templates
  subjects: {
    contactForm: (name: string) => `New Contact Form Submission from ${name}`,
  },
  
  // Email footer text
  footerText: 'This email was sent from your portfolio contact form.',
};

// ============================================
// Validation Rules
// ============================================
export const validationRules = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email format',
  },
  required: {
    message: 'All fields are required',
  },
  minLength: {
    name: 2,
    message: 10,
  },
  maxLength: {
    name: 100,
    email: 255,
    message: 5000,
  },
};

// ============================================
// Error Messages
// ============================================
export const errorMessages = {
  // Contact API
  contact: {
    requiredFields: 'All fields are required',
    invalidEmail: 'Invalid email format',
    emailNotConfigured: 'Email service is not configured',
    emailSendFailed: 'Failed to send email',
    internalError: 'Internal server error',
  },
  
  // Testimonials API
  testimonials: {
    fetchFailed: 'Failed to fetch testimonials',
    createFailed: 'Failed to create testimonial',
    invalidData: 'Invalid testimonial data',
    notFound: 'Testimonial not found',
  },
  
  // General
  general: {
    badRequest: 'Bad request',
    unauthorized: 'Unauthorized',
    forbidden: 'Forbidden',
    notFound: 'Not found',
    serverError: 'Internal server error',
  },
};

// ============================================
// Success Messages
// ============================================
export const successMessages = {
  contact: {
    emailSent: 'Email sent successfully',
  },
  testimonials: {
    created: 'Testimonial created successfully',
    fetched: 'Testimonials fetched successfully',
  },
};

// ============================================
// HTTP Status Codes
// ============================================
export const statusCodes = {
  ok: 200,
  created: 201,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  serverError: 500,
};

// ============================================
// Email Template Generator
// ============================================
export const emailTemplates = {
  /**
   * Generate HTML email template for contact form submission
   */
  contactFormHTML: (name: string, email: string, message: string): string => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #4F46E5; margin-top: 10px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          ${emailConfig.footerText}
        </p>
      </div>
    `;
  },
  
  /**
   * Generate plain text email template for contact form submission
   */
  contactFormText: (name: string, email: string, message: string): string => {
    return `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
${emailConfig.footerText}
    `.trim();
  },
};

// ============================================
// Utility Functions
// ============================================
export const apiUtils = {
  /**
   * Escape HTML to prevent XSS attacks
   */
  escapeHtml: (text: string): string => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  },
  
  /**
   * Validate email format
   */
  isValidEmail: (email: string): boolean => {
    return validationRules.email.regex.test(email);
  },
  
  /**
   * Validate required fields
   */
  validateRequired: (fields: Record<string, unknown>): { isValid: boolean; missingFields: string[] } => {
    const missingFields: string[] = [];
    
    for (const [key, value] of Object.entries(fields)) {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        missingFields.push(key);
      }
    }
    
    return {
      isValid: missingFields.length === 0,
      missingFields,
    };
  },
};

// ============================================
// Environment Variable Keys
// ============================================
export const envKeys = {
  resendApiKey: 'RESEND_API_KEY',
  contactEmail: 'CONTACT_EMAIL',
  mongodbUri: 'MONGODB_URI',
} as const;

