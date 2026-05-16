# Handoff: Water Woman Wellness — Homepage

## Overview
This is the approved homepage design for **Water Woman Wellness**, a therapeutic aqua yoga service targeting women navigating chronic pain, menopause, and healthy aging. The business offers both group classes (to facilities) and private one-on-one sessions.

The target implementation framework is **Astro**, with clean semantic HTML and scoped CSS. This is a **high-fidelity** design — colours, typography, spacing and copy are all final. Implement pixel-faithfully using Astro components and native CSS (no Tailwind required, but can be adapted).

---

## About the Design Files
The files in this bundle are **design references created as HTML prototypes** — they are not production code. They use React/JSX compiled in-browser (Babel standalone), which is a prototyping convenience, not a target architecture.

Your task is to **recreate these designs in Astro** using clean `.astro` components and standard CSS. The `Variation D Preview.html` file is your visual reference. Open it in a browser alongside this README.

---

## Design System

### Color Tokens
```css
--color-deep-teal:   #064653;
--color-teal-dark:   #003D4A;
--color-aqua:        #62C7C7;
--color-aqua-light:  #6FCFD0;
--color-pale-aqua:   #BCE7E4;
--color-gold:        #B8962E;
--color-ivory:       #F7F2EC;
--color-ivory-alt:   #FAF6F1;
--color-sand:        #D8C7B4;
--color-white:       #FFFFFF;
--color-body:        #3A5058;
--color-body-light:  #6A7E84;
```

### Typography

#### Heading Font — Futura Now Headline
- Used for: all headings, nav links, section labels, CTA buttons
- Files in `fonts/` folder (`.ttf` — convert to `.woff2` for production)
- Weights used: 600 (semibold), 700 (bold)
- Fallback stack: `"Jost", sans-serif`

#### Body Font — Open Sans
- Used for: all body copy, credentials, paragraph text
- Load via Google Fonts: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600`
- Default size: 16px, line-height: 1.7

#### Signature Font — Dancing Script
- Used for: founder signature only ("Sushi Chanrai")
- Load via Google Fonts: `https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700`
- Size: 38px, weight: 700

#### Typography Scale
| Role | Font | Size | Weight | Color |
|---|---|---|---|---|
| Hero headline | Futura Now Headline | 60px | 700 | #FFFFFF |
| Hero supporting | Futura Now Headline | 22px | 400 | #BCE7E4 |
| Section heading | Futura Now Headline | 36px | 600 | #064653 |
| Section label (eyebrow) | Futura Now Headline | 12px | 500 | #62C7C7 |
| Card heading | Futura Now Headline | 24px | 600 | #064653 |
| Pull quote | Open Sans | 20px | 400 italic | #064653 |
| Body (large) | Open Sans | 18px | 400 | #3A5058 |
| Body (default) | Open Sans | 16px | 400 | #3A5058 |
| Body (small) | Open Sans | 15px | 400 | #6A7E84 |
| Caption / meta | Open Sans | 13–14px | 400 | #6A7E84 |
| Signature | Dancing Script | 38px | 700 | #064653 |
| Nav links | Futura Now Headline | 14px | 600 | #064653 |
| CTA button | Futura Now Headline / Jost | 16px | 600 | #FFFFFF |

### Spacing
- Page horizontal padding: `80px` left/right on all sections
- Section vertical padding: `100px` top/bottom (standard), `80px` (FAQ, footer)
- Hero body section: `48px 80px 72px`
- Max content width: `1440px` (fixed-width design, not fluid)

### Border Radius
- Service cards: `12px`
- Founder portrait: `16px`
- Credentials card: `16px`
- Launch pill/lozenge: `100px` (fully rounded)
- CTA button: `0` (flat/square)

---

## Page Sections (top to bottom)

### 1. Navigation
- Background: `#FAF6F1` (ivory-alt)
- Border-bottom: `1px solid rgba(216,199,180,0.19)`
- Height: `105px`, padding `28px 80px`
- Left: Logo image (`assets/Logo.png`), height `96px`
- Right: Nav links — `Menopause`, `Seniors`
  - Font: Futura Now Headline, 14px, weight 600
  - Letter-spacing: `0.08em`, uppercase
  - Color: `#064653`
  - Displayed as flex row with `gap: 32px`

### 2. Hero
- Full-width photo: `assets/class-noodles.png`, height `600px`, `object-fit: cover`
- Gradient overlay (bottom fade): `linear-gradient(0deg, rgba(0,61,74,0.88) 0%, rgba(0,61,74,0) 100%)`
  - Positioned absolute, bottom-anchored, padding `140px 80px 52px`
- Headline: "Mindful water-based therapy for women ready to move with freedom again."
  - 60px, weight 700, white
- Supporting line: "Restore Strength. Move with Ease."
  - 22px, weight 400, `#BCE7E4`

