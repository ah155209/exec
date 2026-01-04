# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 🎬 Smooth animations with Framer Motion
- 📅 Interactive calendar component
- 💬 Testimonials/Compliments section with MongoDB
- 📧 Contact form
- 🔄 Reusable components with props
- 🖼️ Optional hero image support
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB (Mongoose)
- **UI Components**: Custom components with Shadcn-style utilities
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up MongoDB:
   - Create a free MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster (free tier available)
   - Get your connection string
   - Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string_here
   ```

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-portfolio/
├── app/
│   ├── api/
│   │   └── testimonials/
│   │       └── route.ts  # API route for testimonials
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles
├── components/
│   ├── ui/
│   │   ├── AnimatedSection.tsx  # Reusable animation wrapper
│   │   ├── Button.tsx           # Reusable button component
│   │   └── Calendar.tsx         # Calendar component
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section (with optional image)
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects showcase
│   ├── Testimonials.tsx  # Testimonials section
│   ├── CalendarSection.tsx  # Calendar section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── lib/
│   ├── mongodb.ts       # MongoDB connection utility
│   └── utils.ts         # Utility functions
├── models/
│   └── Testimonial.ts   # MongoDB testimonial model
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description via props
   - Add optional profile image: `<Hero image="/path/to/image.jpg" />`
   - Customize button text and links

2. **About Section** (`components/About.tsx`):
   - Edit the about text via `paragraphs` prop
   - Update experience years via props

3. **Skills** (`components/Skills.tsx`):
   - Modify skill categories via `skillCategories` prop

4. **Projects** (`components/Projects.tsx`):
   - Update project details via `projects` prop
   - Add your GitHub and live demo links

5. **Testimonials** (`components/Testimonials.tsx`):
   - Testimonials are automatically loaded from MongoDB
   - Add testimonials via API: `POST /api/testimonials`
   - Or manually add to MongoDB database

6. **Contact** (`components/Contact.tsx`):
   - Update email address
   - Add your social media links

7. **Metadata** (`app/layout.tsx`):
   - Update SEO metadata
   - Change title and description

### Reusable Components

All components are designed to be reusable with props:

```tsx
// Hero with custom content and optional image
<Hero 
  name="Your Name"
  title="Your Title"
  description="Your description"
  image="/path/to/image.jpg"  // Optional
/>

// About with custom content
<About 
  title="About Me"
  paragraphs={["Paragraph 1", "Paragraph 2"]}
  experienceYears="5+"
/>

// Skills with custom categories
<Skills 
  skillCategories={[
    { title: "Frontend", skills: ["React", "Next.js"] }
  ]}
/>

// Projects with custom data
<Projects 
  projects={[
    { title: "Project 1", description: "...", technologies: [...] }
  ]}
/>
```

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Environment Variables

**Required:**
- `MONGODB_URI` - Your MongoDB connection string

Add them in:
- Local: Create `.env.local` file (see `.env.local.example`)
- Vercel: Add in Project Settings → Environment Variables

**Getting MongoDB URI:**
1. Sign up for free at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier M0 available)
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for development)
5. Get connection string from "Connect" → "Connect your application"

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.

## Contact

Ameer Hamza Subhani - [Your Email]

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)
