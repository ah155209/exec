/**
 * Site Configuration
 *
 * Non-translatable, environment-driven values (SEO metadata, social links).
 * Translatable UI copy lives in config/locales/{en,de}.ts.
 */

// ============================================
// Site Metadata
// ============================================
export const siteMetadata = {
  name: "Ameer Hamza Subhani",
  title: "Ameer Hamza Subhani - Full Stack Developer Portfolio",
  description: "Portfolio website of Ameer Hamza Subhani - Full Stack Developer specializing in modern web applications",
  keywords: ["portfolio", "full stack developer", "web developer", "next.js", "react"],
  // Set NEXT_PUBLIC_SITE_URL in your environment (e.g. on Vercel) to your
  // production domain so OG tags, the sitemap, and robots.txt use it.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ameer-hamza-subhani.vercel.app",
};

// ============================================
// Social Links
// ============================================
// NEXT_PUBLIC_ vars are inlined at build time, so these work in client
// components too. Leave a value empty to hide that link.
export const socialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ah155209",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "subhania895@gmail.com",
};
