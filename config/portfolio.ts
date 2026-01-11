/**
 * Portfolio Configuration
 * 
 * This file contains all static data for the portfolio website.
 * Update this file to change content across all components.
 */

// ============================================
// Hero Section
// ============================================
export const heroData = {
  name: "Ameer Hamza Subhani",
  title: "Full Stack Developer",
  description: "I build beautiful, functional, and user-friendly web applications with modern technologies",
  location: "", // Optional: e.g., "Lahore, Pakistan"
  primaryButtonText: "View My Work",
  primaryButtonLink: "#projects",
  secondaryButtonText: "Get In Touch",
  secondaryButtonLink: "#contact",
};

// ============================================
// About Section
// ============================================
export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I'm a passionate full-stack developer with a love for creating exceptional digital experiences. I specialize in building modern web applications that are both beautiful and functional.",
    "With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design. I'm always eager to learn new technologies and take on challenging projects.",
    "When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  experienceYears: "2+",
  experienceLabel: "Years of Experience",
};

// ============================================
// Skills Section
// ============================================
export const skillsData = {
  title: "Skills & Technologies",
  categories: [
    {
      title: 'Programming Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'C++',
      ],
    },
    {
      title: 'Frontend',
      skills: [
        'React',
        'Tailwind CSS',
        'Next.js',
        'React Native',
        'HTML/CSS',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express',
        'REST APIs',
        'SQL',
        'GraphQL',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        'Git',
        'Docker',
        'Vercel',
        'AWS',
        'Figma',
        'Linux',
      ],
    },
    {
      title: 'Languages',
      skills: [
        'English',
        'Urdu',
        'German',
      ],
    },
  ],
};

// ============================================
// Projects Section
// ============================================
export const projectsData = {
  title: "Featured Projects",
  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],
};

// ============================================
// Contact Section
// ============================================
export const contactData = {
  title: "Get In Touch",
  heading: "Let's Connect",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
  // Social links are handled via environment variables in the component
  // But you can add default structure here if needed
};

// ============================================
// Navigation Links
// ============================================
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#faq', label: 'FAQ' },
  { href: '#calendar', label: 'Calendar' },
  { href: '#contact', label: 'Contact' },
];

// ============================================
// Site Metadata
// ============================================
export const siteMetadata = {
  name: "Ameer Hamza Subhani",
  title: "Ameer Hamza Subhani - Full Stack Developer Portfolio",
  description: "Portfolio website of Ameer Hamza Subhani - Full Stack Developer specializing in modern web applications",
  keywords: ["portfolio", "full stack developer", "web developer", "next.js", "react"],
};

// ============================================
// Testimonials Section
// ============================================
export const testimonialsData = {
  title: "What People Say",
};

// ============================================
// Solving Real Problems Section
// ============================================
export const solvingProblemsData = {
  title: "Solving Real Problems",
  subtitle: "I focus on creating solutions that make a difference",
  problems: [
    {
      icon: "💡",
      title: "Innovation",
      description: "Transforming ideas into innovative digital solutions that solve real-world challenges.",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Building fast, efficient applications that deliver exceptional user experiences.",
    },
    {
      icon: "🔒",
      title: "Security",
      description: "Implementing robust security measures to protect user data and privacy.",
    },
    {
      icon: "📱",
      title: "Accessibility",
      description: "Creating inclusive designs that work for everyone, everywhere.",
    },
  ],
};

// ============================================
// Technical Expertise Section
// ============================================
export const expertiseData = {
  title: "Technical Expertise",
  subtitle: "Deep knowledge across the full stack",
  expertise: [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "Building responsive, interactive user interfaces",
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
      description: "Creating scalable server-side solutions",
    },
    {
      category: "Database & Storage",
      skills: ["MongoDB", "PostgreSQL", "SQL", "Database Design"],
      description: "Designing efficient data storage solutions",
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD"],
      description: "Streamlining development and deployment",
    },
  ],
};

// ============================================
// FAQ Section
// ============================================
export const faqData = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know",
  questions: [
    {
      question: "What services do you offer?",
      answer: "I offer full-stack web development services including frontend and backend development, API design, database architecture, and deployment. I work with modern technologies like React, Next.js, Node.js, and MongoDB.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 1-2 weeks, while a full-stack application could take 4-8 weeks or more. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes! I work with clients worldwide and am experienced in remote collaboration. I use modern communication tools to ensure smooth project management and regular updates.",
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile development process with regular check-ins, iterative development, and continuous feedback. This ensures transparency and allows for adjustments as the project evolves.",
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! I can help maintain, update, or refactor existing codebases. Whether it's fixing bugs, adding features, or improving performance, I'm here to help.",
    },
  ],
};

// ============================================
// Calendar Section
// ============================================
export const calendarData = {
  title: "Availability",
  description: "Check my availability for new projects and collaborations",
};

// ============================================
// Footer
// ============================================
export const footerData = {
  copyright: "© 2024 Ameer Hamza Subhani. All rights reserved.",
  // Add footer links if needed
};