### 3. Hero Body Copy
- Background: `#F7F2EC` (ivory)
- Padding: `48px 80px 72px`
- Two-column flex layout (`gap: 60px`):
  - **Left (flex: 1):**
    - Subheading paragraph: 18px, `#3A5058`, line-height 1.7
    - Location line: 16px, `#6A7E84`
    - Launch pill (see below)
  - **Right (flex: 0 0 auto):** Gold CTA button
- **Launch pill:**
  - Inline-flex, gap 8px, border-radius 100px
  - Background: `rgba(188,231,228,0.375)` (paleAqua at 60% opacity)
  - Border: `1px solid rgba(98,199,199,0.25)`
  - Padding: `6px 14px`
  - Font: Futura Now Headline, 13px, weight 600, letter-spacing 0.04em, `#064653`
  - Dot prefix: 6×6px circle, `#62C7C7`
  - Text: "Classes begin August 1st 2026."

### 4. Why Water
- Background: `rgba(188,231,228,0.25)` (paleAqua at ~25% opacity)
- Padding: `100px 120px`, centered content
- Eyebrow label: "Why Water", deep-teal
- Heading: "Movement without the weight of gravity" — 36px
- SVG wave line separator (see Wave Line component below)
- Intro paragraph: max-width 680px, centered
- Benefit list: 5 items, each a flex row (8px bullet dot + text)
  - Bullet: 8×8px circle, `#064653`, margin-top 8px
  - Bold part in `#064653`, body text in `#3A5058`
  - Max-width 720px, gap 20px between items

### 5. What I Offer (Services)
- Background: `#F7F2EC` (ivory)
- Padding: `100px 80px`
- Centered eyebrow + heading above
- Two equal-width cards side by side (`gap: 32px`):
  - Card: `border-radius: 12px`, `overflow: hidden`, `#FAF6F1` bg, `1px solid rgba(216,199,180,0.14)` border
  - Photo: `height: 300px`, `object-fit: cover`
  - Inner padding: `32px 32px 36px`
  - Card heading: 24px Futura Now Headline
  - Body paragraphs: 15px, `#6A7E84`, `margin-bottom: 10/24px`
  - CTA link: Futura Now Headline, 14px, weight 600, `#B8962E`, letter-spacing 0.04em
- **Card 1 — Group Classes:** Photo `assets/class-tree-pose.png`
- **Card 2 — One-on-One Sessions:** Photo `assets/aerial-watsu.png`

### 6. Full-Width Image Divider
- Photo: `assets/underwater-dance.jpg`
- Height: `480px`, `object-fit: cover`, `object-position: center 24%`
- No padding, full bleed

### 7. About Your Instructor
- Background: `#F7F2EC` (ivory)
- Padding: `100px 80px`
- Two-column flex layout (`gap: 60px`, `align-items: flex-start`):

  **Left column (`flex: 0 0 360px`):**
  - Portrait photo: `assets/sushi-portrait.jpg`
    - Height: `380px`, `border-radius: 16px`, `object-position: center bottom`
  - Credentials card (below photo, `margin-top: 28px`):
    - Background: `rgba(188,231,228,0.25)`, border: `1px solid rgba(98,199,199,0.14)`
    - Border-radius: `16px`, padding: `26px 28px`
    - **Certifications section:**
      - Eyebrow: "Certifications" — 11px, uppercase, letter-spacing 0.2em, `#62C7C7`, margin-bottom 14px
      - Each entry: credential name (14px, weight 600, `#064653`) + issuer (12px, `#6A7E84`) on two lines
      - Entries: "RYT-200 / Yoga Alliance" and "Aqua Yoga Certification / Yoga Alliance"
      - Gap between entries: 14px
    - **Specialization section** (separated by `1px solid rgba(98,199,199,0.14)`, padding-top 20px):
      - Eyebrow: "Specialization" — same style as above
      - Entry: "Therapeutic Yoga Training / Soma Yoga Institute"

  **Right column (`flex: 1`):**
  - Eyebrow: "About Your Instructor"
  - Heading: "Meet Sushi" — 36px, margin-bottom 28px
  - Pull quote block: left border `3px solid #62C7C7`, padding-left 24px, margin-bottom 28px
    - Text: "I know what it feels like when your body stops cooperating." — 20px italic, `#064653`
  - 4 story paragraphs (16px, `#6A7E84`, margin-bottom 16px each)
  - Turning point: "Getting back into the pool changed everything." — 18px, weight 600, `#064653`
  - 4 resolution paragraphs (16px, `#6A7E84`, margin-bottom 16px each)
  - Closing quote: italic, weight 600, `#064653`, margin-top 8px
  - Signature: "Sushi Chanrai" — Dancing Script, 38px, weight 700, `#064653`, margin-top 32px

### 8. FAQ
- Background: `#F7F2EC` (ivory)
- Padding: `80px 80px`
- Centered eyebrow label at top
- Two equal columns (`gap: 60px`):
  - **Left — "For Individuals"** (7 questions)
  - **Right — "For Facilities"** (5 questions)
  - Column heading: 18px Futura Now Headline, `#064653`, margin-bottom 16px
  - Each row: `border-bottom: 1px solid rgba(216,199,180,0.31)`, padding `18px 0`
  - Question text: 15px, weight 600, `#064653`
  - Expand icon: `+` or `−`, 18px, `#62C7C7`
  - First item of each column shown open with answer below (14px, `#6A7E84`)
  - Note: implement as interactive accordion in Astro

