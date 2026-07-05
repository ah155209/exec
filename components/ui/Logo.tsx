import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  /** 'auto' follows the theme (black/white text); 'light' is always white,
   * for placing on surfaces that stay dark regardless of theme (e.g. Footer). */
  variant?: 'auto' | 'light';
}

export default function Logo({ className = '', iconOnly = false, variant = 'auto' }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="devexec — home"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-sm group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          className="h-4.5 w-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 6L3 12l5 6M16 6l5 6-5 6" />
        </svg>
      </span>
      {!iconOnly && (
        <span
          className={`text-xl font-bold tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-black dark:text-white'
          }`}
        >
          dev
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            exec
          </span>
        </span>
      )}
    </Link>
  );
}
