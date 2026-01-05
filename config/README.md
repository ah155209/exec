# Portfolio Configuration

This directory contains all static data and configuration for your portfolio website.

## 📁 File Structure

- `portfolio.ts` - Main configuration file with all static content
- `api.ts` - API configuration (email service, error messages, validation, templates)
- `README.md` - This file (portfolio content guide)
- `API_README.md` - API configuration guide

## 🎯 How to Use

All static content is centralized in `config/portfolio.ts`. To update any content on your website, simply edit this one file!

### What's Included

1. **Hero Section** (`heroData`)
   - Name, title, description
   - Button texts and links
   - Location (optional)

2. **About Section** (`aboutData`)
   - Title
   - Paragraphs (array of text)
   - Experience years and label

3. **Skills Section** (`skillsData`)
   - Title
   - Skill categories with skills arrays

4. **Projects Section** (`projectsData`)
   - Title
   - Projects array with:
     - Title, description
     - Technologies
     - GitHub and Live demo links

5. **Contact Section** (`contactData`)
   - Title, heading, description
   - (Social links come from environment variables)

6. **Navigation** (`navLinks`)
   - All navigation menu items

7. **Site Metadata** (`siteMetadata`)
   - Site name, title, description
   - SEO keywords

## ✏️ Example: Updating Your Name

```typescript
// In config/portfolio.ts
export const heroData = {
  name: "Your New Name", // ← Change here
  // ... rest of the config
};

export const siteMetadata = {
  name: "Your New Name", // ← And here
  // ... rest of the config
};
```

## ✏️ Example: Adding a New Project

```typescript
// In config/portfolio.ts
export const projectsData = {
  projects: [
    // ... existing projects
    {
      title: 'My New Project',
      description: 'Description of my amazing project',
      technologies: ['React', 'TypeScript', 'Node.js'],
      github: 'https://github.com/username/project',
      live: 'https://myproject.com',
    },
  ],
};
```

## ✏️ Example: Adding a New Skill

```typescript
// In config/portfolio.ts
export const skillsData = {
  categories: [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'Vue.js', // ← Add new skill here
      ],
    },
  ],
};
```

## 🔄 After Making Changes

1. Save the `config/portfolio.ts` file
2. The changes will automatically reflect in your components
3. No need to edit individual component files!

## 📝 Notes

- All components use default values from this config
- You can still override values by passing props to components (if needed)
- Environment variables (like email, social links) are handled separately in `.env` file

