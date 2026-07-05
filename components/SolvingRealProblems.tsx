'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useLanguage } from './providers/LanguageProvider';

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

export default function SolvingRealProblems(props: SolvingRealProblemsProps) {
  const { t } = useLanguage();
  const {
    title = t.solvingProblems.title,
    subtitle = t.solvingProblems.subtitle,
    problems = t.solvingProblems.problems,
  } = props;

  return (
    <section
      id="solving-problems"
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading title={title} subtitle={subtitle} />
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
                className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-3xl">
                  {problem.icon}
                </div>
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

