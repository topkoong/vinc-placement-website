// Import necessary modules for Astro configuration
import { defineConfig } from 'astro/config';
// Sitemap integration for automatic sitemap.xml generation
import sitemap from '@astrojs/sitemap';

// Export Astro configuration with all required settings
export default defineConfig({
  // Site URL - REQUIRED for sitemap and canonical URLs
  site: 'https://www.vincplacement.com',

  // Base path for deployment (use '/' for root domain)
  base: '/',

  // Server configuration for development
  server: {
    port: 3000, // Development server port
    host: true, // Allow external connections (useful for mobile testing)
  },

  // Build output configuration
  output: 'static', // Generate static HTML files (best for performance & SEO)

  // Integrations - extend Astro functionality
  integrations: [
    // Sitemap integration - automatically generates sitemap.xml
    sitemap({
      // Generate separate sitemap entries for each language
      i18n: {
        defaultLocale: 'ja', // Default language (Japanese)
        locales: {
          en: 'en-US', // English (United States)
          ja: 'ja-JP', // Japanese (Japan) - This is now the default
          th: 'th-TH', // Thai (Thailand)
        },
      },
      // Filter function to exclude non-page routes from sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // Vite configuration for build optimization
  vite: {
    // CSS processing options
    css: {
      transformer: 'postcss', // Use PostCSS for Tailwind processing
    },
    // Build optimization settings
    build: {
      // Enable CSS code splitting for better caching
      cssCodeSplit: true,
      // Rollup options for bundle optimization
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching strategy
          manualChunks: {
            // Separate vendor chunk for framework code
            vendor: ['framer-motion'],
          },
        },
      },
    },
  },

  // Markdown configuration (if using .md files)
  markdown: {
    shikiConfig: {
      theme: 'github-dark', // Code syntax highlighting theme
    },
  },

  // Compiler optimizations
  compressHTML: true, // Minify HTML output for production

  // Image optimization settings
  image: {
    domains: ['www.vincplacement.com'], // Allowed domains for remote images
    remotePatterns: [
      {
        protocol: 'https', // Only allow HTTPS images
      },
    ],
  },
});
