# Git Repository Setup Guide

## Current Issue

The repository is configured with HTTPS remote, which requires authentication. You're getting:
```
fatal: could not read Username for 'https://github.com': No such device or address
```

## Solutions

### Option 1: Switch to SSH (Recommended)

1. **Check if you have SSH keys:**
   ```bash
   ls -la ~/.ssh
   ```

2. **If you don't have SSH keys, generate them:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Press Enter to accept default location
   # Optionally set a passphrase
   ```

3. **Add SSH key to GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key

4. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:ah155209/exec.git
   ```

5. **Test connection:**
   ```bash
   ssh -T git@github.com
   ```

6. **Push your code:**
   ```bash
   git push origin main
   ```

### Option 2: Use Personal Access Token (HTTPS)

1. **Create a Personal Access Token:**
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Select scopes: `repo` (full control)
   - Copy the token (you'll only see it once!)

2. **Configure Git credential helper:**
   ```bash
   git config --global credential.helper store
   ```

3. **Push (will prompt for credentials):**
   ```bash
   git push origin main
   # Username: your_github_username
   # Password: paste_your_personal_access_token
   ```

### Option 3: Update Remote URL (If Wrong Repository)

If you want to push to a different repository:

1. **Remove current remote:**
   ```bash
   git remote remove origin
   ```

2. **Add new remote:**
   ```bash
   # For SSH:
   git remote add origin git@github.com:username/repository-name.git
   
   # OR for HTTPS:
   git remote add origin https://github.com/username/repository-name.git
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

## Quick Commands to Set Up

### If using SSH (Recommended):
```bash
# Change remote to SSH
git remote set-url origin git@github.com:ah155209/exec.git

# Verify
git remote -v

# Push
git push origin main
```

### If using HTTPS with token:
```bash
# Keep HTTPS remote
# When pushing, use token as password
git push origin main
# Username: ah155209
# Password: <your_personal_access_token>
```

## Common Issues

### Issue: "Permission denied (publickey)"
- **Solution**: Make sure your SSH key is added to GitHub
- Check: `ssh -T git@github.com`

### Issue: "Repository not found"
- **Solution**: Verify repository name and that you have access
- Check: `git remote -v`

### Issue: "Authentication failed"
- **Solution**: Use Personal Access Token instead of password
- GitHub no longer accepts passwords for HTTPS

## Recommended: SSH Setup Script

Run these commands:

```bash
# 1. Check if SSH key exists
if [ ! -f ~/.ssh/id_ed25519 ]; then
  echo "Generating SSH key..."
  ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/id_ed25519 -N ""
fi

# 2. Display public key (add to GitHub)
echo "Add this to GitHub → Settings → SSH keys:"
cat ~/.ssh/id_ed25519.pub

# 3. Change remote to SSH
git remote set-url origin git@github.com:ah155209/exec.git

# 4. Test connection
ssh -T git@github.com
```

