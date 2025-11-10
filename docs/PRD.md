# Product Requirements Document (PRD)

## Manelisi Mpotulo - Professional Portfolio Website

**Version:** 1.0
**Last Updated:** November 10, 2025
**Document Owner:** Manelisi Mpotulo
**Status:** In Development

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [Goals & Objectives](#goals--objectives)
4. [Target Audience](#target-audience)
5. [Feature Requirements](#feature-requirements)
6. [Technical Requirements](#technical-requirements)
7. [Design Requirements](#design-requirements)
8. [Content Requirements](#content-requirements)
9. [Success Metrics](#success-metrics)
10. [Timeline & Milestones](#timeline--milestones)
11. [Future Enhancements](#future-enhancements)

---

## 📊 Executive Summary

This document outlines the requirements for developing a professional portfolio website for **Manelisi Mpotulo**, a full-stack software developer specializing in enterprise systems, mobile development, and cloud infrastructure. The portfolio will serve as a comprehensive showcase of professional experience, technical skills, and production-grade projects.

**Primary Goal:** Create a modern, responsive, and accessible portfolio that effectively communicates professional expertise to potential employers, clients, and collaborators.

---

## 🎯 Project Overview

### Purpose

Build a professional digital presence that:

-   Showcases technical expertise and career achievements
-   Demonstrates proficiency in modern web technologies
-   Provides easy contact and networking opportunities
-   Serves as a central hub for professional information

### Scope

-   **In Scope:**

    -   Responsive single-page application (SPA)
    -   Professional biography and career history
    -   Project showcase with detailed case studies
    -   Technical skills visualization
    -   Contact form with validation
    -   Dark/light theme toggle
    -   SEO optimization
    -   Performance optimization

-   **Out of Scope (Phase 1):**
    -   Blog/CMS integration
    -   User authentication
    -   E-commerce functionality
    -   Multi-language support
    -   Admin dashboard

---

## 🎯 Goals & Objectives

### Primary Goals

1. **Professional Branding:** Establish a strong, consistent personal brand
2. **Technical Showcase:** Demonstrate full-stack development capabilities
3. **Career Advancement:** Attract opportunities from recruiters and potential employers
4. **Network Building:** Facilitate professional connections and collaborations

### Success Criteria

-   ✅ Fully responsive across all device sizes (mobile, tablet, desktop)
-   ✅ Lighthouse performance score > 90
-   ✅ Accessibility score (WCAG 2.1 AA compliance)
-   ✅ Fast load times (< 2s on 3G)
-   ✅ Professional, modern design that reflects technical expertise
-   ✅ Easy to navigate and find information
-   ✅ Functional contact form with email integration

---

## 👥 Target Audience

### Primary Personas

**1. Technical Recruiters**

-   **Needs:** Quick assessment of technical skills, experience level, project complexity
-   **Goals:** Determine candidate fit for open positions
-   **Behavior:** Scans quickly, focuses on tech stack and recent projects

**2. Hiring Managers / CTOs**

-   **Needs:** In-depth understanding of technical abilities, problem-solving approach
-   **Goals:** Evaluate technical leadership and system architecture skills
-   **Behavior:** Reviews project details, looks for production experience

**3. Fellow Developers / Collaborators**

-   **Needs:** Code quality, technical stack alignment, collaboration potential
-   **Goals:** Assess collaboration opportunities, technical insights
-   **Behavior:** Examines project details, explores GitHub links

**4. Potential Clients**

-   **Needs:** Evidence of delivery capability, domain expertise
-   **Goals:** Hire for contract or consulting work
-   **Behavior:** Focuses on project outcomes and testimonials

---

## ✨ Feature Requirements

### 1. Hero Section (Landing)

**Priority:** P0 (Critical)

**Requirements:**

-   Professional headshot/avatar
-   Name and professional title
-   Compelling tagline/elevator pitch
-   Call-to-action buttons (View Work, Contact)
-   Location indicator (Cape Town, South Africa)
-   Animated entrance (subtle, professional)

**Acceptance Criteria:**

-   Renders correctly on all screen sizes
-   Image optimized for fast loading
-   CTAs are prominent and functional
-   Smooth scroll to sections when clicked

---

### 2. Navigation

**Priority:** P0 (Critical)

**Requirements:**

-   Fixed/sticky navigation bar
-   Smooth scroll to sections
-   Active section highlighting
-   Mobile hamburger menu
-   Dark/light mode toggle
-   Logo/name link to top

**Sections:**

-   Home
-   About
-   Experience
-   Projects
-   Skills
-   Contact

**Acceptance Criteria:**

-   Navigation remains accessible while scrolling
-   Active section updates on scroll
-   Mobile menu transitions smoothly
-   Theme toggle persists user preference

---

### 3. About Section

**Priority:** P0 (Critical)

**Requirements:**

-   Professional biography (150-200 words)
-   Education details (CPUT, B.Eng Tech)
-   Core competencies highlight
-   Years of experience
-   Professional photo (optional)
-   Download CV button

**Acceptance Criteria:**

-   Content is concise and compelling
-   CV downloads as PDF
-   Responsive layout with appropriate spacing

---

### 4. Professional Experience

**Priority:** P0 (Critical)

**Requirements:**

-   Timeline/chronological layout
-   Company name, role, duration
-   Key responsibilities (bullet points)
-   Technologies used (tags/badges)
-   Achievements and impact metrics

**Content:**

-   **BETSoftware** (2023 - Present)
    -   Full-Stack Developer
    -   6+ key contributions
    -   Technology stack visualization

**Acceptance Criteria:**

-   Timeline is visually clear
-   Technology tags are interactive (filterable in future)
-   Responsive card/list layout

---

### 5. Projects Showcase

**Priority:** P0 (Critical)

**Requirements:**

-   Grid/card layout for projects
-   Project thumbnail/screenshot
-   Project title and brief description
-   Technology stack tags
-   Links to live demo (if applicable)
-   Links to GitHub repository
-   "View Details" modal/page
-   Category tags (Personal, Professional, Open Source)

**Projects to Include:**

**Personal & Business Projects:**

1. Mpotulo Inc. Website
2. AuctionMarket SA
3. PulseCampus
4. PayMeZar
5. OnlyFriends Entertainment - Ticketing System
6. Lisk Analytics Dashboard

**Professional Projects (BETSoftware):** 7. Xtremepush SDK Integration 8. Expo Notifications Crash Diagnostics 9. Linux Proxy Inspection Workflow 10. Redis Cache Implementation (BETSoftware) 11. AppsFlyer Smart Banner Integration

**Total:** 11 production-grade projects

**Each Project Card Includes:**

-   Featured image
-   Title
-   2-3 sentence summary
-   Tech stack badges
-   Category badge (Personal/Professional)
-   Role/contribution
-   Key achievements (3-5 bullets)
-   Links (GitHub, live demo if applicable)
-   Metrics/impact (if applicable)

**Acceptance Criteria:**

-   Cards are visually consistent
-   Hover states provide feedback
-   Filters work (by technology, category, type)
-   Modal/detail view is comprehensive
-   Images are optimized

---

### 6. Technical Skills

**Priority:** P0 (Critical)

**Requirements:**

-   Categorized skill display
-   Visual proficiency indicators (optional)
-   Technology logos/icons
-   Organized by category

**Categories:**

-   **Languages:** Java, TypeScript, JavaScript, SQL, Bash
-   **Frontend:** Next.js, React, React Native, Tailwind CSS
-   **Backend:** Spring Boot, Node.js, Express
-   **Mobile:** Android Native, React Native, Expo
-   **Databases:** PostgreSQL, Redis, SQL Server
-   **Cloud & DevOps:** AWS, Azure, Cloudflare, Docker, CI/CD
-   **Security:** SSH, Proxy Inspection, OAuth
-   **Tools:** Git, Jira, Gradle, Dynatrace

**Acceptance Criteria:**

-   Skills are grouped logically
-   Visual design is clean and scannable
-   Icons/logos enhance recognition
-   Responsive grid layout

---

### 7. Contact Section

**Priority:** P0 (Critical)

**Requirements:**

-   Contact form with fields:
    -   Name (required)
    -   Email (required, validated)
    -   Subject (required)
    -   Message (required, min 10 chars)
-   Form validation (client-side)
-   Success/error messaging
-   Social media links (LinkedIn, GitHub)
-   Email link
-   Location display

**Acceptance Criteria:**

-   Form validates inputs before submission
-   Email integration works (using Web3Forms/Formspree/EmailJS)
-   Success message displays on submission
-   Error handling is user-friendly
-   Social links open in new tabs
-   Spam protection (reCAPTCHA or honeypot)

---

### 8. Footer

**Priority:** P1 (High)

**Requirements:**

-   Copyright notice
-   Social media icons
-   Quick links to sections
-   "Built with" tech stack mention
-   Back to top button

**Acceptance Criteria:**

-   Footer is consistent across all pages
-   Links are functional
-   Design matches overall theme

---

### 9. Theme Toggle (Dark/Light Mode)

**Priority:** P1 (High)

**Requirements:**

-   Toggle button in navigation
-   Smooth transition between modes
-   Persistence of user preference (localStorage)
-   System preference detection
-   All components support both themes

**Acceptance Criteria:**

-   Theme persists across page reloads
-   No flash of unstyled content
-   All text remains readable in both modes
-   Images/icons adapt appropriately

---

## 🔧 Technical Requirements

### Technology Stack

**Frontend:**

-   **Framework:** Next.js 16.0 (App Router)
-   **Language:** TypeScript 5.0
-   **Styling:** Tailwind CSS v4
-   **UI Components:** shadcn/ui
-   **Icons:** Lucide React
-   **Fonts:** Geist Sans, Geist Mono

**Backend/Services:**

-   **Form Handling:** Web3Forms / Formspree / EmailJS
-   **Email:** SendGrid / Resend (for notifications)

**Deployment:**

-   **Hosting:** Vercel (recommended) / Netlify
-   **Domain:** Custom domain (e.g., manelisimpotulo.dev)
-   **SSL:** Automatic (via hosting platform)

**Analytics:**

-   Google Analytics 4 / Vercel Analytics
-   Performance monitoring

### Performance Requirements

**Load Time:**

-   First Contentful Paint (FCP): < 1.5s
-   Time to Interactive (TTI): < 3s
-   Largest Contentful Paint (LCP): < 2.5s

**Lighthouse Scores:**

-   Performance: > 90
-   Accessibility: > 95
-   Best Practices: > 90
-   SEO: > 95

**Optimization:**

-   Image optimization (Next.js Image component)
-   Code splitting and lazy loading
-   Minification and compression
-   CDN delivery for static assets

### Browser Support

-   Chrome (latest 2 versions)
-   Firefox (latest 2 versions)
-   Safari (latest 2 versions)
-   Edge (latest 2 versions)
-   Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Breakpoints

-   Mobile: 320px - 767px
-   Tablet: 768px - 1023px
-   Desktop: 1024px - 1439px
-   Large Desktop: 1440px+

---

## 🎨 Design Requirements

### Design Principles

1. **Professional:** Clean, modern, minimal design
2. **Accessible:** WCAG 2.1 AA compliant
3. **Consistent:** Unified design language across all sections
4. **Performant:** Fast, smooth interactions
5. **Responsive:** Seamless experience across devices

### Color Scheme

-   **Primary:** Based on existing shadcn/ui theme (stone variant)
-   **Dark Mode:** High contrast, comfortable for extended viewing
-   **Light Mode:** Clean, professional, easy on the eyes
-   **Accents:** Subtle use of brand colors for CTAs

### Typography

-   **Headings:** Geist Sans (weights: 600, 700)
-   **Body:** Geist Sans (weights: 400, 500)
-   **Code/Technical:** Geist Mono (weight: 400)
-   **Hierarchy:** Clear distinction between heading levels

### Spacing & Layout

-   Consistent spacing scale (4px base)
-   Max content width: 1440px
-   Comfortable reading width for text: 65-75 characters
-   Adequate whitespace for clarity

### Animations

-   Entrance animations for sections (on scroll)
-   Hover states for interactive elements
-   Smooth transitions (200-300ms)
-   Reduced motion support (respects user preferences)

### Accessibility

-   Semantic HTML5 elements
-   ARIA labels where needed
-   Keyboard navigation support
-   Focus indicators
-   Sufficient color contrast (4.5:1 for text)
-   Alt text for all images
-   Screen reader compatibility

---

## 📝 Content Requirements

### Copy & Messaging

**Hero Tagline:**

-   Concise (10-15 words)
-   Highlights key expertise
-   Engaging and professional
-   Example: "Building scalable systems and crafting exceptional digital experiences"

**About Section:**

-   150-200 words
-   Professional tone
-   Highlights background, expertise, passion
-   Includes location and availability

**Project Descriptions:**

-   Title (4-6 words)
-   Summary (2-3 sentences)
-   Detailed description (100-150 words)
-   Key achievements (3-5 bullet points)
-   Technologies used

**Call-to-Actions:**

-   Clear, action-oriented
-   Examples: "View My Work", "Get in Touch", "Download CV", "See Project"

### Assets Needed

**Images:**

-   Professional headshot (square, min 512x512px)
-   Project screenshots/mockups (1200x800px)
-   Company logos (if permitted)
-   Technology icons/logos

**Documents:**

-   CV/Resume (PDF format)
-   Project case study PDFs (optional)

**Links:**

-   GitHub profile
-   LinkedIn profile
-   Email address
-   Project repositories
-   Live project demos (if applicable)

---

## 📈 Success Metrics

### Quantitative Metrics

-   **Page Load Time:** < 2 seconds
-   **Lighthouse Score:** > 90 (all categories)
-   **Monthly Visitors:** Track with analytics
-   **Contact Form Submissions:** Track conversion rate
-   **CV Downloads:** Monitor download count
-   **Session Duration:** Average > 2 minutes
-   **Bounce Rate:** < 50%

### Qualitative Metrics

-   Professional appearance
-   Ease of navigation
-   Content clarity
-   Brand consistency
-   User feedback (surveys/direct feedback)

---

## 📅 Timeline & Milestones

### Phase 1: Foundation (Week 1)

**Milestone 1.1: Setup & Infrastructure**

-   ✅ Project initialization
-   ✅ Dependencies installed
-   ✅ shadcn/ui components configured
-   ✅ PRD and documentation created

**Milestone 1.2: Core Layout**

-   [ ] Navigation component
-   [ ] Hero section
-   [ ] Footer component
-   [ ] Theme toggle implementation

### Phase 2: Content Sections (Week 2)

**Milestone 2.1: About & Experience**

-   [ ] About section layout
-   [ ] Professional experience timeline
-   [ ] Content integration

**Milestone 2.2: Projects Showcase**

-   [ ] Project card component
-   [ ] Project detail modal/page
-   [ ] Filter functionality
-   [ ] All 5 projects added

### Phase 3: Skills & Contact (Week 3)

**Milestone 3.1: Technical Skills**

-   [ ] Skills grid layout
-   [ ] Category organization
-   [ ] Icon integration

**Milestone 3.2: Contact Form**

-   [ ] Form UI with validation
-   [ ] Email service integration
-   [ ] Success/error handling
-   [ ] Spam protection

### Phase 4: Polish & Optimization (Week 4)

**Milestone 4.1: Optimization**

-   [ ] Image optimization
-   [ ] Performance tuning
-   [ ] SEO optimization
-   [ ] Accessibility audit

**Milestone 4.2: Testing & Deployment**

-   [ ] Cross-browser testing
-   [ ] Mobile testing
-   [ ] Production deployment
-   [ ] Domain setup
-   [ ] Analytics integration

---

## 🔮 Future Enhancements (Phase 2+)

### Short-term (Next 3 months)

-   [ ] Blog section with MDX support
-   [ ] Testimonials/recommendations
-   [ ] More detailed case studies
-   [ ] Certifications showcase
-   [ ] Newsletter signup

### Medium-term (Next 6 months)

-   [ ] GitHub activity integration
-   [ ] Tech stack proficiency indicators
-   [ ] Interactive project demos
-   [ ] Video introductions
-   [ ] Multi-language support (English/Afrikaans)

### Long-term (Next 12 months)

-   [ ] CMS integration for easy updates
-   [ ] Admin dashboard
-   [ ] Analytics dashboard
-   [ ] A/B testing implementation
-   [ ] Advanced animations and interactions

---

## 📋 Appendix

### References

-   [Next.js Documentation](https://nextjs.org/docs)
-   [shadcn/ui Components](https://ui.shadcn.com/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Glossary

-   **SPA:** Single Page Application
-   **SEO:** Search Engine Optimization
-   **CTA:** Call to Action
-   **WCAG:** Web Content Accessibility Guidelines
-   **LCP:** Largest Contentful Paint
-   **FCP:** First Contentful Paint
-   **TTI:** Time to Interactive

---

**Document Status:** Active Development
**Next Review Date:** Upon Phase 1 Completion
**Approval:** Manelisi Mpotulo

---

_This PRD is a living document and will be updated as the project evolves._
