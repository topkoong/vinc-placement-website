# Development Guide

This guide covers development workflow, best practices, and technical details for the VINC Placement website.

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: Astro (Static Site Generator)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Package Manager**: pnpm
- **Build Tool**: Vite (via Astro)

### Key Features
- Static site generation for optimal performance
- Component-based architecture
- Type-safe development with TypeScript
- Utility-first CSS with Tailwind
- Multilingual support with i18next

## 🚀 Development Workflow

### 1. Environment Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type checking
pnpm astro check
```

### 2. File Structure Conventions

```
src/
├── components/
│   ├── common/              # Shared components (Logo, ThemeToggle)
│   ├── layout/              # Layout components (SiteHeader, SiteFooter)
│   └── sections/            # Page sections (HeroSection, AboutSection, etc.)
├── pages/                   # Route pages (PascalCase)
│   ├── en/                  # English pages
│   │   ├── Index.astro      # Homepage
│   │   ├── About.astro      # About page
│   │   ├── Services.astro   # Services page
│   │   ├── Projects.astro   # Projects page
│   │   └── Contact.astro    # Contact page
│   ├── ja/                  # Japanese pages
│   └── th/                  # Thai pages
├── i18n/
│   ├── locales/             # Translation files
│   └── utils.ts             # Translation utilities
└── utils/
    ├── constants.ts          # App constants
    └── seo.ts               # SEO utilities
```

**Naming Conventions:**
- **Pages**: PascalCase (e.g., `About.astro`, `Contact.astro`)
- **Components**: 
  - Common: PascalCase (e.g., `Logo.astro`)
  - Layout: Site prefix (e.g., `SiteHeader.astro`)
  - Sections: Section suffix (e.g., `HeroSection.astro`)
- **Utilities**: camelCase (e.g., `constants.ts`)
- **Styles**: kebab-case (e.g., `global.css`)

### 3. Component Development

#### Creating New Components

```typescript
// src/components/sections/NewSectionSection.astro
---
import { t } from '@/i18n/utils';
import type { Language } from '@/types';

interface Props {
  lang: Language;
}

const { lang } = Astro.props;
---

<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      {t(lang, 'section.title')}
    </h2>
    <!-- Component content -->
  </div>
</section>
```

#### Component Best Practices

1. **Use TypeScript interfaces** for props
2. **Import translation function** for multilingual support
3. **Follow production-grade naming conventions**:
   - Common components: `ComponentName.astro`
   - Layout components: `SiteComponentName.astro`
   - Section components: `SectionNameSection.astro`
4. **Use semantic HTML** elements
5. **Include dark mode support** with `dark:` classes
6. **Import with descriptive names**:
   ```typescript
   import SiteHeader from '@/components/layout/SiteHeader.astro';
   import HeroSection from '@/components/sections/HeroSection.astro';
   ```

### 4. Styling Guidelines

#### Tailwind CSS Usage

```html
<!-- Responsive design -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Dark mode support -->
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">

<!-- Hover effects -->
<button class="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
```

#### Custom CSS Classes

```css
/* src/styles/global.css */
.font-heading {
  font-family: 'Inter', system-ui, sans-serif;
}

.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 5. Internationalization

#### Adding New Translations

1. **Add keys to locale files**:

```json
// src/i18n/locales/en.json
{
  "new_section": {
    "title": "New Section Title",
    "description": "Section description"
  }
}
```

2. **Use in components**:

```typescript
const title = t(lang, 'new_section.title');
const description = t(lang, 'new_section.description');
```

#### Translation Best Practices

- Use descriptive key names
- Group related keys under objects
- Keep translations consistent across languages
- Test all three languages during development

### 6. SEO Implementation

#### Meta Tags

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
    'og:url': url
  };
}
```

#### Structured Data

```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VINC Placement Co., Ltd.",
  "url": "https://vincplacement.com",
  "logo": "https://vincplacement.com/logo.png"
};
```

## 🔧 Build Process

### Development Build

```bash
pnpm dev
```

- Hot module replacement
- TypeScript checking
- Tailwind CSS compilation
- Asset optimization

### Production Build

```bash
pnpm build
```

- Static site generation
- Asset optimization
- CSS purging
- Image optimization
- Sitemap generation

### Build Output

```
dist/
├── _astro/              # Optimized assets
├── en/                  # English pages
├── ja/                  # Japanese pages
├── th/                  # Thai pages
├── sitemap-0.xml        # Generated sitemap
└── index.html           # Root redirect
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Responsive design works on all devices
- [ ] Dark/light mode toggle functions
- [ ] All translations display correctly
- [ ] Navigation works properly
- [ ] Forms submit successfully
- [ ] Images load and display properly
- [ ] SEO meta tags are present

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] Run `pnpm build` successfully
- [ ] Test production build with `pnpm preview`
- [ ] Verify all pages work correctly
- [ ] Check SEO meta tags
- [ ] Validate HTML markup
- [ ] Test performance with Lighthouse

### Deployment Options

#### Vercel (Recommended)

1. Connect GitHub repository
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Deploy automatically on push

#### Netlify

1. Connect repository or drag `dist/` folder
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Configure redirects for SPA routing

#### Traditional Hosting

1. Build project: `pnpm build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing
4. Set up SSL certificate

## 🐛 Debugging

### Common Issues

#### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### TypeScript Errors

```bash
# Check types
pnpm astro check
```

#### Styling Issues

- Check Tailwind CSS classes
- Verify dark mode classes
- Inspect responsive breakpoints

### Performance Optimization

#### Image Optimization

```html
<!-- Use optimized images -->
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>
```

#### CSS Optimization

- Use Tailwind's purge feature
- Minimize custom CSS
- Optimize font loading

## 📝 Code Standards

### TypeScript

- Use strict type checking
- Define interfaces for all props
- Avoid `any` type when possible
- Use proper imports/exports

### HTML

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure accessibility compliance
- Validate markup

### CSS

- Use Tailwind utility classes
- Follow mobile-first approach
- Include dark mode variants
- Optimize for performance

## 🔄 Maintenance

### Regular Updates

- Update dependencies monthly
- Review and update translations
- Monitor performance metrics
- Check for security vulnerabilities

### Content Updates

- Update company information
- Add new projects to portfolio
- Refresh testimonials
- Update contact information

---

For more specific technical questions, refer to the [Astro Documentation](https://docs.astro.build/) or [Tailwind CSS Documentation](https://tailwindcss.com/docs).
