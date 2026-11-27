# Aurelia Global Academy

A responsive school showcase built with React, Vite, TypeScript, Tailwind CSS, locally maintained Shadcn-style Radix UI components, Framer Motion, Lucide, and React Three Fiber/Drei.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Tailwind generates `public/tailwind.css` directly from utility classes. There are no authored CSS stylesheets, custom CSS selectors, or React inline style attributes. Framer Motion and Radix may generate runtime styles for their internal behavior.

## Included interactions

- Accessible mobile navigation sheet and a two-step admission dialog.
- Academic tabs, department filters, campus category filters, and a navigable gallery lightbox.
- Curriculum fee tabs and scholarship accordions.
- Validated inquiry forms with local browser persistence and downloadable inquiry records.
- Parent story rotation and a downloadable text prospectus.
- Lazily loaded interactive 3D astrolabe, with a static fallback on mobile, for reduced-motion users, and after rendering errors.
- Keyboard focus treatment and a skip link.

## Content and launch

This is a fictional school concept. Profiles, statistics, parent stories, fees, and address details are illustrative. Accreditation identifiers must be verified and replaced before an institutional launch. University names illustrate counselling destinations; no placements or partnerships are claimed. Photos are illustrative Unsplash images downloaded into `public/images`; fonts use Google Fonts and require network access.

Forms save personal information in `localStorage` under `aurelia-inquiries` on the current browser only. No data is sent and no visit is booked. Clearing site data removes these records. Connect a real admissions service, replace the reserved `.example` email address, and provide verified phone and social links for production use.

Run `npm run check:browser` with the dev server running and Google Chrome installed to check 375px, 768px, and 1440px layouts and the key interaction flows. Screenshots are saved in the ignored `artifacts` directory.

The dependency audit reports a picomatch ReDoS advisory in development tooling. The registry's latest picomatch version at verification was still affected; production output is a static site and contains no build server. A compatible patched toolchain should be adopted when available.
