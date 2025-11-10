# Design System Guide

## Manelisi Mpotulo Portfolio

**Version:** 1.0
**Last Updated:** November 10, 2025

---

## 🎨 Overview

This document outlines the design system, UI/UX guidelines, and component usage for the Manelisi Mpotulo portfolio website. It ensures consistency, accessibility, and a professional appearance across all sections.

---

## 🎯 Design Principles

### 1. **Professional & Technical**

The design should reflect expertise in software engineering while remaining approachable and easy to navigate.

### 2. **Clean & Minimal**

Focus on content over decoration. Use whitespace effectively to create breathing room and visual hierarchy.

### 3. **Accessible by Default**

All components must meet WCAG 2.1 AA standards with proper contrast, keyboard navigation, and screen reader support.

### 4. **Performance-First**

Every design decision should consider performance impact. Optimize images, minimize animations, and ensure fast load times.

### 5. **Responsive & Adaptive**

Design for mobile first, then scale up. Content should be accessible and beautiful on any device.

---

## 🌈 Color System

### Theme Configuration

The portfolio uses shadcn/ui's theme system with CSS variables for easy theme switching.

#### Light Mode

```css
--background: oklch(1 0 0); /* Pure white */
--foreground: oklch(0.147 0.004 49.25); /* Near black */
--primary: oklch(0.216 0.006 56.043); /* Dark gray */
--muted: oklch(0.97 0.001 106.424); /* Light gray */
--accent: oklch(0.97 0.001 106.424); /* Subtle accent */
```

#### Dark Mode

```css
--background: oklch(0.147 0.004 49.25); /* Near black */
--foreground: oklch(0.985 0.001 106.423); /* Off white */
--primary: oklch(0.923 0.003 48.717); /* Light gray */
--muted: oklch(0.268 0.007 34.298); /* Dark gray */
--accent: oklch(0.268 0.007 34.298); /* Subtle accent */
```

### Usage Guidelines

**Background Colors:**

-   `bg-background` - Main background
-   `bg-card` - Card/section backgrounds
-   `bg-muted` - Subtle backgrounds

**Text Colors:**

-   `text-foreground` - Primary text
-   `text-muted-foreground` - Secondary text
-   `text-primary` - Emphasized text

**Accent Colors:**

-   Use sparingly for CTAs and important highlights
-   Ensure 4.5:1 contrast ratio minimum

---

## 📝 Typography

### Font Families

**Geist Sans** - Primary typeface

-   Headings: 600, 700 weight
-   Body: 400, 500 weight
-   Usage: All UI text, headings, paragraphs

**Geist Mono** - Monospace

-   Code snippets
-   Technical details
-   Technology names (optional)

### Type Scale

```css
/* Headings */
h1: text-4xl md:text-5xl lg:text-6xl  /* 36-60px */
h2: text-3xl md:text-4xl              /* 30-36px */
h3: text-2xl md:text-3xl              /* 24-30px */
h4: text-xl md:text-2xl               /* 20-24px */

/* Body */
Large: text-lg    /* 18px */
Base: text-base   /* 16px */
Small: text-sm    /* 14px */
XSmall: text-xs   /* 12px */
```

### Typography Best Practices

1. **Line Height:**

    - Headings: `leading-tight` (1.25)
    - Body text: `leading-relaxed` (1.625)
    - Code: `leading-normal` (1.5)

2. **Letter Spacing:**

    - Headings: `tracking-tight`
    - Body: Default
    - All caps: `tracking-wide`

3. **Font Weights:**
    - Regular: 400
    - Medium: 500
    - Semibold: 600
    - Bold: 700

---

## 📐 Spacing System

### Scale (Tailwind)

```
0.5 = 2px   (0.125rem)
1   = 4px   (0.25rem)
2   = 8px   (0.5rem)
3   = 12px  (0.75rem)
4   = 16px  (1rem)
6   = 24px  (1.5rem)
8   = 32px  (2rem)
12  = 48px  (3rem)
16  = 64px  (4rem)
20  = 80px  (5rem)
24  = 96px  (6rem)
32  = 128px (8rem)
```

### Component Spacing

**Section Padding:**

-   Mobile: `py-16 px-4` (64px vertical, 16px horizontal)
-   Desktop: `py-24 px-8` (96px vertical, 32px horizontal)

**Component Gaps:**

-   Tight: `gap-2` (8px)
-   Normal: `gap-4` (16px)
-   Relaxed: `gap-8` (32px)

**Content Max Width:**

-   Text content: `max-w-3xl` (768px)
-   Full content: `max-w-7xl` (1280px)

---

## 🧱 Layout System

### Grid System

**Project Cards:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

**Skills Grid:**

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```

### Container

```tsx
<div className="container mx-auto px-4 md:px-8 max-w-7xl">
```

---

## 🎭 Components

### Buttons

**Primary CTA:**

```tsx
<Button size="lg" className="gap-2">
	<Icon className="h-4 w-4" />
	Button Text
</Button>
```

**Secondary:**

```tsx
<Button variant="outline" size="lg">
	Button Text
</Button>
```

**Ghost (Minimal):**

```tsx
<Button variant="ghost">Button Text</Button>
```

### Cards

**Project Card:**

```tsx
<Card className="overflow-hidden hover:shadow-lg transition-shadow">
	<div className="aspect-video relative">
		<Image src="..." alt="..." fill className="object-cover" />
	</div>
	<CardHeader>
		<CardTitle>Project Title</CardTitle>
		<CardDescription>Brief description</CardDescription>
	</CardHeader>
	<CardContent>{/* Technology badges */}</CardContent>
	<CardFooter>{/* Links/CTAs */}</CardFooter>
