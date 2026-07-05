interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Consistent section heading: title, gradient accent bar, optional subtitle.
 */
export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-blue-600 to-purple-600"
      />
      {subtitle && (
        <p className="mt-5 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
