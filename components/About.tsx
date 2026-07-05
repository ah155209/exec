'use client';

import AnimatedSection from './ui/AnimatedSection';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useLanguage } from './providers/LanguageProvider';

interface AboutProps {
  title?: string;
  paragraphs?: string[];
  experienceYears?: string;
  experienceLabel?: string;
}

export default function About(props: AboutProps) {
  const { t } = useLanguage();
  const {
    title = t.about.title,
    paragraphs = t.about.paragraphs,
    experienceYears = t.about.experienceYears,
    experienceLabel = t.about.experienceLabel,
  } = props;

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={title} />
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection delay={0.2} direction="right" className="order-2 lg:order-1">
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3} direction="left" className="order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-64 flex items-center justify-center border border-blue-200/60 dark:border-blue-800/40"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                >
                  {experienceYears}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300">
                  {experienceLabel}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

