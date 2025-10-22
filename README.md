# VINC Placement Co., Ltd. - Multilingual Website

A modern, responsive website for VINC Placement Co., Ltd., specializing in placing Thai workers in Japanese companies across all job categories. Built with Astro, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multilingual Support**: English, Japanese, and Thai
- **Modern Design**: Clean, professional UI with glass-morphism effects
- **Responsive Layout**: Optimized for all device sizes
- **Dark/Light Mode**: Automatic theme switching
- **SEO Optimized**: Meta tags, structured data, and sitemap generation
- **Performance**: Static site generation with Astro
- **Interactive Elements**: Image carousel, animations, and smooth transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vinc-placement-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to see the website.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (Logo, ThemeToggle)
│   ├── layout/          # Layout components (Header, Footer)
│   └── sections/        # Page sections (Hero, About, Services, etc.)
├── i18n/                # Internationalization
│   ├── locales/         # Translation files (en.json, ja.json, th.json)
│   └── utils.ts         # Translation utilities
├── layouts/             # Page layouts
│   └── BaseLayout.astro # Base layout template
├── pages/               # Route pages
│   ├── en/              # English pages
│   ├── ja/              # Japanese pages
│   └── th/              # Thai pages
├── styles/              # Global styles
│   └── global.css       # Global CSS and Tailwind imports
├── types/               # TypeScript type definitions
│   └── index.ts         # Global types
└── utils/               # Utility functions
    ├── constants.ts     # App constants
    └── seo.ts           # SEO utilities
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm astro check
```

### Adding New Pages

1. Create a new `.astro` file in the appropriate language folder (`src/pages/en/`, `src/pages/ja/`, `src/pages/th/`)
2. Import and use `BaseLayout` with proper SEO metadata
3. Add translations to locale files
4. Update navigation in `Header.astro`

### Adding New Components

1. Create component file in appropriate `src/components/` subfolder
2. Export component with proper TypeScript interfaces
3. Import and use in pages or other components

## 🌐 Internationalization

The website supports three languages:

- **English** (`en`) - Default language
- **Japanese** (`ja`) - Japanese language
- **Thai** (`th`) - Thai language

### Translation Files

Translation keys are stored in JSON files:

- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/ja.json` - Japanese translations
- `src/i18n/locales/th.json` - Thai translations

### Using Translations

```typescript
import { t } from '@/i18n/utils';

// In component
const title = t(lang, 'page.title');
```

## 🎨 Styling

The project uses Tailwind CSS v3 for styling with:

- Custom color palette
- Responsive design utilities
- Dark mode support
- Glass-morphism effects
- Smooth animations

### Custom Classes

- `.font-heading` - Custom heading font
- `.bg-gradient-primary` - Primary gradient background
- `.text-gradient` - Gradient text effect

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔍 SEO Features

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Canonical URLs
- Hreflang tags for multilingual support
- Optimized images and performance

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload `dist/` contents to web server

## 📊 Performance

The website is optimized for performance with:

- Static site generation
- Optimized images
- Minimal JavaScript
- CSS purging
- Lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software owned by VINC Placement Co., Ltd.

## 📞 Support

For technical support or questions, contact the development team.

---

Built with ❤️ using Astro, TypeScript, and Tailwind CSS
