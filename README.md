# Premium Property Website

A premium, luxury real estate website built with Next.js, Tailwind CSS, and shadcn/ui components. This website showcases high-end properties with elegant design, smooth animations, and a modern user experience.

## Features

- 🏠 **Modern Design**: Clean, premium aesthetic with neutral color palette
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations**: Subtle Framer Motion animations throughout
- 🎨 **Custom UI Components**: Built with shadcn/ui and Tailwind CSS
- 🗺️ **Interactive Maps**: Google Maps integration for location display
- 📋 **Contact Forms**: Professional contact and registration forms
- 🖼️ **Image Gallery**: Responsive image grid with lightbox functionality

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── AboutSection.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Location.tsx
│   ├── Navbar.tsx
│   ├── PaymentPlan.tsx
│   ├── QuickNavigation.tsx
│   ├── RegisterInterest.tsx
│   └── Residences.tsx
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Key Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Sticky header on scroll
- Active link highlighting
- Smooth transitions

### Hero Section
- Full-screen hero with background image
- Call-to-action buttons
- Quick navigation links
- Scroll indicator

### Payment Plan
- Three property type cards (1 Bedroom, 2 Bedroom, Penthouse)
- Payment breakdown display
- Hover animations

### Gallery
- Responsive image grid
- Lightbox functionality
- Smooth hover effects

### Contact Page
- Contact form with validation
- Contact information cards
- Embedded Google Maps

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `beige`: Neutral beige tones
- `charcoal`: Dark gray/charcoal tones
- `gold`: Accent gold colors

### Content
Update content in component files:
- `components/Hero.tsx` - Hero section content
- `components/AboutSection.tsx` - About section text
- `components/PaymentPlan.tsx` - Property types and payment plans

### Images
Replace placeholder images with your own:
- Update image URLs in `components/Gallery.tsx`
- Update hero background in `components/Hero.tsx`
- Update residence images in `components/Residences.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.
