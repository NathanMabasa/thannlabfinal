# Thannlab — Digital Agency Website

Premium, Awwwards-calibre digital agency website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3 + CSS Variables
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (Display) + Inter (Body) via next/font/google

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design System

### Colors
- **Black**: #080808 (primary background)
- **White**: #F5F5F0 (primary text)
- **Accent**: #C8FF00 (electric lime — brand signature)
- **Mid**: #1A1A1A (card/section backgrounds)
- **Muted**: #666666 (secondary text)

### Typography
- **Display**: Syne (700, 800) — editorial authority
- **Body**: Inter (400, 500) — surgical precision

### Motion
- Entry animations use `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger delay: 0.08s between children
- Hover: `scale(1.02)`, 0.2s transition
- Respects `prefers-reduced-motion`

## Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Project Structure

```
app/                      → Next.js app directory
├── page.tsx              → Homepage
├── about/page.tsx        → About page
├── services/
│   ├── page.tsx          → Services hub
│   ├── web-design/
│   ├── web-development/
│   └── ai-solutions/
├── work/
│   ├── page.tsx          → Portfolio
│   └── [slug]/page.tsx   → Case studies
├── contact/page.tsx      → Contact page
├── blog/page.tsx         → Blog (future)
├── layout.tsx            → Root layout
├── globals.css           → Global styles + CSS variables
└── sitemap.ts            → Dynamic sitemap

components/
├── layout/               → Navbar, Footer
├── sections/             → Homepage sections
├── ui/                   → shadcn/ui components
└── common/               → Reusable utilities (MarqueeTicker, AnimatedSection)

public/                   → Static assets
```

## Development Notes

### Quality Gates
- ✓ Zero layout shift (CLS = 0)
- ✓ All images optimized with `next/image`
- ✓ Touch targets: minimum 44px
- ✓ Color contrast: 4.5:1 minimum
- ✓ One H1 per page, proper heading hierarchy
- ✓ All CTAs use `<button>` or `<Link>`
- ✓ `useReducedMotion()` for animations
- ✓ Mobile-first: test at 375px, 768px, 1280px, 1920px
- ✓ TypeScript strict mode

### Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## License

© 2025 Thannlab. All rights reserved.
