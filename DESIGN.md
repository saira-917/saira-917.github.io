---
name: Luminous Engineering
colors:
  surface: '#fff8f8'
  surface-dim: '#e9d5d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f2'
  surface-container: '#fee9ed'
  surface-container-high: '#f8e3e7'
  surface-container-highest: '#f2dde1'
  on-surface: '#24191c'
  on-surface-variant: '#54433a'
  inverse-surface: '#3a2d30'
  inverse-on-surface: '#ffecef'
  outline: '#877369'
  outline-variant: '#dac2b6'
  surface-tint: '#934b19'
  primary: '#6c2f00'
  on-primary: '#ffffff'
  primary-container: '#8b4513'
  on-primary-container: '#ffc29f'
  inverse-primary: '#ffb68c'
  secondary: '#7b5455'
  on-secondary: '#ffffff'
  secondary-container: '#fecbcb'
  on-secondary-container: '#7a5354'
  tertiary: '#523d1e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b5433'
  on-tertiary-container: '#e9caa0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68c'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#753401'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ecbaba'
  on-secondary-fixed: '#2f1314'
  on-secondary-fixed-variant: '#613d3e'
  tertiary-fixed: '#feddb3'
  tertiary-fixed-dim: '#e1c299'
  on-tertiary-fixed: '#281801'
  on-tertiary-fixed-variant: '#584324'
  background: '#fff8f8'
  on-background: '#24191c'
  surface-variant: '#f2dde1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is built upon a "Clean Girl" aesthetic—a fusion of high-end editorial beauty and structured engineering precision. It targets a demographic that values both technical rigor and sophisticated self-expression. The visual narrative is airy, intentional, and calm, evoking a sense of organized luxury.

The style is **Soft Minimalism**. It prioritizes high-quality typography and generous whitespace to reduce cognitive load. While the palette is inspired by skincare aesthetics, the execution remains professional and functional, utilizing subtle tactile cues like soft shadows and refined borders to ensure the interface feels "tangible" yet lightweight.

## Colors

The palette is a sophisticated blend of "Skincare Pinks" and "Earthly Grounds." 

- **Primary (#8B4513):** A deep Espresso brown used for high-contrast text, primary actions, and critical branding elements. It provides the "engineering" weight to the design.
- **Secondary (#F4C2C2):** A soft, healthy Rose used for accents, active states, and highlights.
- **Tertiary (#D2B48C):** A warm Taupe used for secondary buttons, decorative borders, and subtle categorization.
- **Neutral/Surface (#F9E4E8):** A pale Blush used for container backgrounds and soft UI fills.
- **Base Background (#FCF9F7):** A creamy white that prevents the clinical feel of pure #FFFFFF, adding warmth and approachability.

## Typography

The typography strategy pairs the editorial elegance of **Playfair Display** with the technical clarity of **Hanken Grotesk**.

- **Headlines:** Use Playfair Display for all major headings. It should be typeset with slightly tighter letter-spacing to maintain a "fashion masthead" feel.
- **Body:** Hanken Grotesk provides a modern, neutral canvas for long-form content, ensuring technical documentation or data remains highly readable.
- **Labels:** Use Hanken Grotesk with increased letter-spacing and occasionally uppercase for small metadata or button labels to create a refined, "branded" look.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with generous inner-container breathing room. 

- **The 8px Rule:** All spacing increments must be multiples of 8px.
- **Whitespace:** Emphasize "white space as a feature." Content blocks should be separated by at least 80px on desktop to maintain the airy feel.
- **Margins:** Desktop views should utilize wide 64px side margins to center-align content, creating a focused, editorial layout. Mobile views scale down to 20px margins.
- **Grids:** Use a 12-column grid for desktop and a 4-column grid for mobile. Elements should often span 6-8 columns to avoid overcrowding the horizontal plane.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows** rather than heavy borders.

- **The "Glow" Shadow:** Instead of traditional grey shadows, use low-opacity shadows tinted with the primary brown or secondary pink (e.g., `rgba(139, 69, 19, 0.04)`). These should be extremely diffused (20px - 40px blur) to make cards feel like they are floating on a cloud.
- **Surface Tiers:** 
  - Level 0: Creamy background (`#FCF9F7`).
  - Level 1: White surfaces (`#FFFFFF`) with a 1px border of `#F9E4E8`.
  - Level 2: Elevated elements with the "Glow" shadow for modals or active cards.
- **Refined Borders:** Borders should be hairline-thin (1px) and use the Tertiary Taupe at 20% opacity.

## Shapes

The shape language is consistently **Rounded**. Avoid sharp corners entirely to maintain the soft, approachable aesthetic.

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Containers & Cards:** Use `rounded-lg` (1rem) for most content blocks.
- **Images:** Photography or technical diagrams should feature `rounded-xl` (1.5rem) corners to soften the visual impact of technical content.

## Components

- **Buttons:** 
  - *Primary:* Solid Primary Brown with white text. No shadow, just a subtle scale effect on hover.
  - *Secondary:* Creamy White background with a Primary Brown border.
  - *Text:* All-caps Hanken Grotesk with 0.05em letter spacing.
- **Input Fields:** 
  - Use a subtle Taupe bottom border or a very light Pink fill (`#F9E4E8`) instead of a full bounding box to keep the "airy" feel. Label text should be small and uppercase.
- **Cards:** 
  - Pure white background, 1px soft border, and the signature "Glow" shadow. Internal padding should be generous (min 32px).
- **Chips/Labels:** 
  - Pill-shaped with a Secondary Pink background and deep Primary Brown text.
- **Lists:** 
  - Use generous vertical padding between list items (16px+). Separate items with a 1px Taupe line at 10% opacity.
- **Specialty Component (Technical Specs):** 
  - Data tables should be minimalist, removing all vertical grid lines and using the Serif font for row headers to maintain the luxury feel even when displaying technical engineering data.