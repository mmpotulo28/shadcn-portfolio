# Pre-Development Checklist

## Manelisi Mpotulo Portfolio - Before You Start Coding

**Date:** November 10, 2025
**Purpose:** Ensure all prerequisites are ready before development begins

---

## ✅ Documentation Review

-   [x] Read README.md
-   [ ] Review [PRD.md](./PRD.md) - Understand all features
-   [ ] Review [DESIGN.md](./DESIGN.md) - Understand design system
-   [ ] Review [DEVELOPMENT.md](./DEVELOPMENT.md) - Setup workflow
-   [ ] Review [CONTENT.md](./CONTENT.md) - Know what content to use
-   [ ] Review [PROJECT-SUMMARY.md](./PROJECT-SUMMARY.md) - Understand roadmap

**Status:** ⏳ In Progress
**Estimated Time:** 30-45 minutes

---

## 📸 Assets Collection

### Critical Assets (Required for Phase 1)

#### Personal Photos

-   [ ] Professional headshot/avatar
    -   Format: JPG/PNG
    -   Size: 512x512px (square)
    -   Quality: High resolution
    -   Location: `/public/images/headshot.jpg`

#### Project Screenshots (11 Required)

**Personal & Business Projects:**

-   [ ] Mpotulo Inc. Website screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/mpotulo-inc.jpg`

-   [ ] AuctionMarket SA screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/auction-market.jpg`

-   [ ] PulseCampus screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/pulsecampus.jpg`

-   [ ] PayMeZar screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/paymezar.jpg`

-   [ ] OnlyFriends Entertainment screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/onlyfriends.jpg`

-   [ ] Lisk Analytics Dashboard screenshot
    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/lisk-analytics.jpg`

**Professional Projects (BETSoftware):**

-   [ ] Xtremepush SDK Integration screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/xtremepush.jpg`

-   [ ] Expo Notifications screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/expo-notifications.jpg`

-   [ ] Linux Proxy Inspection screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/proxy-workflow.jpg`

-   [ ] Redis Cache Implementation screenshot

    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/redis-cache.jpg`

-   [ ] AppsFlyer Smart Banner screenshot
    -   Size: 1200x800px
    -   Format: JPG/PNG
    -   Location: `/public/images/projects/appsflyer.jpg`

#### Documents

-   [ ] CV/Resume PDF
    -   Format: PDF
    -   File name: `Manelisi-Mpotulo-CV.pdf`
    -   Location: `/public/cv/Manelisi-Mpotulo-CV.pdf`
    -   Size: < 2MB

**Status:** ⏳ Pending
**Required Before:** Starting Projects section

---

## 🔧 Technical Setup

### Development Environment

-   [x] Node.js installed (v18+)
-   [x] Package manager (npm/yarn/pnpm)
-   [x] Git configured
-   [x] VS Code or preferred editor
-   [x] Dependencies installed (`npm install`)

### Accounts & Services

-   [ ] Create **Web3Forms** account (for contact form)

    -   Visit: https://web3forms.com
    -   Get access key
    -   Save in `.env.local`

-   [ ] Create **Vercel** account (for deployment)

    -   Visit: https://vercel.com
    -   Connect GitHub account
    -   Prepare for deployment

-   [ ] Optional: **Google Analytics** setup
    -   Create GA4 property
    -   Get measurement ID
    -   Add to environment variables

### Environment Variables

Create `.env.local` file in root:

```env
# Contact Form
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_ACCESS_KEY=your_web3forms_access_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Status:** ⏳ Pending
**Required Before:** Building Contact section

---

## ✍️ Content Decisions

### Make These Choices Before Development

#### 1. Hero Tagline Selection

From [CONTENT.md](./CONTENT.md), choose one:

-   [ ] Option 1: "Building scalable systems and crafting exceptional digital experiences" ⭐ Recommended
-   [ ] Option 2: "Transforming complex problems into elegant, production-ready solutions"
-   [ ] Option 3: "Engineering secure, high-performance applications from concept to deployment"
-   [ ] Option 4: "Specializing in enterprise systems, mobile development, and cloud infrastructure" ⭐ Recommended

**Selected:** **\*\*\*\***\_**\*\*\*\***

#### 2. Contact Information

Update these in [CONTENT.md](./CONTENT.md):

-   [ ] Replace `manelisi.mpotulo@example.com` with real email
-   [ ] Add real LinkedIn profile URL
-   [ ] Verify GitHub URL is correct
-   [ ] Decide if adding Twitter/X link

**Email:** **\*\*\*\***\_**\*\*\*\***
**LinkedIn:** **\*\*\*\***\_**\*\*\*\***

#### 3. Domain Name

-   [ ] Purchase custom domain (e.g., `manelisimpotulo.dev`)
-   [ ] Or use Vercel subdomain initially: `manelisi-mpotulo.vercel.app`

**Decision:** **\*\*\*\***\_**\*\*\*\***

#### 4. Analytics Platform

-   [ ] Google Analytics 4
-   [ ] Vercel Analytics
-   [ ] Both
-   [ ] None (add later)

**Decision:** **\*\*\*\***\_**\*\*\*\***

---

## 📂 Project Structure Setup

Run these commands to create the directory structure:

```bash
# Create component directories
mkdir -p components/sections
mkdir -p components/layout
mkdir -p components/common

