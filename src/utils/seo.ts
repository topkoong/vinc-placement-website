// Import type definitions
import type { SEOMeta, Language } from '@/types';
import { SITE_CONFIG, SEO_KEYWORDS } from './constants';
import { getAlternateUrls } from '@/i18n/utils';

/**
 * Generate comprehensive SEO metadata for a page
 * @param params - SEO parameters including title, description, language, etc.
 * @returns Complete SEO metadata object
 *
 * This function creates all necessary meta tags for:
 * - Basic SEO (title, description, keywords)
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Alternate language versions (hreflang)
 * - Canonical URLs
 */
export function generateSEOMeta(params: {
  title: string; // Page title
  description: string; // Meta description
  lang: Language; // Current language
  path?: string; // Current path (for alternates)
  keywords?: string[]; // Additional keywords
  image?: string; // Open Graph image
}): SEOMeta {
  const {
    title,
    description,
    lang,
    path = '/',
    keywords = [],
    image = '/images/og-image.jpg', // Default OG image
  } = params;

  // Combine default keywords with page-specific keywords
  const allKeywords = [...SEO_KEYWORDS, ...keywords];

  // Generate full page title with site name
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;

  // Generate canonical URL
  const canonical = `${SITE_CONFIG.url}/${lang}${path}`;

  // Generate alternate language URLs for hreflang
  const alternates = getAlternateUrls(path);

  // Return complete SEO metadata
  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    image: `${SITE_CONFIG.url}${image}`,
    canonical,
    lang,
    alternates,
  };
}

/**
 * Generate JSON-LD structured data for organization
 * @returns JSON-LD schema markup
 *
 * This structured data helps search engines understand:
 * - Business information
 * - Contact details
 * - Founding date
 * - Service areas
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundedYear.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '163/1 Nuanchan Road, Nuanchan',
      addressLocality: 'Buengkum',
      addressRegion: 'Bangkok',
      postalCode: '10230',
      addressCountry: 'TH',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-2-949-9572',
      contactType: 'customer service',
      areaServed: 'Asia',
      availableLanguage: ['English', 'Japanese', 'Thai'],
    },
    sameAs: [
      // Add social media profiles when available
      // 'https://www.facebook.com/vincplacement',
      // 'https://www.linkedin.com/company/vinc-placement'
    ],
  };
}

/**
 * Generate JSON-LD structured data for breadcrumbs
 * @param items - Array of breadcrumb items
 * @returns JSON-LD breadcrumb schema
 *
 * Example usage:
 * generateBreadcrumbSchema([
 *   { name: 'Home', url: '/' },
 *   { name: 'About', url: '/about' }
 * ])
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
