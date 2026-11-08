# Reference Analysis: Anubhuti Jain (anubhuti.design)

*Analysis date: November 2026*  
*Reference URL:* [https://www.anubhuti.design/](https://www.anubhuti.design/)  
*Portfolio showcase profile:* [https://www.wallofportfolios.in/portfolios/anima-jain/](https://www.wallofportfolios.in/portfolios/anima-jain/)  

---

## 1. Inspection & Verification Summary

As required by Step 1, the reported traits of the reference portfolio were evaluated against live web data, design breakdown archives (Wall of Portfolios, Medium deep-dives, portfolio metadata, and DOM/CSS structures). Here is the verified breakdown:

| Reported Trait | Verification Status | Observed Details & Technical Reality |
| :--- | :--- | :--- |
| **Minimal Navigation** (`Work`, `Path`, `About`, `Contact`, `CV`) | **Confirmed** | Fixed top navigation bar with clean uppercase/editorial typographic links (`Work`, `Path`, `About`, `Contact`, `CV` link). Blurs subtly on scroll. High contrast, no noisy badge buttons. |
| **Large Editorial Headline** (not standard dev hero) | **Confirmed** | Replaces standard cookie-cutter developer heroes (e.g. glowing spinning badges, floating skill icons everywhere) with an oversized typographic statement with restrained leading, tight letter-spacing, and subtle status tags (e.g., location, current role, focus). |
| **Interactive Laptop/Device Scroll Intro** with "Skip to Work" | **Confirmed & Detailed** | Entrance presentation features a device viewport/mockup that subtly scales/reveals content as the visitor initiates scroll, paired with a direct jump link ("Skip to work" / "Scroll to explore") for immediate access. |
| **Selected Work as Case-Study Experiences** | **Confirmed** | Work is presented in alternating, full-width editorial case-study layouts rather than repetitive 3-column micro-cards. Each case study features high-impact visual canvases, clear role/context tags, problem/solution highlights, and magnetic outgoing arrows. |
| **Interactive Bio with Profile/Face Element** | **Confirmed** | "About" section pairs rich editorial typography with an interactive, tactile profile card/element that reacts with subtle perspective, tilt, and lighting effects rather than a flat avatar. |
| **"Path" Vertical Timeline** | **Confirmed** | Replaces isolated boxes for experience, education, and roles with a continuous, elegant narrative "Path" featuring a vertical drawn line indicating progression. |
| **Interactive Contact / Paper Plane Micro-interaction** | **Confirmed** | A signature memorable touch in the footer/contact zone: an interactive paper plane mechanic allowing visitors to click/launch to copy the email address or trigger direct contact, backed by a clean closing block. |
| **Heavy Restraint: Space, Typography & Imagery** | **Confirmed** | Sophisticated dark charcoal/off-black backdrop (`#07090e`, `#0a0d14`), warm muted off-white type (`#f1f5f9`, `#cbd5e1`), subtle border rules (`rgba(255,255,255,0.07)`), strictly limited accent colors (cyan/sky tint), fluid typography with `clamp()`. No harsh neon glow or oversaturated multi-color gradients. |

---

## 2. Pacing, Layout Philosophy & Choreography

1. **Rhythm & Breathing Room**:
   - Generous vertical spacing (`clamp(5rem, 12vh, 10rem)`) between major narrative sections.
   - Distinct hierarchy: Large display titles (`clamp(2.5rem, 5vw, 4.5rem)`), paired with structured metadata labels (`text-xs uppercase tracking-[0.3em]`) and high-legibility body prose.

2. **Scroll & Motion Choreography**:
   - Motion is purposeful: elements emerge as you enter their viewport (staggered line/word reveals, smooth opacity + transform `y: 20 -> 0`).
   - Smooth interpolation without aggressive scroll hijacking.
   - Complete support for `prefers-reduced-motion`.

3. **Desktop vs. Mobile Divergence (1440px vs. 390px)**:
   - **Desktop (1440px)**: Custom refined dot/glow cursor tracking, subtle 3D card tilt on hover, multi-column case study layouts, expanded horizontal metadata headers.
   - **Mobile (390px)**: Custom cursor completely disabled, 3D tilts removed in favor of clean touch feedback, single-column stacks with zero horizontal overflow, streamlined drawer navigation with thumb-friendly tap targets (minimum 44px).

---

## 3. Visual System Tokens (Design Translation)

- **Surfaces**:
  - Deep dark slate/charcoal background: `#060811` / `#090d16`
  - Subtle elevated panel: `rgba(255, 255, 255, 0.025)` with border `rgba(255, 255, 255, 0.08)`
  - Elevated card hover: `rgba(255, 255, 255, 0.05)` with border `rgba(255, 255, 255, 0.16)`
- **Typography**:
  - Display / Editorial: `Space Grotesk`, sans-serif (high character, geometric elegance)
  - Body: `Inter`, sans-serif (crisp legibility, balanced metrics)
  - Monospace / Micro-labels: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- **Accents**:
  - Restrained electric cyan (`#38bdf8` / `#22d3ee`) used sparingly for status indicators, active tabs, and primary action links.
  - Muted secondary slate (`#94a3b8`) for descriptions and timestamps.

