'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useLanguage } from './providers/LanguageProvider';

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

export default function Expertise(props: ExpertiseProps) {
  const { t } = useLanguage();
  const {
    title = t.expertise.title,
    subtitle = t.expertise.subtitle,
    expertise = t.expertise.items,
  } = props;

  return (
    <section
      id="expertise"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading title={title} subtitle={subtitle} />
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
                className="bg-white dark:bg-black rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-800 hover:border-blue-500/40 dark:hover:border-blue-500/40"
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
                      className="px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
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

