'use client';

import AnimatedSection from './ui/AnimatedSection';
import { motion } from 'framer-motion';
import { expertiseData } from '@/config/portfolio';

interface ExpertiseItem {
  category: string;
  skills: string[];
  description: string;
}

interface ExpertiseProps {
  title?: string;
  subtitle?: string;
  expertise?: ExpertiseItem[];
}

export default function Expertise({
  title = expertiseData.title,
  subtitle = expertiseData.subtitle,
  expertise = expertiseData.expertise,
}: ExpertiseProps) {
  return (
    <section
      id="expertise"
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

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {expertise.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
                  {item.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
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

