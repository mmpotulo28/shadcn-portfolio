# Development Guide

## Manelisi Mpotulo Portfolio

**Version:** 1.0
**Last Updated:** November 10, 2025

---

## 🚀 Quick Start

### Prerequisites

-   Node.js 18.x or higher
-   npm, yarn, pnpm, or bun
-   Git
-   Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/mmpotulo28/shadcn-portfolio.git
cd shadcn-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
shadcn-portfolio/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and theme
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── favicon.ico              # Favicon
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   │
│   ├── sections/                # Page sections (to be created)
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   │
│   ├── layout/                  # Layout components (to be created)
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   │
│   └── common/                  # Reusable components (to be created)
│       ├── section-header.tsx
│       ├── project-card.tsx
│       └── skill-badge.tsx
│
├── lib/                         # Utility functions
│   └── utils.ts                 # cn() helper and utilities
│
├── hooks/                       # Custom React hooks
│   └── use-mobile.ts            # Mobile detection hook
│
├── public/                      # Static assets
│   ├── images/                  # Images (to be created)
│   ├── icons/                   # Icons (to be created)
│   └── cv/                      # CV/Resume PDF (to be created)
│
├── docs/                        # Documentation
│   ├── PRD.md                   # Product Requirements
│   ├── DESIGN.md                # Design System
│   └── DEVELOPMENT.md           # This file
│
├── types/                       # TypeScript types (to be created)
│   └── index.ts                 # Type definitions
│
├── data/                        # Static data (to be created)
│   ├── projects.ts              # Project data
│   ├── experience.ts            # Work experience
│   └── skills.ts                # Technical skills
│
├── components.json              # shadcn/ui config
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.ts               # Next.js config
├── tailwind.config.ts           # Tailwind config (v4 uses CSS)
└── README.md                    # Project README
```

---

## 🛠️ Development Workflow

### 1. **Feature Development**

**Create a New Component:**

```bash
# Create component file
touch components/sections/hero.tsx

# If it needs a UI component from shadcn
npx shadcn@latest add button
```

**Component Template:**

```tsx
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold">Hero Section</h1>
			</div>
		</section>
	);
}
```

### 2. **Adding shadcn/ui Components**

```bash
# Add a single component
npx shadcn@latest add card

# Add multiple components
npx shadcn@latest add card button badge input
```

### 3. **Working with Data**

Create type-safe data files in the `data/` directory:

```tsx
// data/projects.ts
export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	github?: string;
	demo?: string;
	highlights: string[];
}

export const projects: Project[] = [
	{
		id: "xtremepush",
		title: "Xtremepush SDK Integration",
		description: "Enterprise-grade SDK integration for in-app messaging",
		technologies: ["Android", "React Native", "Gradle"],
		image: "/images/projects/xtremepush.png",
		github: "https://github.com/...",
		highlights: [
			"Resolved manifest merge conflicts",
			"Built native event handlers",
			"Validated production deployment",
		],
	},
	// ... more projects
];
```

### 4. **Styling Guidelines**

**Use Tailwind CSS:**

```tsx
// ✅ Good
<div className="flex items-center gap-4 p-6 rounded-lg bg-card">

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '24px' }}>
```

**Use Theme Variables:**

```tsx
// ✅ Good - theme-aware
<div className="bg-background text-foreground">

// ❌ Avoid hard-coded colors
<div className="bg-white text-black">
```

**Responsive Design:**

```tsx
<div className="
  text-base md:text-lg lg:text-xl
  px-4 md:px-6 lg:px-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

### 5. **Image Optimization**

Always use Next.js Image component:

```tsx
import Image from "next/image";

// ✅ Good
<Image
  src="/images/project.jpg"
  alt="Project screenshot"
  width={1200}
  height={800}
  className="rounded-lg"
  priority // for above-the-fold images
/>

// For dynamic sizing
<div className="relative aspect-video">
  <Image
    src="/images/project.jpg"
    alt="Project screenshot"
    fill
    className="object-cover rounded-lg"
  />
</div>
```

---

## 📝 Code Standards

### TypeScript

**Enable strict mode:**

```json
// tsconfig.json
{
	"compilerOptions": {
		"strict": true,
		"noUncheckedIndexedAccess": true
	}
}
```

**Type all props:**

```tsx
interface HeroProps {
	title: string;
	subtitle?: string;
	onCTAClick: () => void;
}

export function Hero({ title, subtitle, onCTAClick }: HeroProps) {
	// ...
}
```

### Component Naming

-   **Components:** PascalCase (`Hero`, `ProjectCard`)
-   **Files:** kebab-case (`hero.tsx`, `project-card.tsx`)
-   **Utilities:** camelCase (`formatDate`, `getProjects`)