# Create data directory
mkdir -p data

# Create types directory
mkdir -p types

# Create public asset directories
mkdir -p public/images/projects
mkdir -p public/icons
mkdir -p public/cv
```

**Checklist:**

-   [ ] `components/sections/` created
-   [ ] `components/layout/` created
-   [ ] `components/common/` created
-   [ ] `data/` created
-   [ ] `types/` created
-   [ ] `public/images/projects/` created
-   [ ] `public/icons/` created
-   [ ] `public/cv/` created

---

## 🎨 Design Decisions

### Theme Colors

Review and confirm theme in [DESIGN.md](./DESIGN.md):

-   [ ] Satisfied with current shadcn/ui stone theme
-   [ ] Or want to customize colors?

**Decision:** **\*\*\*\***\_**\*\*\*\***

### Font Preferences

Current: Geist Sans & Geist Mono

-   [ ] Keep current fonts
-   [ ] Or change to different fonts?

**Decision:** **\*\*\*\***\_**\*\*\*\***

---

## 📋 Development Tools

### Recommended VS Code Extensions

-   [ ] **ESLint** - Code linting
-   [ ] **Prettier** - Code formatting
-   [ ] **Tailwind CSS IntelliSense** - Tailwind autocomplete
-   [ ] **TypeScript** - TS support (built-in)
-   [ ] **Git Lens** - Git integration
-   [ ] **Error Lens** - Inline error messages

### Browser DevTools

-   [ ] Chrome DevTools installed
-   [ ] React Developer Tools extension
-   [ ] Lighthouse extension (for testing)

---

## 🚀 Ready to Start?

### Final Verification

Before writing your first component, ensure:

-   [ ] All documentation has been reviewed
-   [ ] Critical assets are ready or placeholders noted
-   [ ] Development environment is set up
-   [ ] Contact form service account created
-   [ ] Content decisions are made
-   [ ] Project structure is created
-   [ ] `.env.local` file is configured
-   [ ] You understand the design system
-   [ ] You know the development workflow

### Recommended Starting Order

1. **First:** Create Navigation component (`components/layout/navbar.tsx`)
2. **Second:** Create Footer component (`components/layout/footer.tsx`)
3. **Third:** Create Hero section (`components/sections/hero.tsx`)
4. **Fourth:** Update `app/page.tsx` to use new components
5. **Test:** Run `npm run dev` and verify in browser

---

## 📞 Quick Reference

### Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linting
npx shadcn add [component]  # Add shadcn component
```

### Important Files

-   **Main Page:** `app/page.tsx`
-   **Layout:** `app/layout.tsx`
-   **Styles:** `app/globals.css`
-   **Utils:** `lib/utils.ts`

### Documentation

-   **Features:** [docs/PRD.md](./PRD.md)
-   **Design:** [docs/DESIGN.md](./DESIGN.md)
-   **Setup:** [docs/DEVELOPMENT.md](./DEVELOPMENT.md)
-   **Content:** [docs/CONTENT.md](./CONTENT.md)

---

## ✨ You're Ready!

Once all checkboxes above are complete, you're ready to start development!

**Next Step:** Create the Navigation component

```bash
# Create the file
touch components/layout/navbar.tsx

# Open in editor and start coding!
```

Refer to [DESIGN.md](./DESIGN.md) for component patterns and [CONTENT.md](./CONTENT.md) for content to use.

**Good luck! 🚀**

---

**Status:** ⏳ Pre-Development
**Completion:** Check off items as you complete them
**Questions?** Refer to [DEVELOPMENT.md](./DEVELOPMENT.md) troubleshooting section
