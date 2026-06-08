# Sahed Alom Sumit - Design System & Style Guide

This document outlines the core design language, components, and architectural styling extracted from the `sahedalomsumit` main website. You can use this as a reference guide to replicate the same premium, dynamic, and modern aesthetic across your new websites.

## 1. Core Identity & Vibe
- **Aesthetic**: Cyberpunk-meets-minimalism, dark mode first, glassmorphism, highly interactive, and developer-focused.
- **Key Traits**: Monospace tech-like subheadings (e.g., `/ SYSTEM_STATUS`), glowing elements, background grids, bento-box layouts, and buttery smooth animations.

## 2. Typography
- **Primary Font**: `Inter` (sans-serif) - Used for all main headings, body text, and general UI.
- **Secondary/Tech Font**: `JetBrains Mono` (monospace) - Used for labels, tags, subheadings, and "techy" accents.
- **Heading Styles**: Extremely bold (`font-extrabold` or `font-black`), uppercase, and tightly tracked (`tracking-tighter`).
- **Accent/Label Styles**: Tiny text (`10px`), monospace, uppercase, and widely tracked (`tracking-widest` or `tracking-[0.2em]`).

## 3. Color Palette

### Dark Mode (Default Theme)
- **Background**: `#050505` (Deep Black)
- **TopBar / Menu**: `#080808`
- **Header**: `rgba(10, 10, 10, 0.85)` (with background blur)
- **Primary Accent (Violet)**: `#8b5cf6` (Hover: `#7c3aed`)
- **Secondary Accent (Emerald)**: `#10b981`
- **Text Main**: `#ffffff`
- **Text Muted**: `#94a3b8` (Slate Gray)
- **Card Background**: `rgba(255, 255, 255, 0.02)`
- **Borders & Dividers**: `rgba(255, 255, 255, 0.08)`

### Light Mode (Optional Theme)
- **Background**: `#f5f5f7` (Soft Light Gray)
- **Primary Accent (Violet)**: `#7c3aed`
- **Secondary Accent (Emerald)**: `#059669`
- **Text Main**: `#0a0a0a`
- **Text Muted**: `#475569`
- **Card Background**: `rgba(255, 255, 255, 0.7)`
- **Borders & Dividers**: `rgba(0, 0, 0, 0.08)`

## 4. Visual Elements & Effects

### Backgrounds
- **Grid Pattern**: A subtle 50x50px grid overlay to give a blueprint/tech vibe.
  ```css
  background-image: 
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 50px 50px;
  ```
- **Aura Blobs**: Large (`800x800px`), heavily blurred (`blur(100px)`), low-opacity radial gradients (usually in Violet or Emerald) placed behind sections to add atmospheric lighting.

### Glassmorphism & Bento Cards
- **`.bento-card` Class**: 
  - Background: `rgba(255, 255, 255, 0.02)`
  - Border: `1px solid rgba(255, 255, 255, 0.08)`
  - Border Radius: `24px` (Very rounded)
  - Backdrop Filter: `blur(12px)`
  - Hover State: Border turns to Accent (`#8b5cf6`), translates up slightly (`-translate-y-1` or `-4px`), and gains a soft shadow.

### Custom Cursor & Scrollbar
- **Cursor**: 12x12px white circle with `mix-blend-mode: difference`, lagging slightly behind the actual mouse.
- **Scrollbar**: 6px wide, dark track, slightly lighter thumb that turns Violet on hover.

## 5. UI Components

### Badges / Skill Tags
- Small pill-shaped containers.
- **Classes**: `px-4 py-2 border rounded-full text-[10px] font-mono uppercase tracking-widest text-muted border-white/10`.
- **Hover**: Border becomes Accent, text becomes white.

### Buttons / CTAs
- Pill-shaped (`rounded-full`), highly prominent.
- Primary CTA: Solid white background with black text (`bg-white text-black`).
- Secondary CTA: Glassmorphism bento styling (`bento-card text-white`).
- Typography: Uppercase, `text-xs`, wide tracking (`tracking-[0.2em]`), `font-black`.
- Animation: Hover causes `-translate-y-1` and intense colored drop shadows.

### Tech Headers / Breadcrumbs
- Instead of standard titles, use tech-themed paths:
- Example: `<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest">/ Core_Node</span>`

### Status Indicators
- Pulsing green dots to indicate "System Online" or "Available".
- `<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>`

## 6. Layout & Spacing
- **Container**: Max width of `7xl` (`max-w-7xl mx-auto px-4`).
- **Section Padding**: Huge vertical padding between sections (`py-24` or `py-32`) to let the design breathe.
- **Bento Grid**: Utilize CSS Grid (`grid-cols-1 md:grid-cols-12`) for complex, asymmetric card layouts where some span 8 columns and others span 4.

## 7. Animations (GSAP / Tailwind)
- **Reveal On Scroll**: Elements shouldn't just be there; they should slide in (from bottom, left, or right) and fade in slightly as the user scrolls down.
- **Typewriter Effect**: Used on hero sections for dynamic role descriptions.
- **Micro-interactions**: Everything interactive should have a `transition-all duration-300` or `500`. Hovering over cards should zoom images inside (`group-hover:scale-105`), remove grayscale (`grayscale-0`), and fade in overlays.

## Implementation Checklist for New Projects
1. Copy `tailwind.config.js` theme extensions (Colors: accent, emerald. Fonts: Inter, JetBrains Mono).
2. Set up base `index.css` with CSS variables for Dark/Light mode and the background grid.
3. Build the core `.bento-card` component.
4. Implement the Custom Cursor and Aura Blob backgrounds.
5. Create reusable generic components: `<SkillTag>`, `<TechHeader>`, `<BentoBox>`.
