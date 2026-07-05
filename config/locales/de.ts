import type { PortfolioContent } from './types';

export const de: PortfolioContent = {
  hero: {
    name: 'Ameer Hamza Subhani',
    greeting: 'Hallo, ich bin',
    availableBadge: 'Verfügbar für neue Projekte',
    title: 'Full-Stack-Entwickler',
    description:
      'Ich entwickle schöne, funktionale und benutzerfreundliche Webanwendungen mit modernen Technologien',
    location: '',
    primaryButtonText: 'Meine Arbeit ansehen',
    primaryButtonLink: '#projects',
    secondaryButtonText: 'Kontakt aufnehmen',
    secondaryButtonLink: '#contact',
    imageAltPrefix: 'Porträt von',
  },
  about: {
    title: 'Über Mich',
    paragraphs: [
      'Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit einer Vorliebe für außergewöhnliche digitale Erlebnisse. Ich spezialisiere mich auf die Entwicklung moderner Webanwendungen, die sowohl schön als auch funktional sind.',
      'Mit einer soliden Grundlage in Frontend- und Backend-Technologien erwecke ich Ideen durch sauberen Code und durchdachtes Design zum Leben. Ich bin stets bestrebt, neue Technologien zu erlernen und anspruchsvolle Projekte anzunehmen.',
      'Wenn ich nicht gerade programmiere, erkunde ich neue Frameworks, trage zu Open-Source-Projekten bei oder teile mein Wissen mit der Entwickler-Community.',
    ],
    experienceYears: '2+',
    experienceLabel: 'Jahre Erfahrung',
  },
  skills: {
    title: 'Fähigkeiten & Technologien',
    categories: [
      {
        title: 'Programmiersprachen',
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
        title: 'Tools & Sonstiges',
        skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma', 'Linux'],
      },
      {
        title: 'Sprachen',
        skills: ['Englisch', 'Urdu', 'Deutsch'],
      },
    ],
  },
  projects: {
    title: 'Ausgewählte Projekte',
    items: [
      {
        title: 'E-Commerce-Plattform',
        description:
          'Eine Full-Stack-E-Commerce-Lösung mit Benutzerauthentifizierung, Zahlungsintegration und Admin-Dashboard.',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe'],
        github: 'https://github.com/ah155209',
      },
      {
        title: 'Aufgabenverwaltungs-App',
        description:
          'Eine kollaborative Aufgabenverwaltungs-Anwendung mit Echtzeit-Updates und Funktionen zur Teamzusammenarbeit.',
        technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        github: 'https://github.com/ah155209',
      },
    ],
  },
  expertise: {
    title: 'Technische Expertise',
    subtitle: 'Fundiertes Wissen im gesamten Stack',
    items: [
      {
        category: 'Frontend-Entwicklung',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        description: 'Entwicklung responsiver, interaktiver Benutzeroberflächen',
      },
      {
        category: 'Backend-Entwicklung',
        skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'],
        description: 'Entwicklung skalierbarer serverseitiger Lösungen',
      },
      {
        category: 'Datenbank & Speicher',
        skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Database Design'],
        description: 'Entwurf effizienter Datenspeicherlösungen',
      },
      {
        category: 'DevOps & Tools',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
        description: 'Optimierung von Entwicklung und Deployment',
      },
    ],
  },
  solvingProblems: {
    title: 'Echte Probleme lösen',
    subtitle: 'Ich konzentriere mich darauf, Lösungen zu schaffen, die einen Unterschied machen',
    problems: [
      {
        icon: '💡',
        title: 'Innovation',
        description:
          'Verwandlung von Ideen in innovative digitale Lösungen, die reale Herausforderungen bewältigen.',
      },
      {
        icon: '⚡',
        title: 'Performance',
        description:
          'Entwicklung schneller, effizienter Anwendungen für außergewöhnliche Nutzererlebnisse.',
      },
      {
        icon: '🔒',
        title: 'Sicherheit',
        description:
          'Implementierung robuster Sicherheitsmaßnahmen zum Schutz von Nutzerdaten und Privatsphäre.',
      },
      {
        icon: '📱',
        title: 'Barrierefreiheit',
        description: 'Schaffung inklusiver Designs, die für alle und überall funktionieren.',
      },
    ],
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Alles, was du wissen musst',
    questions: [
      {
        question: 'Welche Dienstleistungen bietest du an?',
        answer:
          'Ich biete Full-Stack-Webentwicklung an, einschließlich Frontend- und Backend-Entwicklung, API-Design, Datenbankarchitektur und Deployment. Ich arbeite mit modernen Technologien wie React, Next.js, Node.js und MongoDB.',
      },
      {
        question: 'Wie lange dauert ein typisches Projekt?',
        answer:
          'Die Projektdauer variiert je nach Komplexität. Eine einfache Website kann 1-2 Wochen dauern, während eine vollständige Anwendung 4-8 Wochen oder länger in Anspruch nehmen kann. Einen detaillierten Zeitplan erstelle ich im Erstgespräch.',
      },
      {
        question: 'Arbeitest du auch remote mit Kunden?',
        answer:
          'Ja! Ich arbeite mit Kunden weltweit und bin erfahren in der Remote-Zusammenarbeit. Ich nutze moderne Kommunikationstools, um ein reibungsloses Projektmanagement und regelmäßige Updates zu gewährleisten.',
      },
      {
        question: 'Wie sieht dein Entwicklungsprozess aus?',
        answer:
          'Ich folge einem agilen Entwicklungsprozess mit regelmäßigen Abstimmungen, iterativer Entwicklung und kontinuierlichem Feedback. Das sorgt für Transparenz und ermöglicht Anpassungen im Projektverlauf.',
      },
      {
        question: 'Kannst du bei bestehenden Projekten helfen?',
        answer:
          'Auf jeden Fall! Ich kann bestehende Codebasen warten, aktualisieren oder überarbeiten. Ob Fehlerbehebung, neue Funktionen oder Performance-Verbesserungen – ich helfe gerne.',
      },
    ],
  },
  calendar: {
    title: 'Verfügbarkeit',
    description: 'Prüfe meine Verfügbarkeit für neue Projekte und Kooperationen',
  },
  contact: {
    title: 'Kontakt',
    heading: 'Lass uns in Verbindung treten',
    description:
      'Ich bin immer offen für neue Projekte, kreative Ideen oder die Möglichkeit, Teil deiner Visionen zu sein. Melde dich gerne!',
  },
  testimonials: {
    title: 'Was andere sagen',
  },
  footer: {
    tagline: 'Full-Stack-Entwickler für moderne, benutzerfreundliche Webanwendungen.',
    rightsReserved: 'Alle Rechte vorbehalten.',
    builtWith: 'Mit ❤ erstellt mit Next.js & Tailwind CSS',
  },
  navLinks: [
    { href: '#home', label: 'Start' },
    { href: '#about', label: 'Über mich' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#skills', label: 'Fähigkeiten' },
    { href: '#projects', label: 'Projekte' },
    { href: '#faq', label: 'FAQ' },
    { href: '#calendar', label: 'Kalender' },
    { href: '#contact', label: 'Kontakt' },
  ],
  ui: {
    toggleMenu: 'Menü umschalten',
    name: 'Name',
    namePlaceholder: 'Dein Name',
    email: 'E-Mail',
    emailPlaceholder: 'deine.email@beispiel.com',
    message: 'Nachricht',
    messagePlaceholder: 'Deine Nachricht',
    send: 'Nachricht senden',
    sending: 'Wird gesendet...',
    successMessage: 'Nachricht erfolgreich gesendet! Ich melde mich bald bei dir.',
    errorMessage:
      'Nachricht konnte nicht gesendet werden. Bitte versuche es erneut oder kontaktiere mich direkt per E-Mail.',
    followMe: 'Folge mir',
    socialNotConfigured: 'Social-Media-Links nicht konfiguriert',
    github: 'GitHub',
    liveDemo: 'Live-Demo',
    selectedDate: 'Ausgewähltes Datum',
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    weekdays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    theme: {
      light: 'Hell',
      dark: 'Dunkel',
      system: 'System',
      toggleLabel: 'Design wechseln',
    },
    language: {
      toggleLabel: 'Sprache wechseln',
    },
  },
};
