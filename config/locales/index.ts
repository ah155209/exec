import { en } from './en';
import { de } from './de';
import type { PortfolioContent } from './types';

export type Locale = 'en' | 'de';

export const locales: Record<Locale, PortfolioContent> = { en, de };

export const defaultLocale: Locale = 'en';

export type { PortfolioContent };
