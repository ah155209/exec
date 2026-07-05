import type { PortfolioContent } from './types';

export const en: PortfolioContent = {
  hero: {
    name: 'Ameer Hamza Subhani',
    greeting: "Hi, I'm",
    availableBadge: 'Available for new projects',
    title: 'Full Stack Developer',
    description:
      'I build beautiful, functional, and user-friendly web applications with modern technologies',
    location: '',
    primaryButtonText: 'View My Work',
    primaryButtonLink: '#projects',
    secondaryButtonText: 'Get In Touch',
    secondaryButtonLink: '#contact',
    imageAltPrefix: 'Portrait of',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a passionate full-stack developer with a love for creating exceptional digital experiences. I specialize in building modern web applications that are both beautiful and functional.",
      "With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design. I'm always eager to learn new technologies and take on challenging projects.",
      "When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.",
    ],
    experienceYears: '2+',
    experienceLabel: 'Years of Experience',
  },
  skills: {
    title: 'Skills & Technologies',
    categories: [
      {
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
      },
      {
        title: 'Frontend',
        skills: ['React', 'Tailwind CSS', 'Next.js', 'React Native', 'HTML/CSS'],
      },
      {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'REST APIs', 'SQL', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      },
      {
        title: 'Tools & Others',
        skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma', 'Linux'],
      },
      {
        title: 'Languages',
        skills: ['English', 'Urdu', 'German'],
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    items: [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
        github: 'https://github.com/ah155209',
      },
      {
        title: 'Task Management App',
        description:
          'A collaborative task management application with real-time updates and team collaboration features.',
        technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        github: 'https://github.com/ah155209',
      },
    ],
  },
  expertise: {
    title: 'Technical Expertise',
    subtitle: 'Deep knowledge across the full stack',
    items: [
      {
        category: 'Frontend Development',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        description: 'Building responsive, interactive user interfaces',
      },
      {
        category: 'Backend Development',
        skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
        description: 'Creating scalable server-side solutions',
      },
      {
        category: 'Database & Storage',
        skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Database Design'],
        description: 'Designing efficient data storage solutions',
      },
      {
        category: 'DevOps & Tools',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
        description: 'Streamlining development and deployment',
      },
    ],
  },
  solvingProblems: {
    title: 'Solving Real Problems',
    subtitle: 'I focus on creating solutions that make a difference',
    problems: [
      {
        icon: '💡',
        title: 'Innovation',
        description:
          'Transforming ideas into innovative digital solutions that solve real-world challenges.',
      },
      {
        icon: '⚡',
        title: 'Performance',
        description:
          'Building fast, efficient applications that deliver exceptional user experiences.',
      },
      {
        icon: '🔒',
        title: 'Security',
        description:
          'Implementing robust security measures to protect user data and privacy.',
      },
      {
        icon: '📱',
        title: 'Accessibility',
        description: 'Creating inclusive designs that work for everyone, everywhere.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know',
    questions: [
      {
        question: 'What services do you offer?',
        answer:
          'I offer full-stack web development services including frontend and backend development, API design, database architecture, and deployment. I work with modern technologies like React, Next.js, Node.js, and MongoDB.',
      },
      {
        question: 'How long does a typical project take?',
        answer:
          "Project timelines vary based on complexity. A simple website might take 1-2 weeks, while a full-stack application could take 4-8 weeks or more. I'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: 'Do you work with clients remotely?',
        answer:
          'Yes! I work with clients worldwide and am experienced in remote collaboration. I use modern communication tools to ensure smooth project management and regular updates.',
      },
      {
        question: 'What is your development process?',
        answer:
          'I follow an agile development process with regular check-ins, iterative development, and continuous feedback. This ensures transparency and allows for adjustments as the project evolves.',
      },
      {
        question: 'Can you help with existing projects?',
        answer:
          "Absolutely! I can help maintain, update, or refactor existing codebases. Whether it's fixing bugs, adding features, or improving performance, I'm here to help.",
      },
    ],
  },
  calendar: {
    title: 'Availability',
    description: 'Check my availability for new projects and collaborations',
  },
  contact: {
    title: 'Get In Touch',
    heading: "Let's Connect",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
  },
  testimonials: {
    title: 'What People Say',
  },
  footer: {
    tagline: 'Full Stack Developer building modern, user-friendly web applications.',
    rightsReserved: 'All rights reserved.',
    builtWith: 'Built with ❤ using Next.js & Tailwind CSS',
  },
  navLinks: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#faq', label: 'FAQ' },
    { href: '#calendar', label: 'Calendar' },
    { href: '#contact', label: 'Contact' },
  ],
  ui: {
    toggleMenu: 'Toggle menu',
    name: 'Name',
    namePlaceholder: 'Your Name',
    email: 'Email',
    emailPlaceholder: 'your.email@example.com',
    message: 'Message',
    messagePlaceholder: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage:
      'Failed to send message. Please try again or contact me directly via email.',
    followMe: 'Follow Me',
    socialNotConfigured: 'Social links not configured',
    github: 'GitHub',
    liveDemo: 'Live Demo',
    selectedDate: 'Selected Date',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      toggleLabel: 'Toggle theme',
    },
    language: {
      toggleLabel: 'Switch language',
    },
  },
};
