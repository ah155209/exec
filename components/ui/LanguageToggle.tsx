'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import type { Locale } from '@/config/locales';

const LANGS: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
];

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.language.toggleLabel}
      className="flex items-center rounded-full border border-gray-200 dark:border-gray-800 p-0.5 text-xs font-semibold"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            locale === code
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
