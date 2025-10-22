/** @type {import('tailwindcss').Config} */
export default {
  // Content paths - Tailwind scans these files for class names
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', // All source files
  ],

  // Enable dark mode support (class-based strategy)
  darkMode: 'class',

  // Theme customization
  theme: {
    // Extend default Tailwind theme (keeps defaults + adds custom values)
    extend: {
      // Custom color palette for VINC Placement brand
      colors: {
        // Primary brand color (professional blue)
        primary: {
          50: '#eff6ff', // Lightest shade
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand color
          600: '#2563eb', // Darker for hover states
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a', // Darkest shade
          950: '#172554',
        },
        // Secondary color (professional gray)
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Main secondary color
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Accent color (vibrant for CTAs)
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // Main accent color
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },

      // Custom font families
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Body text
        heading: ['Poppins', 'system-ui', 'sans-serif'], // Headings
        mono: ['JetBrains Mono', 'monospace'], // Code/monospace
      },

      // Custom spacing scale (useful for consistent padding/margins)
      spacing: {
        128: '32rem', // Extra large spacing
        144: '36rem',
      },

      // Custom border radius
      borderRadius: {
        '4xl': '2rem', // Extra rounded corners
      },

      // Custom box shadows for depth
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        medium:
          '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
        hard: '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
      },

      // Custom animation durations and timing functions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        float: 'float 3s ease-in-out infinite',
      },

      // Keyframe definitions for custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      // Custom container settings
      container: {
        center: true, // Center containers by default
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '2rem', // Small screens
          lg: '4rem', // Large screens
          xl: '5rem', // Extra large screens
          '2xl': '6rem', // 2X large screens
        },
      },

      // Custom screen breakpoints (if needed beyond defaults)
      screens: {
        xs: '475px', // Extra small devices
        // Default breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
        '3xl': '1920px', // Extra large displays
      },
    },
  },

  // Plugins for additional functionality
  plugins: [
    // Add official Tailwind plugins here if needed
    // Example: require('@tailwindcss/forms'),
    // Example: require('@tailwindcss/typography'),
  ],
};
