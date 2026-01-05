# GitHub Actions CI/CD Workflows

This directory contains GitHub Actions workflows for continuous integration and deployment.

## Available Workflows

### 1. `ci.yml` - Continuous Integration Only
- **Triggers**: Push and Pull Requests to main/master
- **What it does**:
  - Runs ESLint
  - Type checks TypeScript code
  - Builds the Next.js application
  - Uploads build artifacts

### 2. `deploy.yml` - Deployment Only
- **Triggers**: Push to main/master, Manual dispatch
- **What it does**:
  - Builds the Next.js application
  - Deploys to Vercel production

### 3. `ci-cd.yml` - Complete CI/CD Pipeline (Recommended)
- **Triggers**: Push and Pull Requests to main/master, Manual dispatch
- **What it does**:
  - **CI Phase**: Runs linting, type checking, and builds
  - **CD Phase**: Deploys to Vercel (only on main/master branch)
  - Comments on PRs with deployment status

## Setup Instructions

### Step 1: Choose Your Workflow

**Option A: Use Complete CI/CD Pipeline (Recommended)**
- Use `ci-cd.yml` - It does everything automatically
- Delete `ci.yml` and `deploy.yml` if you don't need them separately

**Option B: Use Separate CI and CD**
- Keep `ci.yml` for continuous integration
- Keep `deploy.yml` for deployment
- Delete `ci-cd.yml`

### Step 2: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

#### Required for Deployment:
- `VERCEL_TOKEN` - Your Vercel API token
  - Get it from: [Vercel Settings → Tokens](https://vercel.com/account/tokens)
  
- `VERCEL_ORG_ID` - Your Vercel Organization ID
  - Get it from: Vercel Dashboard → Settings → General → Team ID
  
- `VERCEL_PROJECT_ID` - Your Vercel Project ID
  - Get it from: Vercel Project → Settings → General → Project ID

#### Optional (for build-time checks):
- `MONGODB_URI` - MongoDB connection string
- `RESEND_API_KEY` - Resend API key for email
- `CONTACT_EMAIL` - Contact form recipient email

**Note**: These are optional for CI builds but required for deployment.

### Step 3: Get Vercel Credentials

#### Method 1: Using Vercel Dashboard

1. **Get Vercel Token:**
   - Go to [Vercel Account Settings](https://vercel.com/account/tokens)
   - Click "Create Token"
   - Name it "GitHub Actions"
   - Copy the token

2. **Get Organization ID:**
   - Go to your Vercel Dashboard
   - Click on your team/organization
   - Go to Settings → General
   - Copy the "Team ID" (this is your Org ID)

3. **Get Project ID:**
   - Go to your project in Vercel
   - Go to Settings → General
   - Copy the "Project ID"

#### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link your project (this will show your IDs)
vercel link
```

### Step 4: Add Secrets to GitHub

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add each secret:
   - Name: `VERCEL_TOKEN`, Value: `your_token_here`
   - Name: `VERCEL_ORG_ID`, Value: `your_org_id_here`
   - Name: `VERCEL_PROJECT_ID`, Value: `your_project_id_here`
   - Name: `MONGODB_URI`, Value: `your_mongodb_uri_here`
   - Name: `RESEND_API_KEY`, Value: `your_resend_key_here`
   - Name: `CONTACT_EMAIL`, Value: `your_email@example.com`

### Step 5: Push to GitHub

```bash
git add .github/workflows/
git commit -m "Add GitHub Actions CI/CD workflows"
git push origin main
```

## How It Works

### On Push to Main/Master:
1. **CI Phase**: Runs linting, type checking, and builds
2. **CD Phase**: If CI passes, automatically deploys to Vercel production

### On Pull Request:
1. **CI Phase**: Runs linting, type checking, and builds
2. **CD Phase**: Skipped (no deployment on PRs)

### Manual Trigger:
- Go to Actions tab → Select workflow → Run workflow

## Workflow Status

You can check workflow status:
- In the **Actions** tab of your GitHub repository
- On pull requests (shows CI status)
- Via GitHub notifications

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all required secrets are set
- Verify Node.js version compatibility

### Deployment Fails
- Verify Vercel credentials are correct
- Check Vercel project settings
- Ensure environment variables are set in Vercel dashboard

### Type Errors
- Run `npm run type-check` locally to see errors
- Fix TypeScript errors before pushing

## Alternative: Vercel Native Integration

If you prefer, you can use Vercel's native GitHub integration instead:
1. Connect your GitHub repo in Vercel dashboard
2. Vercel will automatically deploy on push
3. No need for GitHub Actions deployment workflow

However, keeping the CI workflow is still recommended for:
- Running tests before deployment
- Type checking
- Linting
- Catching errors early

