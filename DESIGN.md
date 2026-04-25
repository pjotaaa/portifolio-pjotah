---
name: Technical Precision
colors:
  surface: '#121220'
  surface-dim: '#121220'
  surface-bright: '#383847'
  surface-container-lowest: '#0d0d1a'
  surface-container-low: '#1a1a28'
  surface-container: '#1e1e2c'
  surface-container-high: '#292937'
  surface-container-highest: '#343342'
  on-surface: '#e3e0f4'
  on-surface-variant: '#bacac2'
  inverse-surface: '#e3e0f4'
  inverse-on-surface: '#2f2f3e'
  outline: '#85948d'
  outline-variant: '#3b4a44'
  surface-tint: '#28dfb5'
  primary: '#46f1c5'
  on-primary: '#00382b'
  primary-container: '#00d4aa'
  on-primary-container: '#005643'
  inverse-primary: '#006b55'
  secondary: '#c8c5cd'
  on-secondary: '#303036'
  secondary-container: '#49484e'
  on-secondary-container: '#bab7be'
  tertiary: '#d8d5e4'
  on-tertiary: '#302f3b'
  tertiary-container: '#bcbac8'
  on-tertiary-container: '#4b4a56'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#55fcd0'
  primary-fixed-dim: '#28dfb5'
  on-primary-fixed: '#002118'
  on-primary-fixed-variant: '#00513f'
  secondary-fixed: '#e4e1e9'
  secondary-fixed-dim: '#c8c5cd'
  on-secondary-fixed: '#1b1b20'
  on-secondary-fixed-variant: '#47464c'
  tertiary-fixed: '#e4e1f0'
  tertiary-fixed-dim: '#c7c5d3'
  on-tertiary-fixed: '#1b1b25'
  on-tertiary-fixed-variant: '#464651'
  background: '#121220'
  on-background: '#e3e0f4'
  surface-variant: '#343342'
typography:
  h1:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1200px
---

## Brand & Style

This design system is built for the high-end developer portfolio, prioritizing technical clarity and a sophisticated "IDE-inspired" aesthetic. The brand personality is precise, expert, and minimal, evoking the feeling of a well-organized codebase or a premium development environment. 

The design style is **Minimalism** with a heavy influence from **Technical/Brutalist** structural cues. It rejects the softness of glassmorphism and the depth of gradients in favor of flat, high-contrast surfaces and razor-sharp accents. The emotional response should be one of competence and uncompromising quality, where every pixel serves a functional or structural purpose.

## Colors

The palette is strictly limited to maintain a focused, technical atmosphere. The background uses a deep, "off-black" to provide more depth than pure black, while the accent color—a vibrant teal—is used sparingly to draw the eye to critical actions and status indicators.

- **Background:** Primary canvas for all views.
- **Surface:** Used for cards and secondary layout containers.
- **Border:** Used for structural lines and subtle element separation.
- **Accent:** Reserved for high-priority interactions, active states, and decorative "sharp" accents.

## Typography

The typography strategy leverages three distinct typefaces to create clear hierarchical roles:

1.  **Headlines (Epilogue):** Bold and expressive, used for main titles and section headings. It provides the "editorial" feel of a high-end portfolio.
2.  **Body (Inter):** Highly legible and neutral. Used for descriptions, project details, and long-form content.
3.  **Technical Details (Space Grotesk):** A geometric monospace-adjacent font used for the logo, code snippets, metadata, and labels. It reinforces the developer-centric nature of the system.

Avoid italicizing text; instead, use weight and color (Secondary #888888) to indicate hierarchy.

## Layout & Spacing

The system utilizes a **Fixed Grid** model for desktop, centered on a 12-column layout with a maximum width of 1200px. The spacing rhythm is based on a 4px scale, ensuring all elements align to a technical grid.

Margins are generous (48px+) to allow the minimal elements room to breathe. Use 24px gutters for standard card layouts and 48px vertical gaps between major page sections. Alignment should be strictly left-aligned for all text content to mimic the structure of code editors.

## Elevation & Depth

This design system avoids traditional shadows entirely. Instead, depth is communicated through **Tonal Layers** and **Low-contrast outlines**.

- **Level 0 (Base):** #0a0a0f.
- **Level 1 (Cards/Surfaces):** #0e0e18.
- **Level 2 (Popovers/Modals):** #161622 with a 1px border of #1a1a28.

Interactive elements do not "lift" off the page; instead, they utilize color shifts or border weight changes to indicate focus or active states.

## Shapes

The shape language is strictly **Sharp (0)**. There are no rounded corners in the design system. This reinforces the "unrefined" yet precise technical aesthetic. All buttons, cards, input fields, and decorative tags must have 90-degree corners. 

Structural "accent bars" (2px wide) of the primary teal color can be applied to the left edge of cards or the bottom of active navigation links to provide visual interest without breaking the geometric rigor.

## Components

### Buttons
- **Primary:** Solid #00d4aa background with #0a0a0f bold text. Sharp corners.
- **Secondary:** Transparent background, 1px solid #1a1a28 border, white text.
- **Hover State:** Secondary buttons change border color to #00d4aa; primary buttons shift to a slightly darker teal.

### Cards
- **Construction:** Background #0e0e18, 1px solid border #1a1a28.
- **Feature:** For highlighted projects, add a 2px top-border in #00d4aa.

### Input Fields
- **Style:** Background #0a0a0f, 1px solid #1a1a28 border. Focus state: 1px solid #00d4aa.
- **Typography:** Labels use "label-caps" style; input text uses "code" style.

### Chips & Tags
- **Style:** Small, sharp-cornered boxes with #1a1a28 background and #888888 text. For "Active" or "Featured" tags, use #00d4aa text and border.

### Status Indicators
- Use a small (8px) solid square of #00d4aa next to text for "Available for hire" or "Active project" indicators.

### Additional Components
- **Code Block:** Surface #0e0e18 with a left-accent bar in #00d4aa.
- **Progress Bar:** A thin (4px) background track of #1a1a28 with a #00d4aa solid fill. No rounded ends.
