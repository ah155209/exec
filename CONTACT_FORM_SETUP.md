# Contact Form Email Setup Guide

This guide will help you set up the contact form to send emails to your inbox using Resend (free email service).

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign up for Resend (Free)

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" (you can use GitHub, Google, or email)
3. Verify your email address

### Step 2: Get Your API Key

1. After logging in, go to **API Keys** in the sidebar
2. Click **"Create API Key"**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (you'll only see it once!)

### Step 3: Add to Environment Variables

Create or update your `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your.email@example.com
```

**Important:** Replace:
- `re_your_api_key_here` with your actual Resend API key
- `your.email@example.com` with your actual email address where you want to receive contact form submissions

### Step 4: Test It!

1. Start your development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

2. Go to your contact form on the website
3. Fill out and submit the form
4. Check your email inbox!

## 📧 How It Works

- When someone submits the contact form, an email is sent to the address specified in `CONTACT_EMAIL`
- The email includes:
  - Sender's name
  - Sender's email (you can reply directly)
  - Their message
- The sender's email is set as the "Reply-To" address, so you can reply directly from your email client

## 🔒 Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production (Vercel), add the environment variables in:
  - Project Settings → Environment Variables
- The free tier includes **3,000 emails per month** - perfect for a portfolio site!

## 🎨 Customizing the Email

You can customize the email template in `app/api/contact/route.ts`. The current template includes:
- Professional HTML formatting
- Sender information
- Formatted message display
- Reply-to functionality

## ⚠️ Troubleshooting

**Emails not sending?**
- Check that `RESEND_API_KEY` is set correctly in `.env.local`
- Make sure you've restarted your dev server after adding the environment variable
- Check the browser console and server logs for error messages
- Verify your Resend API key is active in the Resend dashboard

**Want to use a custom "from" address?**
- You'll need to verify your domain in Resend
- Go to Resend Dashboard → Domains → Add Domain
- Follow their domain verification process
- Update the `from` field in `app/api/contact/route.ts`

## 📚 Alternative Email Services

If you prefer other free email services:

### SendGrid (100 emails/day free)
- Sign up at [sendgrid.com](https://sendgrid.com)
- Use their Node.js SDK instead of Resend

### EmailJS (200 emails/month free)
- Client-side email service
- No backend API needed
- Sign up at [emailjs.com](https://www.emailjs.com)

### Nodemailer with Gmail
- Use Gmail SMTP with app password
- Requires Gmail account setup
- More complex but completely free

The current implementation uses Resend as it's the easiest and most reliable option for Next.js applications.

