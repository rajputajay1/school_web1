
Ajay Rajput <rajputajaykumar893@gmail.com>
10:28 PM (0 minutes ago)
to me

# Design System & Architecture: International K-12 School Showcase

## 1. Brand Aesthetic & Philosophy
- **Vibe:** Prestigious, modern international academy (inspired by IB World Schools & top Swiss/Nordic educational institutions). Trustworthy for parents, inspiring and interactive for students.
- **Core Rule:** **NO MANUAL CSS FILES** (no custom `.css` stylesheets, no `@keyframes` overrides, no inline `style={{}}` hacks). Every single layout, spacing, color, shadow, and responsive rule must be built strictly using **Tailwind CSS utility classes** and **Shadcn UI components**.

## 2. Color Palette (Semantic Tokens)
- **Primary Canvas (Background):** `#FAFAF9` (Warm Alabaster / Stone-50 — soft on eyes, editorial feel)
- **Elevated Surface (Cards/Modals):** `#FFFFFF` with subtle `border-stone-200/80` and `shadow-sm`
- **Primary Brand Color (Trust & Heritage):** `#0F172A` (Deep Oxford Navy / Slate-900)
- **Secondary Accent (Prestige & Excellence):** `#D97706` (Warm Academic Gold / Amber-600)
- **Interactive / Youthful Accent (Student Energy):** `#0D9488` (Modern Teal / Teal-600)
- **Text Hierarchy:**
  - Headings: `text-slate-900`
  - Body Copy: `text-slate-600`
  - Muted Captions: `text-slate-400`

## 3. Typography System
Load via Google Fonts in `index.html` and map to Tailwind's `font-sans` and `font-serif`:
- **Display & Headings:** `Plus Jakarta Sans` (Weights: 600, 700, 800) — tight tracking (`tracking-tight`), commanding, modern international look.
- **Editorial Accents / Quotes / Principal's Note:** `Playfair Display` (Italic, 600) — adds heritage and academic prestige.
- **Body & UI Controls:** `Inter` (Weights: 400, 500, 600) — ultra-clean readability for fee structures, admission steps, and faculty bios.

## 4. Layout & Grid Architecture
- **Container Standard:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing:** Generous vertical breathing room (`py-20 md:py-28`).
- **Bento Grid System:** Used for Campus Highlights, Academic Streams, and Student Life (`grid-cols-1 md:grid-cols-12 gap-6`).
- **Responsive Breakpoints:** Mobile-first approach. Every grid, table, navbar, and 3D/interactive element must seamlessly adapt from `375px` (mobile) to `768px` (tablet) to `1440px+` (desktop).

## 5. Animation & 3D Interactive Standards
- **Motion Library:** `framer-motion` (exclusively via Tailwind-styled `<motion.div>` wrappers).
  - Smooth scroll-triggered reveals (`viewport={{ once: true, amount: 0.2 }}`).
  - Staggered card entrances (`staggerChildren: 0.1`).
  - Tactile micro-interactions on buttons and cards (`whileHover={{ y: -4 }}`).
- **3D / Interactive Elements (Student Delight):**
  - Use **Spline (`@splinetool/react-spline`)** OR **React Three Fiber (`@react-three/fiber` + `@react-three/drei`)** for a lightweight, interactive 3D centerpiece in the Hero section (e.g., a floating 3D stylized globe, geometric knowledge prism, or interactive campus landmark) that responds subtly to mouse movement, with a clean fallback for low-power mobile devices.
  - Interactive 3D tilt effect on Campus & Faculty cards using Framer Motion `useMotionValue` and `useTransform`.

## 6. Component & UI Rules (Shadcn UI)
- **Navigation:** Sticky glassmorphic header (`backdrop-blur-md bg-white/80 border-b border-slate-200/60`) with mobile `Sheet` drawer.
- **Admissions Modal / Drawer:** Triggered from any "Apply Now" CTA using Shadcn `Dialog` with multi-step interactive inquiry form.
- **Academics & Classes:** Shadcn `Tabs` to switch cleanly between *Early Years (Pre-K–2)*, *Primary (3–5)*, *Middle School (6–8)*, and *Senior Secondary / IB Diploma (9–12)*.
- **Fee Structure:** Shadcn `Tabs` (National CBSE/ICSE vs. International IB/Cambridge track) + clean responsive `Table` and `Accordion` for transparent fee breakdowns and scholarship FAQs.
- **Gallery:** Filterable category pills (`Campus`, `Science & Robotics`, `Sports`, `Arts & Culture`) + Shadcn `Dialog` lightbox preview.



