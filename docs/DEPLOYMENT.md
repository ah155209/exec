# Deployment Guide

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/my-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts to complete deployment.

3. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Custom Domain

1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

If you add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy the project

## Build Settings

Vercel automatically detects Next.js projects. No additional configuration needed!

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form (if integrated with backend)
- [ ] Check mobile responsiveness
- [ ] Test dark mode
- [ ] Verify all images load correctly
- [ ] Check social media links
- [ ] Test smooth scrolling

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure images are in the `public` folder
- Use Next.js `Image` component for optimization

### Styling Issues
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

