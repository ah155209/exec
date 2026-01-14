'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import AmeerImage from '../public/hamza-s.png';
import { heroData } from '@/config/portfolio';

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  location?: string;
  image?: string | StaticImageData;
  imageAlt?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function Hero({
  name = heroData.name,
  title = heroData.title,
  description = heroData.description,
  location = heroData.location,
  image = AmeerImage,
  imageAlt = "Profile picture",
  primaryButtonText = heroData.primaryButtonText,
  primaryButtonLink = heroData.primaryButtonLink,
  secondaryButtonText = heroData.secondaryButtonText,
  secondaryButtonLink = heroData.secondaryButtonLink,
}: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-16 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black dark:text-white"
            >
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2"
            >
              {title}
            </motion.p>
            {location && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center justify-center md:justify-start gap-2 mb-4 text-gray-500 dark:text-gray-500"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm sm:text-base md:text-lg">{location}</span>
              </motion.div>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-6 sm:mb-8 max-w-2xl"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-stretch sm:items-center"
            >
              <Link
                href={primaryButtonLink}
                className="px-6 sm:px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-center"
              >
                {primaryButtonText}
              </Link>
              <Link
                href={secondaryButtonLink}
                className="px-6 sm:px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>
          </motion.div>
          
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-top-left object-cover"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

