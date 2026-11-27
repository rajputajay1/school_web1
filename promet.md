You are a Principal Frontend Architect and Award-Winning UI/UX Designer. Build a world-class, ultra-premium, high-converting showcase website for a prestigious National & International K-12 School ("Aurelia Global Academy" — make all content, stats, and copy realistic, inspiring, and parent-focused).

CRITICAL RULES:
1. First, read and strictly follow every rule in `design.md`.
2. ZERO MANUAL CSS: Do NOT write any custom `.css` files, custom CSS classes, or inline `style` attributes. Use 100% Tailwind CSS utility classes and Shadcn UI components.
3. Tech Stack: React (Vite), TypeScript, Tailwind CSS, Shadcn UI, Lucide React icons, Framer Motion (`framer-motion`), and React Three Fiber (`@react-three/fiber` & `@react-three/drei`) for a subtle, high-FPS interactive 3D Hero centerpiece (an abstract floating golden-and-navy orbital globe/knowledge astrolabe that rotates smoothly and reacts to cursor hover, optimized for all viewports).
4. Fully Responsive: Must look flawless on mobile (375px), tablet (768px), and wide desktop (1440px+).

REQUIRED SECTIONS & EXTRA HIGH-IMPACT SECTIONS FOR PARENTS & STUDENTS:
1. **Top Announcement Bar & Glassmorphic Header:**
   - Top slim bar: "Admissions Open for Academic Session 2026–27 | National (CBSE) & International (IB / Cambridge) Tracks" + Quick Brochure Download button.
   - Sticky Navbar: School Crest/Logo, links (Home, About, Academics, Faculty, Campus Gallery, Fee Structure, Admissions), and a high-contrast "Apply Now" button that opens an interactive Admission Inquiry Modal (Shadcn `Dialog`). Mobile menu using Shadcn `Sheet`.

2. **Hero Section (Parent Trust + Student "Wow" Factor):**
   - Split asymmetric layout: Left side with prestige badge ("Accredited IB World & CBSE Institution"), bold `Plus Jakarta Sans` headline, compelling subtext highlighting holistic global education, dual CTAs ("Book a Campus Tour" & "Explore Programs"), and live trust metrics (e.g., `15:1 Student-Faculty Ratio`, `100% University Placement`, `25+ Acre Smart Campus`).
   - Right side: Interactive 3D Canvas (`@react-three/fiber`) rendering a sleek, modern 3D geometric globe/orbital astrolabe with floating glassmorphic achievement badges ("STEM & Robotics Lab", "Global Exchange Program") animated with Framer Motion.

3. **About Us & Principal's Vision (Why Parents Choose Us):**
   - Bento-grid layout showcasing school heritage, National + International curriculum advantage, safety & smart-campus infrastructure, and an editorial quote card from the Principal using `Playfair Display` italic typography.

4. **Classes & Academic Pathways (Interactive Shadcn Tabs):**
   - Tabs for: `Early Years (Nursery - Grade 2)`, `Primary Wing (Grades 3 - 5)`, `Middle School (Grades 6 - 8)`, and `Senior Secondary (Grades 9 - 12: CBSE & IB)`.
   - Each tab displays age group, core subjects, experiential learning highlights (AI/Coding, Robotics, Performing Arts, Sports), and key developmental outcomes.

5. **World-Class Faculty Showcase:**
   - Interactive cards with hover lift/tilt animations showing senior educators, their qualifications (e.g., M.Sc., B.Ed., Cambridge Certified), years of experience, and subject expertise, plus a department filter (`All`, `STEM`, `Humanities`, `Languages & Arts`).

6. **Interactive Campus & Student Life Gallery:**
   - Category filter tabs (`All`, `Smart Classrooms`, `Robotics & Labs`, `Sports Arena`, `Arts & Events`) with a responsive masonry/bento grid and click-to-open Lightbox preview (Shadcn `Dialog`).

7. **Transparent Fee Structure & Scholarships:**
   - Toggle between **National Curriculum (CBSE)** and **International Curriculum (IB / Cambridge)** using Shadcn `Tabs`.
   - Clean, parent-friendly fee breakdown table (Admission Fee, Tuition Fee per Term, Lab & Activity Fee) with clear inclusions, plus a Shadcn `Accordion` for Merit Scholarships, Sibling Discounts, and Transport/Hostel FAQs.

8. **Admissions Process & Interactive Inquiry Section:**
   - Visual 4-step horizontal timeline (`1. Online Inquiry` → `2. Campus Visit & Interaction` → `3. Student Readiness Assessment` → `4. Enrollment & Welcome`) paired with a clean, validated Admission & Campus Visit Booking Form.

9. **Parent Testimonials & Global University Placements (Extra Trust Booster):**
   - Sleek carousel/grid of verified parent reviews and logos/badges of top national & international universities where alumni have been placed.

10. **Comprehensive Institutional Footer:**
    - School crest, mission statement, quick navigation links, CBSE & IB affiliation numbers, campus address, admissions helpline, working hours, and social links.

EXECUTION INSTRUCTIONS:
- Structure the project cleanly into modular components (`src/components/Navbar.tsx`, `Hero.tsx`, `Hero3D.tsx`, `About.tsx`, `Academics.tsx`, `Faculty.tsx`, `Gallery.tsx`, `FeeStructure.tsx`, `Admissions.tsx`, `Testimonials.tsx`, `Footer.tsx`, `AdmissionModal.tsx`).
- Populate all sections with rich, authentic, realistic data—no "Lorem Ipsum" anywhere.
- Ensure smooth Framer Motion scroll animations and crisp typography throughout. Start by setting up the fonts, Shadcn components, and building the complete application.