### File Organization

```tsx
// 1. External imports
import { useState } from "react";
import Image from "next/image";

// 2. Internal imports - components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 3. Internal imports - utilities/data
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

// 4. Types
interface Props {
	// ...
}

// 5. Component
export function MyComponent({}: Props) {
	// ...
}
```

---

## 🧪 Testing

### Manual Testing Checklist

**Before Each Commit:**

-   [ ] Component renders correctly
-   [ ] Responsive on mobile, tablet, desktop
-   [ ] Works in both light and dark mode
-   [ ] No console errors
-   [ ] No TypeScript errors
-   [ ] Accessible (keyboard navigation works)

**Before Deployment:**

-   [ ] All sections complete and functional
-   [ ] Contact form submits successfully
-   [ ] All links work and open correctly
-   [ ] Images load and are optimized
-   [ ] Performance (run Lighthouse)
-   [ ] Cross-browser testing (Chrome, Firefox, Safari)

### Lighthouse Testing

```bash
# Build production version
npm run build

# Start production server
npm start

# Open Chrome DevTools > Lighthouse > Generate Report
```

**Target Scores:**

-   Performance: > 90
-   Accessibility: > 95
-   Best Practices: > 90
-   SEO: > 95

---

## 🚢 Deployment

### Vercel (Recommended)

**First Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project
```

**Subsequent Deployments:**

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Or use Vercel GitHub Integration:**

1. Push to GitHub
2. Import project in Vercel dashboard
3. Auto-deploys on every push to main

### Environment Variables

Create `.env.local` for local development:

```env
# Contact Form (if using web service)
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_ACCESS_KEY=your_access_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add these in Vercel dashboard under Project Settings > Environment Variables.

---

## 🔧 Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# shadcn/ui
npx shadcn@latest add [component]    # Add component
npx shadcn@latest diff [component]   # Check for updates

# Git
git status           # Check status
git add .            # Stage changes
git commit -m "feat: add hero section"
git push             # Push to GitHub
```

---

## 📚 Resources

### Documentation

-   [Next.js Docs](https://nextjs.org/docs)
-   [React Docs](https://react.dev/)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [shadcn/ui](https://ui.shadcn.com/)
-   [TypeScript](https://www.typescriptlang.org/docs/)

### Learning

-   [Next.js Learn](https://nextjs.org/learn)
-   [React Patterns](https://reactpatterns.com/)
-   [Tailwind UI](https://tailwindui.com/)

### Tools

-   [Lucide Icons](https://lucide.dev/)
-   [Hero Icons](https://heroicons.com/)
-   [Unsplash](https://unsplash.com/) - Free images
-   [TinyPNG](https://tinypng.com/) - Image compression

---

## 🐛 Troubleshooting

### Common Issues

**1. Module Not Found**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. TypeScript Errors**

```bash
# Check types
npm run build

# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

**3. Styling Not Applied**

```bash
# Restart dev server
# Check globals.css is imported in layout.tsx
# Verify Tailwind classes are correct
```

**4. Images Not Loading**

-   Check file path is correct
-   Ensure images are in `public/` directory
-   Verify Next.js Image component usage

---

## 🤝 Contributing

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add project showcase section
fix: resolve mobile navigation bug
docs: update README with new instructions
style: format code with prettier
refactor: reorganize component structure
perf: optimize image loading
```

### Pull Request Process

1. Create feature branch: `git checkout -b feat/hero-section`
2. Make changes and commit
3. Push to GitHub: `git push origin feat/hero-section`
4. Create Pull Request
5. Request review
6. Merge after approval

---

## 📞 Support

For questions or issues:

-   **Documentation:** Check `/docs` folder
-   **GitHub Issues:** Create an issue on GitHub
-   **Email:** manelisi@example.com

---

## 📅 Development Roadmap

### Phase 1: Foundation ✅

-   [x] Project setup
-   [x] Documentation created
-   [ ] Basic layout structure

### Phase 2: Core Features

-   [ ] Hero section
-   [ ] About section
-   [ ] Experience timeline
-   [ ] Projects showcase
-   [ ] Skills grid
-   [ ] Contact form

### Phase 3: Polish

-   [ ] Animations
-   [ ] Performance optimization
-   [ ] SEO optimization
-   [ ] Accessibility audit

### Phase 4: Launch

-   [ ] Final testing
-   [ ] Production deployment
-   [ ] Domain setup
-   [ ] Analytics integration

---

**Happy Coding! 🚀**

_Last Updated: November 10, 2025_
_Maintainer: Manelisi Mpotulo_
