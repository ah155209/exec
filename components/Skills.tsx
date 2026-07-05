'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useLanguage } from './providers/LanguageProvider';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsProps {
  title?: string;
  skillCategories?: SkillCategory[];
}

export default function Skills(props: SkillsProps) {
  const { t } = useLanguage();
  const { title = t.skills.title, skillCategories = t.skills.categories } = props;

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading title={title} />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40"
              >
                <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium transition-colors hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

