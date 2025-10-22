// Import type definitions
import type { ContactInfo, Project } from '@/types';

// Site configuration constants
export const SITE_CONFIG = {
  name: 'VINC Placement', // Company name
  title: 'VINC Placement Co., Ltd.', // Full company name
  domain: 'www.vincplacement.com', // Domain name
  url: 'https://www.vincplacement.com', // Full site URL
  description: 'Leading workforce solutions in Asia since 1988', // Site tagline
  locale: 'en_US', // Default locale for Open Graph
  themeColor: '#3b82f6', // Brand color for browser theme
  foundedYear: 1988, // Company founding year
  currentYear: new Date().getFullYear(), // Current year (dynamic)
} as const;

// Contact information
export const CONTACT_INFO: ContactInfo = {
  // Company address
  address: '163/1 Nuanchan Road, Nuanchan, Buengkum, Bangkok, 10230, Thailand',

  // Phone numbers (array to support multiple numbers)
  phone: ['+66-2-949-9572', '+66-2-949-9580'],

  // Contact email address
  email: 'bluekiwitoey@gmail.com',

  // Google Maps link (for directions, not embedding)
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=163%2F1+Nuanchan+Road%2C+Nuanchan%2C+Buengkum%2C+Bangkok%2C+10230%2C+Thailand',
} as const;

// Company statistics (for hero/about section)
export const STATS = [
  {
    value: '35',
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    value: '10,000',
    suffix: '+',
    label: 'Personnel Deployed',
  },
  {
    value: '500',
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    value: '20',
    suffix: '+',
    label: 'Countries Served',
  },
] as const;

// Sample project references (add more as needed)
export const PROJECTS: Project[] = [
  {
    id: 'st-helena-airport',
    name: 'St. Helena Airport',
    location: 'St. Helena',
    year: '2016',
    category: 'Airport Infrastructure',
    description: 'Major airport construction project in St. Helena',
  },
  // Add more projects as available from the existing website
] as const;

// Service categories with icons (using Lucide icon names or custom SVG)
export const SERVICES = [
  {
    id: 'workforce',
    icon: 'users',
    category: 'Workforce Solutions & Placement',
    description:
      'End-to-end recruitment and placement services for all job categories',
  },
  {
    id: 'engineering',
    icon: 'building',
    category: 'Engineering & Technical Recruitment',
    description:
      'Specialized recruitment for engineering and technical roles requiring higher qualifications',
  },
  {
    id: 'training',
    icon: 'graduation-cap',
    category: 'Training & Development Centre',
    description:
      'Comprehensive pre-departure training to prepare Thai workers for success in Japan',
  },
  {
    id: 'testing',
    icon: 'clipboard-check',
    category: 'Testing & Certification Centre',
    description:
      'State-of-the-art facility for skills testing, certification, and quality assurance',
  },
  {
    id: 'documentation',
    icon: 'file-text',
    category: 'Documentation & Visa Support',
    description:
      'Complete assistance with legal requirements for working in Japan',
  },
  {
    id: 'support',
    icon: 'headphones',
    category: 'Post-Placement Support',
    description: 'Continuous support for workers and employers after placement',
  },
] as const;

// Navigation routes (used for sitemap and navigation)
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
} as const;

// Social media links (add as needed)
export const SOCIAL_LINKS = {
  // Add social media profiles if available
  // facebook: 'https://facebook.com/vincplacement',
  // linkedin: 'https://linkedin.com/company/vinc-placement',
  // twitter: 'https://twitter.com/vincplacement'
} as const;

// SEO keywords for Thai-Japan workforce placement
export const SEO_KEYWORDS = [
  'Thai workers for Japan',
  'Japan job placement Thailand',
  'Thai workers recruitment',
  'Work in Japan from Thailand',
  'Japanese factory jobs for Thai',
  'Thai engineers Japan',
  'Japan workforce solutions',
  'Thai blue collar workers Japan',
  'Japanese construction workers Thailand',
  'Thailand Japan employment agency',
  'Thai workers Japan visa',
  'Japan job opportunities Thailand',
  'Thai workers Japan placement',
  'Japanese companies Thai workers',
  'Thailand Japan workforce deployment',
] as const;
