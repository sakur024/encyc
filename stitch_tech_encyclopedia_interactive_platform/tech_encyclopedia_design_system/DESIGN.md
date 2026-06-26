---
name: Tech Encyclopedia Design System
colors:
  surface: '#0c1321'
  surface-dim: '#0c1321'
  surface-bright: '#323949'
  surface-container-lowest: '#070e1c'
  surface-container-low: '#151b2a'
  surface-container: '#19202e'
  surface-container-high: '#232a39'
  surface-container-highest: '#2e3544'
  on-surface: '#dce2f6'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dce2f6'
  inverse-on-surface: '#2a3040'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#b76dff'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0c1321'
  on-background: '#dce2f6'
  surface-variant: '#2e3544'
typography:
  hero-title:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  hero-title-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  section-heading:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  section-heading-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  subheading:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a premium academic experience focused on technical depth and clarity. It balances the authority of a traditional encyclopedia with the sleek, high-precision aesthetic of modern developer tools. The target audience includes researchers, engineers, and students who require a distraction-free, "deep work" environment.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes information density and legibility through a disciplined dark-mode hierarchy. By utilizing structured surfaces rather than decorative gradients, the system evokes a sense of reliability and intellectual rigor. The emotional response is one of calm focus, high utility, and institutional trust.

## Colors

This system utilizes a layered dark-theme palette to establish visual depth without relying on heavy shadows. The background (`#0B1220`) provides a deep, ink-like foundation that reduces eye strain during long reading sessions.

**Color Application:**
- **Primary Brand (#6366F1):** Reserved for primary navigation, active states, and high-level knowledge markers.
- **Secondary Brand (#22D3EE):** Used for interactive triggers, data highlights, and technological concepts.
- **Accent (#A855F7):** Signifies advanced learning paths or specialized expert insights.
- **Surface Hierarchy:** Move from the background to `surface-card` for primary content, and use `surface-elevated` for modals or floating panels.

## Typography

The typography uses **Inter** to ensure maximum legibility across dense technical text. The scale is designed to create a clear editorial hierarchy, reminiscent of a high-end academic journal.

- **Hero Titles:** Use tight tracking (-0.02em) to maintain a modern, authoritative feel.
- **Body Text:** Set at 18px with a generous 1.6 line height to facilitate long-form reading and improve comprehension of complex topics.
- **Labels:** Use uppercase with slight letter spacing for category tags and metadata to distinguish them from prose.

## Layout & Spacing

This system operates on a strict **8pt spacing system** to maintain mathematical harmony and alignment across all components.

- **Grid Model:** A 12-column fluid grid is used for desktop (1280px max-width), transitioning to 8 columns for tablets and 4 columns for mobile.
- **Vertical Rhythm:** Paragraphs and sections should follow the 8pt increments (e.g., 32px or 48px margins between major sections).
- **Safe Margins:** Mobile devices use a minimum 16px side margin, while desktop uses 24px or larger to create breathable "whitespace" that aids focus.

## Elevation & Depth

In this design system, depth is primarily conveyed through **Tonal Layering** supplemented by subtle ambient shadows. 

1. **Base:** The background (`#0B1220`) is the lowest level.
2. **Cards:** Primary content sits on `surface-card` (`#111827`). These feature a 1px border using `surface-secondary` to provide definition without high contrast.
3. **Elevated:** Modals and tooltips use `surface-elevated` (`#182233`) and an ambient shadow: `0px 10px 30px rgba(0, 0, 0, 0.5)`.
4. **Interaction:** Hover states on interactive cards should subtly lighten the background or increase the border opacity, rather than significantly shifting the Y-axis elevation.

## Shapes

The shape language is sophisticated and controlled. A standard **16px radius (rounded-lg)** is applied to all primary cards and panels to soften the technical aesthetic and make the interface feel more approachable.

- **Small Components:** Buttons and input fields use a 8px (base roundedness) radius for a more precise, functional appearance.
- **Contextual Elements:** Tags and badges use a fully rounded (pill-shaped) radius to contrast against structural content blocks.

## Components

### Definition Boxes
Used for technical terminology. Styled with `surface-card` and a vertical 4px accent bar of `Secondary Brand` (#22D3EE) on the left edge. The title is `label-sm` in the accent color.

### Tip Boxes
Informational asides. Use a subtle `Info` (#38BDF8) background tint at 10% opacity with a solid 1px border of the same color. 

### Expert Advice
Highlighted insights. Uses `surface-elevated` with an `Accent` (#A855F7) top border. Include a small circular avatar slot for the expert's profile.

### 'Did You Know' Sections
Engaging facts. These cards utilize a `Primary Brand` (#6366F1) ghost border and the `secondary-text` color for body copy to differentiate from the main article flow.

### Buttons & Inputs
- **Primary Button:** Solid `Primary Brand` fill with white text. 8px radius.
- **Secondary Button:** Outlined with `surface-secondary`, 1px stroke. 
- **Inputs:** `surface-secondary` fill with a 1px border that glows `Secondary Brand` upon focus. Use `text-muted` for placeholders.

### Lists
Unordered lists in academic text should use custom square bullets in `Primary Brand` to maintain the technical, structured theme.