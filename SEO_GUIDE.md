# SEO Optimization Guide

This guide covers comprehensive SEO strategies for the VINC Placement website to maximize visibility for both employers and job seekers.

## 🎯 SEO Strategy Overview

### Target Audiences
1. **Japanese Employers** - Companies looking to hire Thai workers
2. **Thai Job Seekers** - Workers looking for opportunities in Japan
3. **International Companies** - Global firms with Japanese operations

### Primary Keywords
- **Employer-focused**: "Thai workers Japan", "Japanese employers Thai workers", "Thailand Japan workforce"
- **Job seeker-focused**: "Japan jobs Thailand", "Japanese blue collar jobs", "Japan employment agency"
- **Industry-specific**: "Construction workers Japan", "Manufacturing workers Japan", "Engineering recruitment Thailand Japan"

## 🔍 Technical SEO Implementation

### 1. Meta Tags Optimization

#### Page Titles
```typescript
// src/utils/seo.ts
export function generateSEOMeta({
  title,
  description,
  keywords,
  lang,
  url
}: SEOMetaProps) {
  return {
    title: `${title} | VINC Placement`,
    description,
    keywords,
    canonical: url,
    'og:title': title,
    'og:description': description,
    'og:locale': lang,
    'og:url': url,
    'og:type': 'website',
    'og:site_name': 'VINC Placement',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description
  };
}
```

#### Multilingual SEO
```html
<!-- Hreflang tags for multilingual support -->
<link rel="alternate" hreflang="en" href="https://vincplacement.com/en/" />
<link rel="alternate" hreflang="ja" href="https://vincplacement.com/ja/" />
<link rel="alternate" hreflang="th" href="https://vincplacement.com/th/" />
<link rel="alternate" hreflang="x-default" href="https://vincplacement.com/ja/" />
```

### 2. Structured Data (JSON-LD)

#### Organization Schema
```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VINC Placement Co., Ltd.",
  "url": "https://vincplacement.com",
  "logo": "https://vincplacement.com/logo.png",
  "description": "Premier Thailand-Japan workforce solutions since 1988",
  "foundingDate": "1988",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "163/1 Nuanchan Road, Nuanchan, Buengkum",
    "addressLocality": "Bangkok",
    "postalCode": "10230",
    "addressCountry": "TH"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+66-2-949-9572",
    "contactType": "customer service",
    "availableLanguage": ["English", "Japanese", "Thai"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/vinc-placement",
    "https://www.facebook.com/vincplacement"
  ]
};
```

#### JobPosting Schema
```typescript
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Factory Worker Position in Japan",
  "description": "Skilled Thai workers needed for manufacturing positions in Japan",
  "datePosted": "2024-01-01",
  "validThrough": "2024-12-31",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Japanese Manufacturing Company"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "JPY",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 200000,
      "maxValue": 300000,
      "unitText": "MONTH"
    }
  }
};
```

### 3. Sitemap Generation

#### Automatic Sitemap
```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vincplacement.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      i18n: {
        defaultLocale: 'ja',
        locales: {
          en: 'en',
          ja: 'ja',
          th: 'th'
        }
      }
    })
  ]
});
```

## 📈 Content SEO Strategy

### 1. Keyword Research

#### Primary Keywords (High Volume)
- "Thai workers Japan" (1,000+ monthly searches)
- "Japan jobs Thailand" (800+ monthly searches)
- "Japanese employers Thai workers" (500+ monthly searches)

#### Long-tail Keywords
- "How to hire Thai workers for Japanese companies"
- "Thai construction workers Japan salary"
- "Japanese manufacturing jobs for Thai workers"
- "Thailand Japan workforce deployment"

### 2. Content Optimization

#### Page Structure
```html
<!-- Proper heading hierarchy -->
<h1>Premier Thailand-Japan Workforce Solutions</h1>
<h2>For Employers: Hire Skilled Thai Workers</h2>
<h3>Construction & Manufacturing Workers</h3>
<h2>For Workers: Find Jobs in Japan</h2>
<h3>Factory & Engineering Positions</h3>
```

#### Content Guidelines
- **Target keyword density**: 1-2% for primary keywords
- **Content length**: 800+ words for main pages
- **Internal linking**: Link to relevant pages and sections
- **External links**: Link to authoritative sources
- **Image alt text**: Descriptive alt text with keywords

### 3. Multilingual SEO

#### Language-Specific Optimization
- **Japanese**: Focus on employer keywords and business benefits
- **English**: Balance between employers and job seekers
- **Thai**: Emphasize job opportunities and career benefits

#### URL Structure
```
https://vincplacement.com/ja/          # Japanese (default)
https://vincplacement.com/en/           # English
https://vincplacement.com/th/           # Thai
https://vincplacement.com/ja/services/ # Japanese services
https://vincplacement.com/en/jobs/     # English job listings
```

## 🏗️ Semantic HTML5 for SEO

### HTML5 Semantic Elements

#### Document Structure
```html
<!doctype html>
<html lang="en">
<head>
  <!-- Meta tags and document head -->
</head>
<body>
  <!-- Skip link for accessibility -->
  <a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
  
  <!-- Site header -->
  <header role="banner">
    <nav aria-label="Main navigation">
      <!-- Navigation content -->
    </nav>
  </header>
  
  <!-- Main content -->
  <main id="main-content" role="main">
    <!-- Page content -->
  </main>
  
  <!-- Site footer -->
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

#### Content Structure
```html
<!-- Hero section -->
<section aria-label="Hero section">
  <h1>Main Page Title</h1>
  <p>Page description</p>
</section>

