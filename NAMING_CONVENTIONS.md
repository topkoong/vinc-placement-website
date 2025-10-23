# 🏗️ Production-Grade Naming Conventions

This document outlines the production-grade naming conventions used in the VINC Placement website project.

## 📋 Overview

All files, components, and directories follow consistent naming patterns that improve:
- **Code readability** and maintainability
- **Team collaboration** and onboarding
- **IDE support** and autocomplete
- **Build tool compatibility**
- **Professional standards**

## 📁 Directory Structure

### Root Directories
```
src/
├── components/     # All reusable UI components
├── layouts/        # Page layout templates
├── pages/          # Route pages (Astro file-based routing)
├── styles/         # Global styles and CSS
├── types/          # TypeScript type definitions
├── utils/          # Utility functions and helpers
└── i18n/           # Internationalization files
```

### Component Subdirectories
```
src/components/
├── common/         # Shared UI components
├── layout/         # Layout-specific components
└── sections/       # Page section components
```

## 🎯 File Naming Conventions

### Pages (PascalCase)
- **Pattern**: `PageName.astro`
- **Examples**: 
  - `Index.astro` (homepage)
  - `About.astro` (about page)
  - `Contact.astro` (contact page)
  - `Services.astro` (services page)
  - `Projects.astro` (projects page)

### Components

#### Common Components (PascalCase)
- **Pattern**: `ComponentName.astro`
- **Examples**:
  - `Logo.astro`
  - `ThemeToggle.astro`
  - `Button.astro`
  - `Card.astro`

#### Layout Components (Site Prefix)
- **Pattern**: `SiteComponentName.astro`
- **Examples**:
  - `SiteHeader.astro`
  - `SiteFooter.astro`
  - `SiteNavigation.astro`

#### Section Components (Section Suffix)
- **Pattern**: `SectionNameSection.astro`
- **Examples**:
  - `HeroSection.astro`
  - `AboutSection.astro`
  - `ServicesSection.astro`
  - `ProjectsSection.astro`
  - `ContactSection.astro`

### Layouts (PascalCase)
- **Pattern**: `LayoutName.astro`
- **Examples**:
  - `BaseLayout.astro`
  - `PageLayout.astro`
  - `AdminLayout.astro`

### Utilities (camelCase)
- **Pattern**: `utilityName.ts`
- **Examples**:
  - `constants.ts`
  - `seo.ts`
  - `helpers.ts`
  - `validation.ts`

### Types (camelCase)
- **Pattern**: `typeName.ts`
- **Examples**:
  - `index.ts` (main types file)
  - `api.ts`
  - `components.ts`

### Styles (kebab-case)
- **Pattern**: `style-name.css`
- **Examples**:
  - `global.css`
  - `components.css`
  - `utilities.css`

### Translation Files (lowercase)
- **Pattern**: `languageCode.json`
- **Examples**:
  - `en.json` (English)
  - `ja.json` (Japanese)
  - `th.json` (Thai)

## 🔧 Import/Export Conventions

### Component Imports
```typescript
// ✅ Correct - Descriptive component names
import SiteHeader from '@/components/layout/SiteHeader.astro';
import HeroSection from '@/components/sections/HeroSection.astro';
import Logo from '@/components/common/Logo.astro';

// ❌ Incorrect - Generic names
import Header from '@/components/layout/Header.astro';
import Hero from '@/components/sections/Hero.astro';
```

### Utility Imports
```typescript
// ✅ Correct - Clear utility names
import { generateSEOMeta } from '@/utils/seo';
import { CONTACT_INFO } from '@/utils/constants';
import { t } from '@/i18n/utils';

// ❌ Incorrect - Unclear names
import { seo } from '@/utils/seo';
import { info } from '@/utils/constants';
```

## 📝 Variable Naming

### Component Props (PascalCase)
```typescript
interface Props {
  title: string;
  description: string;
  isVisible: boolean;
  className?: string;
}
```

### Local Variables (camelCase)
```typescript
const currentLanguage = 'en';
const isDarkMode = true;
const pageTitle = 'About Us';
```

### Constants (SCREAMING_SNAKE_CASE)
```typescript
const CONTACT_INFO = {
  phone: '+66-2-949-9572',
  email: 'info@vincplacement.com'
};

const SUPPORTED_LANGUAGES = ['en', 'ja', 'th'];
```

## 🎨 CSS Class Naming

### Tailwind Classes (kebab-case)
```html
<!-- ✅ Correct -->
<div class="bg-blue-600 text-white rounded-lg">
<div class="hover:bg-blue-700 transition-colors">

<!-- ❌ Incorrect -->
<div class="bgBlue600 textWhite roundedLg">
```

### Custom CSS Classes (kebab-case)
```css
/* ✅ Correct */
.font-heading { }
.bg-gradient-primary { }
.text-gradient { }

/* ❌ Incorrect */
.fontHeading { }
.bgGradientPrimary { }
.textGradient { }
```

## 🌐 Internationalization

### Translation Keys (dot notation)
```json
{
  "meta": {
    "title": "VINC Placement",
    "description": "Professional job placement services"
  },
  "hero": {
    "title": "Welcome to VINC Placement",
    "subtitle": "Connecting talent with opportunity"
  }
}
```

### Usage in Components
```typescript
// ✅ Correct - Clear key structure
const title = t(lang, 'hero.title');
const description = t(lang, 'meta.description');

// ❌ Incorrect - Unclear keys
const title = t(lang, 'title');
const description = t(lang, 'desc');
```

## 📊 File Organization Rules

### 1. One Component Per File
- Each `.astro` file should contain only one component
- Component name should match file name

### 2. Logical Grouping
- Group related components in appropriate subdirectories
- Keep common components separate from page-specific ones

### 3. Consistent Imports
- Use absolute imports with `@/` prefix
- Group imports by type (components, utilities, types)

### 4. Clear Dependencies
- Import only what you need
- Use descriptive import names

## ✅ Checklist for New Files

When creating new files, ensure:

- [ ] File name follows appropriate convention
- [ ] Component name matches file name
- [ ] Imports use absolute paths with `@/`
- [ ] TypeScript interfaces are properly defined
- [ ] Component is placed in correct directory
- [ ] Translation keys follow dot notation
- [ ] CSS classes use kebab-case
- [ ] Constants use SCREAMING_SNAKE_CASE

## 🚀 Benefits

Following these conventions provides:

1. **Consistency** across the entire codebase
2. **Predictability** for new team members
3. **Maintainability** for long-term projects
4. **Scalability** as the project grows
5. **Professional standards** for production code

---

*This document should be updated as the project evolves and new patterns emerge.*
