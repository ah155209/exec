'use client';

import AnimatedSection from './ui/AnimatedSection';
import { motion } from 'framer-motion';
import { solvingProblemsData } from '@/config/portfolio';

interface Problem {
  icon: string;
  title: string;
  description: string;
}

interface SolvingRealProblemsProps {
  title?: string;
  subtitle?: string;
  problems?: Problem[];
}

export default function SolvingRealProblems({
  title = solvingProblemsData.title,
  subtitle = solvingProblemsData.subtitle,
  problems = solvingProblemsData.problems,
}: SolvingRealProblemsProps) {
  return (
    <section
      id="solving-problems"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              {title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-gray-200 dark:border-gray-800"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

