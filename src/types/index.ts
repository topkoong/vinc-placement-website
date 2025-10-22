// Type definition for supported languages in the application
export type Language = 'en' | 'ja' | 'th';

// Interface for navigation menu items
export interface NavItem {
  label: string; // Display text for the menu item
  href: string; // URL path for navigation
  children?: NavItem[]; // Optional nested menu items (for dropdowns)
}

// Interface for service offerings
export interface Service {
  id: string; // Unique identifier for the service
  title: string; // Service title
  description: string; // Detailed description
  icon: string; // Icon identifier (e.g., 'users', 'building')
  features: string[]; // List of service features
}

// Interface for project references/case studies
export interface Project {
  id: string; // Unique identifier
  name: string; // Project name
  location: string; // Project location
  year: string; // Year of completion
  category: string; // Project category (e.g., 'Airport', 'Highway')
  description: string; // Project description
  image?: string; // Optional project image URL
}

// Interface for company statistics
export interface Stat {
  value: string; // Statistic value (e.g., '10000+')
  label: string; // Statistic label (e.g., 'Personnel Deployed')
  suffix?: string; // Optional suffix (e.g., '+', '%')
}

// Interface for SEO metadata
export interface SEOMeta {
  title: string; // Page title (appears in browser tab)
  description: string; // Meta description for search engines
  keywords?: string[]; // SEO keywords
  image?: string; // Open Graph image URL
  canonical?: string; // Canonical URL for duplicate content handling
  lang: Language; // Page language
  alternates?: {
    // Alternate language versions
    lang: Language;
    href: string;
  }[];
}

// Interface for contact information
export interface ContactInfo {
  address: string; // Physical address
  phone: string[]; // Phone numbers (array for multiple)
  email: string; // Contact email
  googleMapsUrl: string; // Google Maps link
}

// Interface for translation structure
export interface Translations {
  [key: string]: string | Translations; // Nested translation object
}
