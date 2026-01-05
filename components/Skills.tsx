'use client';

import AnimatedSection from './ui/AnimatedSection';
import { motion } from 'framer-motion';
import { skillsData } from '@/config/portfolio';

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsProps {
  title?: string;
  skillCategories?: SkillCategory[];
}

export default function Skills({
  title = skillsData.title,
  skillCategories = skillsData.categories,
}: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
            {title}
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
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
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
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