</Card>
```

**Info Card:**

```tsx
<Card>
	<CardHeader>
		<CardTitle className="flex items-center gap-2">
			<Icon className="h-5 w-5" />
			Title
		</CardTitle>
	</CardHeader>
	<CardContent>Content here</CardContent>
</Card>
```

### Badges

**Technology Tags:**

```tsx
<Badge variant="secondary" className="font-mono text-xs">
	TypeScript
</Badge>
```

**Status/Category:**

```tsx
<Badge variant="outline">Category</Badge>
```

---

## ✨ Animations

### Entrance Animations

**Fade In Up:**

```tsx
<div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
```

**Scale In:**

```tsx
<div className="animate-in zoom-in-95 duration-300">
```

### Hover States

**Cards:**

```tsx
className = "transition-all hover:shadow-lg hover:-translate-y-1 duration-300";
```

**Buttons:**

```tsx
className = "transition-colors duration-200";
```

### Performance Considerations

-   Use `transform` and `opacity` for animations (GPU-accelerated)
-   Respect `prefers-reduced-motion`
-   Keep animations subtle and purposeful

---

## 📱 Responsive Breakpoints

```tsx
// Mobile First Approach
className="
  text-base           // Mobile (default)
  md:text-lg          // Tablet (768px+)
  lg:text-xl          // Desktop (1024px+)
  xl:text-2xl         // Large Desktop (1280px+)
"
```

### Common Patterns

**Stack on Mobile, Row on Desktop:**

```tsx
<div className="flex flex-col md:flex-row gap-4">
```

**Hide on Mobile:**

```tsx
<div className="hidden md:block">
```

**Show Only on Mobile:**

```tsx
<div className="block md:hidden">
```

---

## ♿ Accessibility

### Focus States

All interactive elements must have visible focus indicators:

```tsx
className = "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
```

### ARIA Labels

```tsx
<button aria-label="Toggle dark mode">
	<Icon />
</button>
```

### Semantic HTML

Use proper HTML5 elements:

-   `<nav>` for navigation
-   `<main>` for main content
-   `<section>` for content sections
-   `<article>` for independent content
-   `<header>` and `<footer>`

### Image Alt Text

```tsx
<Image src="/project.jpg" alt="Dashboard showing real-time analytics with Redis caching" />
```

---

## 🎯 Component Usage Examples

### Section Header

```tsx
<div className="space-y-4 text-center md:text-left">
	<h2 className="text-3xl md:text-4xl font-bold tracking-tight">Section Title</h2>
	<p className="text-lg text-muted-foreground max-w-2xl">Section description providing context</p>
</div>
```

### Technology Stack List

```tsx
<div className="flex flex-wrap gap-2">
	{technologies.map((tech) => (
		<Badge key={tech} variant="secondary" className="font-mono">
			{tech}
		</Badge>
	))}
</div>
```

### Timeline Item

```tsx
<div className="relative pl-8 border-l-2 border-muted pb-8">
	<div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
	<div className="space-y-2">
		<p className="text-sm text-muted-foreground">2023 - Present</p>
		<h3 className="text-xl font-semibold">Position Title</h3>
		<p className="text-muted-foreground">Company Name</p>
		<ul className="space-y-1 text-sm">
			<li>• Achievement one</li>
			<li>• Achievement two</li>
		</ul>
	</div>
</div>
```

---

## 🎨 Dark Mode Guidelines

### Image Handling

```tsx
// Logo that inverts in dark mode
<Image
  src="/logo.svg"
  alt="Logo"
  className="dark:invert"
/>

// Different images for each theme
<Image
  src="/hero-light.jpg"
  alt="Hero"
  className="block dark:hidden"
/>
<Image
  src="/hero-dark.jpg"
  alt="Hero"
  className="hidden dark:block"
/>
```

### Color Considerations

-   Ensure all custom colors work in both themes
-   Test contrast ratios in both modes
-   Use CSS variables for theme-aware colors

---

## 📏 Code Style

### Component Structure

```tsx
// 1. Imports
import { Component } from "library";

// 2. Types/Interfaces
interface Props {
	title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
	// 4. Hooks
	const [state, setState] = useState();

	// 5. Handlers
	const handleClick = () => {};

	// 6. Render
	return <div className="space-y-4">{/* Content */}</div>;
}
```

### Class Name Organization

```tsx
className="
  // Layout
  flex items-center justify-between

  // Spacing
  px-4 py-2 gap-2

  // Typography
  text-base font-medium

  // Colors
  bg-background text-foreground

  // States
  hover:bg-muted transition-colors

  // Responsive
  md:px-6 lg:text-lg
"
```

---

## 🔍 Best Practices

1. **Consistency:** Use the same components and patterns throughout
2. **Accessibility:** Test with keyboard and screen readers
3. **Performance:** Optimize images, lazy load when appropriate
4. **Mobile First:** Design for small screens, enhance for large
5. **Theme Support:** All components must work in both light and dark modes
6. **Semantic HTML:** Use proper HTML5 elements
7. **Documentation:** Comment complex logic and component usage

---

**Last Updated:** November 10, 2025
**Maintained By:** Manelisi Mpotulo
