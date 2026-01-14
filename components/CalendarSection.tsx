'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from './ui/Calendar';
import AnimatedSection from './ui/AnimatedSection';
import { format } from 'date-fns';
import { calendarData } from '@/config/portfolio';

export default function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <section
      id="calendar"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              {calendarData.title}
          </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {calendarData.description}
          </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="up">
          <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-800">
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
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 w-full md:w-64 border border-blue-200 dark:border-blue-800"
              >
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  Selected Date
                </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                </p>
              </motion.div>
            )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

