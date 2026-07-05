# GitHub Actions Lock File Fix

## Issue
GitHub Actions is looking for `package-lock.json` but can't find it, causing the workflow to fail.

## Solution

### Option 1: Commit package-lock.json (Recommended)

Make sure `package-lock.json` is committed to your repository:

```bash
git add package-lock.json
git commit -m "Add package-lock.json for CI/CD"
git push
```

### Option 2: If you're using Bun

If you're using Bun instead of npm, update the workflows to use Bun:

1. Change `cache: 'npm'` to remove cache (or use Bun cache)
2. Change `npm ci` to `bun install --frozen-lockfile`
3. Commit `bun.lock` instead

### Option 3: Use npm install instead of npm ci

If you don't want to commit the lock file, change `npm ci` to `npm install` in the workflows. However, this is not recommended for CI/CD as it can lead to inconsistent builds.

## What I've Fixed

I've updated all GitHub Actions workflows to explicitly specify the lock file path:

```yaml
cache: 'npm'
cache-dependency-path: package-lock.json
```

This should help GitHub Actions find the lock file.

## Verify

After committing `package-lock.json`, your next GitHub Actions run should work correctly.

