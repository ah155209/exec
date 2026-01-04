'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from './ui/Calendar';
import AnimatedSection from './ui/AnimatedSection';
import { format } from 'date-fns';

export default function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <section
      id="calendar"
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black dark:text-white">
            Calendar
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Select a date to view availability or schedule a meeting
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
            <div className="w-full md:w-auto">
              <Calendar
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="mx-auto"
              />
            </div>
            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 w-full md:w-64"
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  Selected Date
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </p>
              </motion.div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

