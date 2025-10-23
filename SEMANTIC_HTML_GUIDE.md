# 🏗️ Semantic HTML5 Guide

This guide provides comprehensive guidelines for implementing proper HTML5 semantic elements throughout the VINC Placement website to ensure accessibility, SEO optimization, and maintainable code.

## 📋 Overview

Semantic HTML5 elements provide meaning to web content, making it more accessible to users with disabilities, search engines, and assistive technologies. This guide covers the implementation of semantic elements, ARIA attributes, and accessibility best practices.

## 🎯 Benefits of Semantic HTML

### For Users
- **Better Accessibility**: Screen readers can navigate content more effectively
- **Improved UX**: Clear content structure and navigation
- **Keyboard Navigation**: Proper focus management and keyboard support

### For SEO
- **Search Engine Understanding**: Better content categorization and indexing
- **Rich Snippets**: Enhanced search result appearance
- **Content Hierarchy**: Clear page structure for search engines

### For Developers
- **Maintainable Code**: Self-documenting HTML structure
- **Consistent Patterns**: Standardized semantic approach
- **Future-Proof**: Built on web standards

## 🏗️ Core Semantic Elements

### Document Structure Elements

#### `<header>`
Used for introductory content or navigational aids.

```html
<!-- Site header -->
<header role="banner">
  <nav aria-label="Main navigation">
    <!-- Navigation content -->
  </nav>
</header>

<!-- Section header -->
<section>
  <header>
    <h2>Section Title</h2>
    <p>Section description</p>
  </header>
  <!-- Section content -->
</section>
```

#### `<nav>`
Represents a section of a page that links to other pages or parts within the page.

```html
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/about" role="menuitem" aria-current="page">About</a>
    </li>
    <li role="none">
      <a href="/services" role="menuitem">Services</a>
    </li>
  </ul>
</nav>

<!-- Breadcrumb navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li aria-current="page">Workforce Solutions</li>
  </ol>
</nav>
```

#### `<main>`
Represents the dominant content of the document.

```html
<main id="main-content" role="main">
  <!-- Primary page content -->
  <h1>Page Title</h1>
  <section aria-label="Hero section">
    <!-- Hero content -->
  </section>
</main>
```

#### `<section>`
Represents a standalone section of a document.

```html
<section aria-label="About our company">
  <header>
    <h2>About VINC Placement</h2>
  </header>
  <p>Company information and history</p>
</section>

<section aria-label="Our services">
  <h2>Services</h2>
  <div class="services-grid">
    <!-- Service items -->
  </div>
</section>
```

#### `<article>`
Represents a self-contained composition in a document.

```html
<article>
  <header>
    <h2>Workforce Solutions</h2>
    <time datetime="2024-01-15">January 15, 2024</time>
  </header>
  <p>Detailed service description</p>
  <footer>
    <p>Contact us for more information</p>
  </footer>
</article>
```

#### `<aside>`
Represents a section of a page that consists of content that is tangentially related to the content around it.

```html
<aside aria-label="Related information">
  <h3>Quick Facts</h3>
  <ul>
    <li>35+ years experience</li>
    <li>10,000+ workers placed</li>
  </ul>
</aside>
```

#### `<footer>`
Represents a footer for its nearest sectioning content or sectioning root element.

```html
<footer role="contentinfo">
  <div class="footer-content">
    <section aria-label="Company information">
      <h3>VINC Placement</h3>
      <address>
        <p>163/1 Nuanchan Road<br>
        Bangkok 10230, Thailand</p>
        <p>Phone: <a href="tel:+66-2-949-9572">+66-2-949-9572</a></p>
      </address>
    </section>
  </div>
</footer>
```

### Content Elements

#### `<figure>` and `<figcaption>`
Represents self-contained content with optional caption.

```html
<figure>
  <img 
    src="workers-factory.jpg" 
    alt="Thai workers in Japanese manufacturing facility"
    loading="lazy"
    width="800"
    height="600"
  />
  <figcaption>
    Skilled Thai workers contributing to Japanese manufacturing excellence
  </figcaption>
</figure>
```

#### `<address>`
Represents contact information for the nearest article or body element.

```html
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

## ♿ Accessibility Implementation

### ARIA Labels and Roles

#### Navigation Accessibility
```html
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a 
        href="/about" 
        role="menuitem" 
        aria-current="page"
        aria-describedby="about-desc"
      >
        About Us
      </a>
    </li>
  </ul>
</nav>
```

#### Interactive Elements
```html
<!-- Button with proper ARIA -->
<button 
  aria-expanded="false" 
  aria-controls="mobile-menu" 
  aria-label="Toggle mobile navigation menu"
  type="button"
>
  <span aria-hidden="true">☰</span>
  <span class="sr-only">Menu</span>
</button>

<!-- Form with accessibility -->
<form aria-label="Contact form">
  <fieldset>
    <legend>Contact Information</legend>
    <div>
      <label for="name">Full Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        aria-required="true"
        aria-describedby="name-help"
      >
      <div id="name-help">Enter your full name</div>
    </div>
  </fieldset>
</form>
```

#### Skip Links
```html
<!-- Skip to main content -->
<a 
  href="#main-content" 
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded"
>
  Skip to main content
</a>
```

### Heading Hierarchy

#### Proper Heading Structure
```html
<h1>VINC Placement - Thailand-Japan Workforce Solutions</h1>
  <h2>For Employers</h2>
    <h3>Construction Workers</h3>
      <h4>Requirements</h4>
      <h4>Benefits</h4>
    <h3>Manufacturing Workers</h3>
      <h4>Requirements</h4>
      <h4>Benefits</h4>
  <h2>For Workers</h2>
    <h3>Job Opportunities</h3>
    <h3>Application Process</h3>
