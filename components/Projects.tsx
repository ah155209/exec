'use client';

import Link from 'next/link';
import AnimatedSection from './ui/AnimatedSection';
import { motion } from 'framer-motion';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

interface ProjectsProps {
  title?: string;
  projects?: Project[];
}

const defaultProjects: Project[] = [
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
];

export default function Projects({
  title = "Featured Projects",
  projects = defaultProjects,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
            {title}
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                    >
                      GitHub →
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

