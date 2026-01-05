# API Configuration Guide

This file explains how to configure and customize the API settings in `config/api.ts`.

## 📁 What's Centralized

All API-related configuration is now in one place:

1. **Email Service Settings** - Resend configuration, sender info, templates
2. **Error Messages** - All API error messages
3. **Success Messages** - All API success messages
4. **Validation Rules** - Email regex, field requirements
5. **Status Codes** - HTTP status codes
6. **Email Templates** - HTML and text email templates
7. **Utility Functions** - HTML escaping, validation helpers

## 🎯 Common Customizations

### 1. Change Email Sender Name/Address

```typescript
// In config/api.ts
export const emailConfig = {
  from: {
    name: 'Your Name', // ← Change sender name
    email: 'contact@yourdomain.com', // ← Change after domain verification
  },
  // ...
};
```

**Note:** After verifying your domain in Resend, update the email address.

### 2. Customize Email Subject

```typescript
// In config/api.ts
export const emailConfig = {
  subjects: {
    contactForm: (name: string) => `New Message from ${name}`, // ← Customize
  },
};
```

### 3. Update Error Messages

```typescript
// In config/api.ts
export const errorMessages = {
  contact: {
    requiredFields: 'Please fill in all fields', // ← Customize
    invalidEmail: 'Please enter a valid email address', // ← Customize
    // ...
  },
};
```

### 4. Customize Email Template

```typescript
// In config/api.ts
export const emailTemplates = {
  contactFormHTML: (name: string, email: string, message: string): string => {
    return `
      <div>
        <!-- Your custom HTML template here -->
        <h1>New Contact: ${name}</h1>
        <p>${message}</p>
      </div>
    `;
  },
};
```

### 5. Add Validation Rules

```typescript
// In config/api.ts
export const validationRules = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Customize regex if needed
    message: 'Invalid email format',
  },
  minLength: {
    name: 2, // Minimum name length
    message: 10, // Minimum message length
  },
  maxLength: {
    name: 100, // Maximum name length
    message: 5000, // Maximum message length
  },
};
```

## 🔧 API Endpoints

### Contact API (`/api/contact`)

**POST** - Submit contact form
- Validates required fields (name, email, message)
- Validates email format
- Sends email via Resend
- Returns success/error response

**Configuration:**
- Email sender: `emailConfig.from`
- Recipient: `process.env.CONTACT_EMAIL` or `emailConfig.defaultRecipient`
- Template: `emailTemplates.contactFormHTML` / `contactFormText`

### Testimonials API (`/api/testimonials`)

**GET** - Fetch all testimonials
- Connects to MongoDB
- Returns sorted testimonials

**POST** - Create new testimonial
- Validates testimonial data
- Saves to MongoDB
- Returns created testimonial

## 📝 Environment Variables

Required environment variables (set in `.env` or `.env.local`):

```env
# Email Service
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your.email@example.com

# Database
MONGODB_URI=your_mongodb_connection_string
```

## 🛠️ Utility Functions

The config includes helpful utilities:

```typescript
import { apiUtils } from '@/config/api';

// Escape HTML to prevent XSS
const safe = apiUtils.escapeHtml(userInput);

// Validate email
const isValid = apiUtils.isValidEmail('test@example.com');

// Validate required fields
const validation = apiUtils.validateRequired({ name, email, message });
if (!validation.isValid) {
  console.log('Missing:', validation.missingFields);
}
```

## 🎨 Customizing Email Templates

### HTML Template

The HTML template uses inline styles for email client compatibility. You can customize:

- Colors (border color, text colors)
- Layout (padding, margins)
- Styling (fonts, sizes)

### Text Template

The plain text template is used as a fallback. Keep it simple and readable.

## 🔒 Security Notes

- All user input is automatically escaped using `apiUtils.escapeHtml()`
- Email validation prevents invalid formats
- Required field validation prevents empty submissions
- Environment variables keep sensitive data secure

## 📚 Adding New API Endpoints

When adding new API routes:

1. Add error/success messages to `config/api.ts`
2. Use `statusCodes` for HTTP responses
3. Use `apiUtils` for validation
4. Keep configuration centralized

Example:

```typescript
// In config/api.ts
export const errorMessages = {
  myNewApi: {
    invalidData: 'Invalid data provided',
    // ...
  },
};

// In your API route
import { errorMessages, statusCodes } from '@/config/api';
return NextResponse.json(
  { error: errorMessages.myNewApi.invalidData },
  { status: statusCodes.badRequest }
);
```

## ✅ Benefits

- **Single Source of Truth** - All API config in one file
- **Easy Updates** - Change messages/templates in one place
- **Consistency** - Same error messages across all endpoints
- **Type Safety** - TypeScript ensures correct usage
- **Maintainability** - Clear organization and structure