```

## 🎨 Component Implementation

### Hero Section
```html
<section aria-label="Hero section" id="hero">
  <div class="hero-content">
    <header>
      <div class="badge" aria-label="Trust indicator">
        <span aria-hidden="true">⚡</span>
        Trusted Since 1988
      </div>
      <h1>Premier Thailand-Japan Workforce Solutions</h1>
    </header>
    
    <p class="hero-description">
      Connecting skilled Thai workers with Japanese employers for over 35 years
    </p>
    
    <nav aria-label="Main actions">
      <a href="/contact" class="btn-primary" aria-label="Contact VINC Placement">
        Get Started
        <span aria-hidden="true">→</span>
      </a>
      <a href="/services" class="btn-secondary" aria-label="Learn more about our services">
        Learn More
        <span aria-hidden="true">→</span>
      </a>
    </nav>
    
    <section aria-label="Company statistics">
      <div class="stats-grid">
        <figure>
          <div class="stat-value">10,000+</div>
          <figcaption>Workers Placed</figcaption>
        </figure>
        <figure>
          <div class="stat-value">500+</div>
          <figcaption>Companies Served</figcaption>
        </figure>
      </div>
    </section>
  </div>
  
  <aside class="hero-visual">
    <figure>
      <img 
        src="hero-image.jpg" 
        alt="Thai workers in Japanese manufacturing facility"
        loading="eager"
        fetchpriority="high"
      />
      <figcaption>
        Skilled Thai workers contributing to Japanese manufacturing excellence
      </figcaption>
    </figure>
  </aside>
</section>
```

### Service Cards
```html
<section aria-label="Our services">
  <header>
    <h2>Comprehensive Workforce Solutions</h2>
    <p>Tailored services for both employers and workers</p>
  </header>
  
  <div class="services-grid">
    <article class="service-card">
      <header>
        <div class="service-icon" aria-hidden="true">
          <svg><!-- Icon content --></svg>
        </div>
        <h3>Workforce Deployment</h3>
      </header>
      <p>Complete workforce solutions for Japanese companies</p>
      <footer>
        <a href="/services/workforce" aria-label="Learn more about workforce deployment">
          Learn More
          <span aria-hidden="true">→</span>
        </a>
      </footer>
    </article>
  </div>
</section>
```

### Contact Form
```html
<section aria-label="Contact us">
  <header>
    <h2>Get In Touch</h2>
    <p>Ready to start your workforce solution journey?</p>
  </header>
  
  <form aria-label="Contact form" novalidate>
    <fieldset>
      <legend>Contact Information</legend>
      
      <div class="form-group">
        <label for="name">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          aria-required="true"
          aria-describedby="name-error"
        >
        <div id="name-error" class="error-message" aria-live="polite"></div>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          aria-required="true"
          aria-describedby="email-error"
        >
        <div id="email-error" class="error-message" aria-live="polite"></div>
      </div>
      
      <div class="form-group">
        <label for="company">Company Name</label>
        <input 
          type="text" 
          id="company" 
          name="company"
          aria-describedby="company-help"
        >
        <div id="company-help">Optional - helps us provide better service</div>
      </div>
      
      <div class="form-group">
        <label for="message">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5"
          required
          aria-required="true"
          aria-describedby="message-error"
        ></textarea>
        <div id="message-error" class="error-message" aria-live="polite"></div>
      </div>
    </fieldset>
    
    <button type="submit" class="btn-primary">
      Send Message
      <span aria-hidden="true">→</span>
    </button>
  </form>
</section>
```

## 🔍 SEO Optimization

### Structured Data Integration
```html
<!-- Organization schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VINC Placement Co., Ltd.",
  "url": "https://vincplacement.com",
  "logo": "https://vincplacement.com/logo.png",
  "description": "Premier Thailand-Japan workforce solutions since 1988",
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
  }
}
</script>
```

### Meta Tags and Document Head
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- Primary SEO -->
  <title>VINC Placement - Thailand-Japan Workforce Solutions</title>
  <meta name="description" content="Premier workforce solutions connecting Thai workers with Japanese employers since 1988. Over 10,000 successful placements.">
  <meta name="keywords" content="Thai workers Japan, Japanese employers, workforce solutions, Thailand Japan">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="VINC Placement - Thailand-Japan Workforce Solutions">
  <meta property="og:description" content="Premier workforce solutions connecting Thai workers with Japanese employers since 1988.">
  <meta property="og:url" content="https://vincplacement.com">
  <meta property="og:image" content="https://vincplacement.com/og-image.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="VINC Placement - Thailand-Japan Workforce Solutions">
  <meta name="twitter:description" content="Premier workforce solutions connecting Thai workers with Japanese employers since 1988.">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://vincplacement.com/">
  
  <!-- Language alternatives -->
  <link rel="alternate" hreflang="en" href="https://vincplacement.com/en/">
  <link rel="alternate" hreflang="ja" href="https://vincplacement.com/ja/">
  <link rel="alternate" hreflang="th" href="https://vincplacement.com/th/">
  <link rel="alternate" hreflang="x-default" href="https://vincplacement.com/en/">
</head>
```

## ✅ Validation and Testing

### HTML Validation
- Use W3C Markup Validator
- Check for semantic element usage
- Validate ARIA attributes
- Ensure proper heading hierarchy

### Accessibility Testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Keyboard navigation testing
- Color contrast validation
- Focus management verification

### SEO Testing
- Google Search Console validation
- Structured data testing
- Mobile-friendly test
- Page speed insights

## 📚 Resources

### Documentation
- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Accessibility Guidelines](https://webaim.org/)

### Tools
- [W3C Markup Validator](https://validator.w3.org/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

*This guide should be updated as web standards evolve and new semantic elements are introduced.*
