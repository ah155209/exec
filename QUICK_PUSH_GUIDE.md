# Quick Guide to Push Your Code

## Current Status
✅ Git repository is initialized
✅ Remote is configured: `https://github.com/ah155209/exec.git`
✅ Files are ready to commit

## Issue
GitHub requires authentication. You need either:
- SSH keys, OR
- Personal Access Token

## Quick Solution: Use Personal Access Token

### Step 1: Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "Portfolio Project"
4. Select scope: ✅ **repo** (check the box)
5. Click "Generate token"
6. **COPY THE TOKEN** (you'll only see it once!)

### Step 2: Commit and Push

```bash
# Stage all changes
git add -A

# Commit
git commit -m "Add portfolio features: animations, calendar, testimonials, MongoDB integration"

# Push (will prompt for credentials)
git push origin main
# Username: ah155209
# Password: <paste your personal access token here>
```

## Alternative: Set Up SSH (Better for Long-term)

### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter 3 times (accept defaults, no passphrase)
```

### Step 2: Add to GitHub
```bash
# Display your public key
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

Then:
1. Go to: https://github.com/settings/ssh/new
2. Title: "My Portfolio Laptop"
3. Key: Paste the copied key
4. Click "Add SSH key"

### Step 3: Switch Remote and Push
```bash
# Change to SSH
git remote set-url origin git@github.com:ah155209/exec.git

# Push
git push origin main
```

## What Files Will Be Pushed?

All your portfolio files including:
- ✅ All components (Hero, About, Skills, Projects, etc.)
- ✅ Calendar component with green dots
- ✅ Testimonials with MongoDB integration
- ✅ Animations with Framer Motion
- ✅ API routes
- ✅ Configuration files

**Note:** `.env.local` is ignored (as it should be - contains secrets)

## If You Get "Repository Not Found" Error

The remote might be pointing to the wrong repository. Check:
```bash
git remote -v
```

If wrong, update it:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

