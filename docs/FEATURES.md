# New Features Guide

## 🎬 Animations

All sections now include smooth animations powered by Framer Motion:

- **AnimatedSection Component**: A reusable wrapper for scroll-triggered animations
- **Fade-in animations**: Content appears as you scroll
- **Hover effects**: Interactive elements respond to user interaction
- **Staggered animations**: Multiple elements animate in sequence

### Usage

```tsx
import AnimatedSection from '@/components/ui/AnimatedSection';

<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>
```

## 📅 Calendar Component

An interactive calendar component built with custom UI:

- **Date selection**: Click any date to select it
- **Month navigation**: Navigate between months
- **Visual feedback**: Selected dates are highlighted
- **Today indicator**: Current date is clearly marked

### Usage

```tsx
import { Calendar } from '@/components/ui/Calendar';

<Calendar 
  selected={selectedDate}
  onSelect={setSelectedDate}
/>
```

## 💬 Testimonials Section

A dynamic testimonials section with MongoDB integration:

### Features

- **MongoDB Storage**: Testimonials are stored in MongoDB
- **Rating System**: 5-star rating display
- **Auto-loading**: Testimonials load automatically from database
- **Responsive Grid**: Adapts to different screen sizes
- **Empty State**: Shows friendly message when no testimonials exist

### Adding Testimonials

#### Via API

```bash
POST /api/testimonials
Content-Type: application/json

{
  "name": "John Doe",
  "role": "CEO",
  "company": "Tech Corp",
  "message": "Great work!",
  "rating": 5,
  "image": "https://example.com/image.jpg" // Optional
}
```

#### Via MongoDB Directly

Connect to your MongoDB database and insert:

```javascript
{
  name: "John Doe",
  role: "CEO",
  company: "Tech Corp",
  message: "Great work!",
  rating: 5
}
```

## 🔄 Reusable Components

All components are now fully reusable with props:

### Hero Component

```tsx
<Hero 
  name="Your Name"
  title="Your Title"
  description="Your description"
  image="/path/to/image.jpg"  // Optional - adds profile image
  primaryButtonText="View Work"
  primaryButtonLink="#projects"
  secondaryButtonText="Contact"
  secondaryButtonLink="#contact"
/>
```

### About Component

```tsx
<About 
  title="About Me"
  paragraphs={[
    "First paragraph",
    "Second paragraph",
    "Third paragraph"
  ]}
  experienceYears="5+"
  experienceLabel="Years of Experience"
/>
```

### Skills Component

```tsx
<Skills 
  title="My Skills"
  skillCategories={[
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "MongoDB", "Express"]
    }
  ]}
/>
```

### Projects Component

```tsx
<Projects 
  title="My Projects"
  projects={[
    {
      title: "Project Name",
      description: "Project description",
      technologies: ["React", "Next.js"],
      github: "https://github.com/...",
      live: "https://example.com"
    }
  ]}
/>
```

## 🖼️ Hero Image Support

The Hero component now supports an optional profile image:

```tsx
<Hero 
  image="/images/profile.jpg"
  imageAlt="Profile picture"
  // ... other props
/>
```

The image will:
- Display in a circular frame
- Animate in from the right
- Be responsive on mobile devices
- Only show if provided (optional)

## 🗄️ MongoDB Setup

### Getting Started

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free (M0 tier available)

2. **Create Cluster**
   - Choose free tier
   - Select a region
   - Wait for cluster to be created

3. **Create Database User**
   - Go to Database Access
   - Add new user
   - Save username and password

4. **Whitelist IP**
   - Go to Network Access
   - Add IP address (0.0.0.0/0 for development)
   - Or add your specific IP

5. **Get Connection String**
   - Go to Database → Connect
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password

6. **Add to Environment**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
   ```

## 📁 Project Structure

```
components/
├── ui/                    # Reusable UI components
│   ├── AnimatedSection.tsx
│   ├── Button.tsx
│   └── Calendar.tsx
├── Header.tsx             # Navigation
├── Hero.tsx              # Hero with optional image
├── About.tsx             # About section (reusable)
├── Skills.tsx            # Skills section (reusable)
├── Projects.tsx          # Projects section (reusable)
├── Testimonials.tsx     # Testimonials from MongoDB
├── CalendarSection.tsx   # Calendar section
├── Contact.tsx          # Contact form
└── Footer.tsx           # Footer

lib/
├── mongodb.ts           # MongoDB connection
└── utils.ts            # Utility functions

models/
└── Testimonial.ts      # MongoDB schema

app/
├── api/
│   └── testimonials/
│       └── route.ts    # API routes
└── ...
```

## 🚀 Deployment Notes

### Vercel Environment Variables

When deploying to Vercel:

1. Go to Project Settings → Environment Variables
2. Add `MONGODB_URI` with your connection string
3. Redeploy the project

### Build Considerations

- MongoDB connection is lazy-loaded (only connects when needed)
- Build will succeed even without MONGODB_URI (but testimonials won't work)
- All animations are client-side only
- Components are optimized for production

## 🎨 Customization Tips

1. **Animation Timing**: Adjust `delay` prop in AnimatedSection
2. **Animation Direction**: Use `direction` prop (up, down, left, right)
3. **Colors**: Modify Tailwind classes in components
4. **Spacing**: Adjust padding/margin classes
5. **Fonts**: Update in `app/layout.tsx`

## 📝 Next Steps

1. Set up MongoDB Atlas account
2. Add your connection string to `.env.local`
3. Customize component props with your content
4. Add your profile image to Hero section
5. Add testimonials via API or MongoDB
6. Deploy to Vercel!

