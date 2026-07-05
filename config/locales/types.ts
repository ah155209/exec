export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export interface ExpertiseItem {
  category: string;
  skills: string[];
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface PortfolioContent {
  hero: {
    name: string;
    greeting: string;
    availableBadge: string;
    title: string;
    description: string;
    location: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    imageAltPrefix: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    experienceYears: string;
    experienceLabel: string;
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  expertise: {
    title: string;
    subtitle: string;
    items: ExpertiseItem[];
  };
  solvingProblems: {
    title: string;
    subtitle: string;
    problems: Problem[];
  };
  faq: {
    title: string;
    subtitle: string;
    questions: FAQItem[];
  };
  calendar: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    heading: string;
    description: string;
  };
  testimonials: {
    title: string;
  };
  footer: {
    tagline: string;
    rightsReserved: string;
    builtWith: string;
  };
  navLinks: NavLink[];
  ui: {
    toggleMenu: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    followMe: string;
    socialNotConfigured: string;
    github: string;
    liveDemo: string;
    selectedDate: string;
    previousMonth: string;
    nextMonth: string;
    weekdays: string[];
    theme: {
      light: string;
      dark: string;
      system: string;
      toggleLabel: string;
    };
    language: {
      toggleLabel: string;
    };
  };
}
