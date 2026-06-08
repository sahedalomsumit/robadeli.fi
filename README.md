# Roba Deli – robadeli.fi

A modern, bilingual (Finnish/English) website for **Roba Deli**, a fresh sandwich shop in Helsinki specializing in handcrafted subs, salads, and smoothies.

## 🥖 About Roba Deli

**Store:** Roba Deli  
**Tagline:** Fresh Subs, Salads, and Smoothies  
**Address:** Iso Robertinkatu 1, 00120 Helsinki  
**Phone:** +358 50 379 7490  
**Email:** info@robadeli.fi  
**Google Maps:** [View on Maps](https://maps.app.goo.gl/RUCXA96bhSmibGVN9)

## 🌐 Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router DOM v7
- **Styling:** Vanilla CSS
- **Languages:** Finnish (primary) + English
- **Image Optimization:** `vite-plugin-image-optimizer` & `vite-plugin-webp-and-path` for automatic WebP conversion.
- **SEO:** Structured data (Schema.org LocalBusiness), Open Graph, Twitter Card, sitemap.xml
- **CI/CD:** GitHub Actions for automated deployment to GitHub Pages.

## 📁 Project Structure

```
robadeli.fi/
├── public/
│   ├── images/          # All media assets (logo, food photos, menu scans)
│   ├── sitemap.xml      # XML sitemap for SEO
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx   # Sticky navbar with language switcher & mobile menu
│   │   ├── Navbar.css
│   │   ├── Footer.jsx   # Footer with links, hours, contact, & credits
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx     # Home page: hero, features, gallery, reviews, map, CTA
│   │   ├── Home.css
│   │   ├── Menu.jsx     # Menu page: category filter, item cards, physical menu
│   │   └── Menu.css
│   ├── App.jsx          # App root with routing & language state
│   ├── App.css
│   ├── index.css        # Global design system
│   └── main.jsx
├── .github/
│   └── workflows/       # GitHub Actions workflows (e.g. deploy.yml)
├── index.html           # SEO-optimized HTML entry point
├── package.json
├── vite.config.js       # Vite config including image optimization plugins
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (automatically optimizes images to WebP)
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

Follows `MASTER.md` guidelines:

- **Colors:** Warm gold (`#B8993A`) + dark accent (`#8A6F22`) on cream (`#F5EDD6`)
- **Heading Font:** Playfair Display SC
- **Body Font:** Karla
- **Style:** Vibrant & Block-based, restaurant aesthetic
- **Responsive:** 375px, 768px, 1024px, 1440px breakpoints

## 🌍 Bilingual Support

The site supports Finnish (default) and English. Language switching is done via the navbar buttons (FI / EN) and state is managed at the App level.

## 🚀 Deployment

The project is configured for automated deployment to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Any push to the `main` branch will trigger a production build and deploy to `robadeli.fi`.

## 📋 Pages

| Page | Path    | Description                                                       |
| ---- | ------- | ----------------------------------------------------------------- |
| Home | `/`     | Hero, features, gallery, featured items, Google reviews, map, CTA |
| Menu | `/menu` | Filterable menu with category tabs and physical menu images       |

## 🔍 SEO Features

- Semantic HTML5 structure
- Single `<h1>` per page
- Meta description & keywords
- Open Graph & Twitter Card tags
- Schema.org `LocalBusiness` + `Restaurant` structured data
- `sitemap.xml` with hreflang alternates
- `robots` meta tag
- Canonical URL
- All images have `alt` attributes
- Focus states visible for keyboard navigation
- `prefers-reduced-motion` respected

---

Built with ❤️ by [Sahed](https://sahedalomsumit.com)
