'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  message: string;
  rating: number;
  image?: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      if (data.success) {
        setTestimonials(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <section
        id="testimonials"
        className="py-20 px-6 bg-white dark:bg-black"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading testimonials...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
            What People Say
          </h2>
        </AnimatedSection>

        {testimonials.length === 0 ? (
          <AnimatedSection delay={0.2}>
            <div className="text-center text-gray-600 dark:text-gray-400 py-12">
              <p className="text-lg mb-4">No testimonials yet.</p>
              <p className="text-sm">Check back soon for client feedback!</p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial._id}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-black dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

