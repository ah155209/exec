export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-black dark:bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Ameer Hamza Subhani. All rights reserved.
          </p>
          <p className="text-gray-400">
            Built with{' '}
            <span className="text-red-500">❤</span>{' '}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

