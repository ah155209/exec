# GitHub Actions CI/CD Setup Guide

## ✅ What's Been Set Up

I've created GitHub Actions workflows for your portfolio:

1. **`ci.yml`** - Continuous Integration (linting, type checking, building)
2. **`deploy.yml`** - Deployment to Vercel
3. **`ci-cd.yml`** - Complete CI/CD pipeline (recommended)

## 🚀 Quick Start (5 minutes)

### Step 1: Choose Your Workflow

**Recommended**: Use `ci-cd.yml` (complete pipeline)
- Delete `ci.yml` and `deploy.yml` if you only want the complete pipeline
- Or keep all three if you want flexibility

### Step 2: Get Vercel Credentials

1. **Vercel Token:**
   - Go to: https://vercel.com/account/tokens
   - Click "Create Token"
   - Name: "GitHub Actions"
   - Copy the token

2. **Vercel Org ID:**
   - Go to Vercel Dashboard → Your Team → Settings → General
   - Copy "Team ID"

3. **Vercel Project ID:**
   - Go to your project → Settings → General
   - Copy "Project ID"

### Step 3: Add GitHub Secrets

1. Go to your GitHub repo: **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Add these secrets:

```
VERCEL_TOKEN=your_vercel_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=your_project_id_here
MONGODB_URI=your_mongodb_uri_here
RESEND_API_KEY=your_resend_key_here
CONTACT_EMAIL=your_email@example.com
```

### Step 4: Push to GitHub

```bash
git add .github/workflows/ package.json
git commit -m "Add GitHub Actions CI/CD workflows"
git push origin main
```

## 📋 What Happens Next

### On Every Push:
- ✅ Runs ESLint
- ✅ Type checks TypeScript
- ✅ Builds Next.js app
- ✅ Deploys to Vercel (if on main/master branch)

### On Pull Requests:
- ✅ Runs CI checks only
- ❌ No deployment (prevents accidental deployments)

## 🔍 Check Status

- Go to your GitHub repo → **Actions** tab
- See all workflow runs and their status
- Click on any run to see detailed logs

## 🛠️ Troubleshooting

### Workflow Not Running?
- Check if workflows are in `.github/workflows/` directory
- Ensure you pushed the files to GitHub
- Check Actions tab → Workflows

### Deployment Fails?
- Verify all Vercel secrets are correct
- Check Vercel project settings
- Review workflow logs in Actions tab

### Build Errors?
- Run `npm run lint` locally
- Run `npm run type-check` locally
- Run `npm run build` locally
- Fix errors before pushing

## 📚 More Information

See `.github/workflows/README.md` for detailed documentation.

## 🎯 Next Steps

1. Add the GitHub secrets (Step 3 above)
2. Push the workflows to GitHub
3. Watch the Actions tab for your first CI/CD run!

---

**Note**: If you're using Vercel's native GitHub integration, you can skip the deployment workflow and just use the CI workflow for testing.