### 9. CTA Band
- Background: `rgba(188,231,228,0.25)`, padding `80px 80px`, centered
- Decorative wave SVG lines (positioned absolute, subtle opacity)
- Heading: "Ready to Move with Freedom Again?" — 36px, `#064653`
- Body: "Classes begin August 1st 2026. Express your interest and we'll be in touch."
- Gold CTA button (see below)

### 10. Footer
- Background: `#064653` (deep teal)
- Padding: `48px 80px 32px`
- **Top row** (space-between):
  - Left: brand mark + tagline lockup + location
    - Brand mark: `assets/Mark.png`, height `44px`, `filter: brightness(0) invert(1)` (white)
    - Tagline "Freedom in Movement" — 14px italic, white, in same flex row as mark (`gap: 14px`)
    - Location: 13px, `#6A7E84`, below lockup
  - Right: two link columns (Navigate | Connect), `gap: 60px`
    - Column headings: 12px Futura Now Headline, uppercase, `#62C7C7`, letter-spacing 0.2em
    - Links: 14px, `#BCE7E4`, margin-bottom 6px
    - Navigate: Menopause, Seniors
    - Connect: Instagram, Phone
- Horizontal rule: `1px solid rgba(98,199,199,0.15)`, margin `32px 0 20px`
- **Bottom row** (space-between):
  - Left: "© 2026 Water Woman Wellness. All rights reserved." — 12px, `#6A7E84`
  - Right: "A Chikitsa LLC brand" — 12px, `#6A7E84`

---

## Reusable Components

### Gold CTA Button
```html
<a class="cta-btn cta-btn--large" href="#">Make an Enquiry</a>
```
```css
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 36px;
  background-color: #B8962E;
  color: #FFFFFF;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0;
}
.cta-btn--large {
  padding: 18px 48px;
  font-size: 16px;
}
```

### Section Eyebrow Label
```html
<p class="section-label">Why Water</p>
```
```css
.section-label {
  font-family: 'Futura Now Headline', 'Jost', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #62C7C7;
  margin-bottom: 16px;
}
```

### Wave Line (SVG)
An SVG sine wave used as a decorative separator:
```html
<svg width="100" height="12" viewBox="0 0 100 12" fill="none">
  <path d="M0 6 C8 1.44,17 1.44,25 6 S42 10.56,50 6 S67 1.44,75 6 S92 10.56,100 6"
        stroke="#62C7C7" stroke-width="1.5"/>
</svg>
```

---

## Assets

| File | Usage |
|---|---|
| `assets/Logo.png` | Navigation bar |
| `assets/Mark.png` | Footer (white-filtered) |
| `assets/class-noodles.png` | Hero background |
| `assets/class-tree-pose.png` | Group Classes service card |
| `assets/aerial-watsu.png` | One-on-One Sessions service card |
| `assets/sushi-portrait.jpg` | About section founder portrait |
| `assets/underwater-dance.jpg` | Full-width divider image |
| `fonts/FuturaNowHeadline.ttf` + variants | Heading font (convert to woff2) |

---

## Fonts Setup (Astro)
```css
/* In your global CSS */
@font-face {
  font-family: 'Futura Now Headline';
  src: url('/fonts/FuturaNowHeadline.woff2') format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'Futura Now Headline';
  src: url('/fonts/FuturaNowHeadlineBold.woff2') format('woff2');
  font-weight: 700;
}
/* Add other weights as needed */
```
Google Fonts (add to `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet">
```

---

## Suggested Astro Component Structure
```
src/
  components/
    Nav.astro
    Hero.astro
    HeroBody.astro
    WhyWater.astro
    Services.astro
    ImageDivider.astro
    About.astro
    FAQ.astro          ← needs client-side interactivity (accordion)
    CTABand.astro
    Footer.astro
    ui/
      SectionLabel.astro
      CTAButton.astro
      WaveLine.astro
  pages/
    index.astro        ← composes all sections
  content/
    homepage.ts        ← all copy/content as typed data
  styles/
    global.css         ← design tokens as CSS custom properties
```

For the **FAQ accordion**, use `client:load` on an interactive island component (React, Svelte, or vanilla JS).

---

## Content / Copy
All final copy is documented in `components/www-shared.jsx` in the `CONTENT` object. Extract this into an Astro content collection or a typed TypeScript constants file — do not hardcode strings into components.

---

## Reference Files
- `Variation D Preview.html` — open in browser as your visual reference
- `components/www-shared.jsx` — all copy, color tokens, image paths
- `components/variation-d.jsx` — full layout/section code (reference only, not to be copied)
- `assets/` — all images
- `fonts/` — Futura Now Headline font files
