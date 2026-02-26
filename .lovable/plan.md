

# Modernize Joy Pasto's Portfolio Site

## Overview
Refresh the site with a more modern, polished look while keeping it professional. Here's what changes:

## Design Changes

### 1. Updated Color Palette
- Shift from dark navy to a softer, modern palette -- think deep charcoal with teal/emerald accents
- Lighter backgrounds with more white space
- Subtle gradient on the hero section instead of a flat color block

### 2. Typography Upgrade
- Switch from Playfair Display to **Inter** (headings) + **Inter** (body) for a clean, modern SaaS-style feel
- Larger, bolder hero text with lighter weight body copy

### 3. Favicon
- Replace the default Lovable favicon with a custom "JP" monogram favicon using an SVG -- clean and professional

### 4. Hero Section Redesign
- Full-viewport hero with a subtle gradient background
- Larger name with a short animated typing-style tagline (CSS only)
- Contact pills redesigned as glass-morphism style badges
- Add a subtle decorative geometric shape or pattern

### 5. Skills Section
- Replace basic cards with modern icon-badge style layout
- Add hover effects with scale and shadow transitions

### 6. Experience Timeline
- More visual timeline with connected dots and lines
- Add subtle left-border accent color changes

### 7. Footer
- Cleaner, minimal footer with social-style icon links

### 8. Global Polish
- Add smooth fade-in animations on scroll using CSS `@keyframes` and Intersection Observer (no extra dependencies)
- Rounded corners, softer shadows throughout
- Remove the OG image pointing to lovable.dev -- use a proper meta description instead

## Technical Details

### Files to modify:
- **`index.html`** -- new SVG favicon, updated meta tags (remove Lovable branding from OG/Twitter)
- **`src/index.css`** -- new color tokens, updated font imports (Inter), animation keyframes, scroll animation utility classes
- **`src/pages/Index.tsx`** -- redesigned hero with gradient, updated section layouts, scroll-triggered animation classes
- **`src/components/Navbar.tsx`** -- glassmorphism navbar with backdrop blur, updated styling
- **`public/favicon.ico`** -- replaced with inline SVG favicon in index.html

### No new dependencies needed
All animations done with CSS + a small React hook for Intersection Observer.