<!-- About section -->
<section aria-label="About us">
  <header>
    <h2>About VINC Placement</h2>
  </header>
  <article>
    <p>Company information</p>
  </article>
</section>

<!-- Services section -->
<section aria-label="Our services">
  <h2>Services</h2>
  <div class="services-grid">
    <article>
      <header>
        <h3>Workforce Solutions</h3>
      </header>
      <p>Service description</p>
    </article>
  </div>
</section>
```

#### Image Optimization
```html
<!-- Optimized images with semantic structure -->
<figure>
  <img 
    src="hero-image.jpg" 
    alt="Thai workers in Japanese manufacturing facility"
    loading="eager"
    fetchpriority="high"
    width="1200"
    height="800"
  />
  <figcaption>
    Skilled Thai workers contributing to Japanese manufacturing excellence
  </figcaption>
</figure>
```

#### Contact Information
```html
<!-- Semantic contact information -->
<address>
  <h3>Contact Information</h3>
  <p>
    <strong>VINC Placement Co., Ltd.</strong><br>
    163/1 Nuanchan Road, Nuanchan, Buengkum<br>
    Bangkok 10230, Thailand
  </p>
  <p>
    Phone: <a href="tel:+66-2-949-9572">+66-2-949-9572</a><br>
    Email: <a href="mailto:info@vincplacement.com">info@vincplacement.com</a>
  </p>
</address>
```

### Accessibility for SEO

#### ARIA Labels and Roles
```html
<!-- Navigation with proper ARIA -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/about" role="menuitem" aria-current="page">About</a>
    </li>
  </ul>
</nav>

<!-- Interactive elements -->
<button 
  aria-expanded="false" 
  aria-controls="mobile-menu" 
  aria-label="Toggle mobile menu"
>
  Menu
</button>

<!-- Form accessibility -->
<label for="email">Email Address</label>
<input 
  type="email" 
  id="email" 
  aria-describedby="email-help" 
  aria-required="true"
>
<div id="email-help">We'll never share your email</div>
```

#### Heading Hierarchy
```html
<!-- Proper heading structure -->
<h1>VINC Placement - Thailand-Japan Workforce Solutions</h1>
  <h2>For Employers</h2>
    <h3>Construction Workers</h3>
    <h3>Manufacturing Workers</h3>
  <h2>For Workers</h2>
    <h3>Job Opportunities</h3>
    <h3>Application Process</h3>
```

## 🚀 Performance SEO

### 1. Core Web Vitals Optimization

#### Largest Contentful Paint (LCP)
```typescript
// Image optimization
<img 
  src="hero-image.jpg" 
  alt="Thai workers in Japanese factory"
  loading="eager"
  fetchpriority="high"
  width="1200"
  height="800"
/>
```

#### First Input Delay (FID)
```typescript
// Minimize JavaScript
// Use Astro's static generation
// Defer non-critical scripts
```

#### Cumulative Layout Shift (CLS)
```css
/* Reserve space for images */
img {
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

/* Reserve space for fonts */
.font-heading {
  font-display: swap;
}
```

### 2. Image Optimization

#### Responsive Images
```html
<picture>
  <source media="(min-width: 768px)" srcset="hero-desktop.jpg">
  <source media="(min-width: 480px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Thai workers in Japan" loading="lazy">
</picture>
```

#### WebP Format
```typescript
// Use WebP for better compression
const optimizedImage = {
  src: 'image.webp',
  fallback: 'image.jpg',
  alt: 'Descriptive alt text with keywords'
};
```

### 3. Caching Strategy

#### Static Assets
```typescript
// astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
});
```

## 📊 SEO Monitoring & Analytics

### 1. Google Search Console Setup

#### Verification
```html
<!-- Add to <head> -->
<meta name="google-site-verification" content="your-verification-code" />
```

#### Sitemap Submission
- Submit sitemap: `https://vincplacement.com/sitemap-index.xml`
- Monitor indexing status
- Track search performance

### 2. Analytics Implementation

#### Google Analytics 4
```typescript
// Track key events
gtag('event', 'job_search', {
  'search_term': 'factory worker Japan',
  'language': 'en'
});

gtag('event', 'employer_inquiry', {
  'company_type': 'manufacturing',
  'worker_count': '10-50'
});
```

### 3. SEO Metrics to Track

#### Technical Metrics
- Page load speed (target: <3 seconds)
- Mobile usability score
- Core Web Vitals scores
- Crawl error rate

#### Content Metrics
- Keyword rankings
- Organic traffic growth
- Click-through rates
- Bounce rate by page

## 🔧 SEO Tools & Resources

### Recommended Tools
- **Google Search Console** - Free SEO monitoring
- **Google Analytics** - Traffic analysis
- **Google PageSpeed Insights** - Performance testing
- **Screaming Frog** - Technical SEO audit
- **Ahrefs/SEMrush** - Keyword research and competitor analysis

### Monthly SEO Tasks
1. Review Search Console reports
2. Update meta descriptions based on performance
3. Add new content targeting long-tail keywords
4. Monitor competitor rankings
5. Optimize underperforming pages

## 📝 Content Calendar

### Weekly Content
- Job posting updates
- Industry news and insights
- Success stories and testimonials

### Monthly Content
- Industry reports
- Salary guides
- Cultural integration tips

### Quarterly Content
- Comprehensive industry analysis
- Market trend reports
- Company milestone updates

---

For technical implementation details, refer to the [Development Guide](./DEVELOPMENT_GUIDE.md) and [Astro SEO Documentation](https://docs.astro.build/en/guides/integrations-guide/sitemap/).
