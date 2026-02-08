# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

This is a React.js application built with Vite and styled with TailwindCSS.

**Development:**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

**Linting:**
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run tsc          # Run TypeScript compiler check
```

**Dependencies:**
```bash
npm i               # Install dependencies
```

## Architecture Overview

This is a single-page React application for Noori Qudsi Academy - a mosque/academy website.

**Tech Stack:**
- React 18 with JSX
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- React Router DOM for routing (though primarily single-page)
- TypeScript support with ESLint

**Project Structure:**
- `src/main.jsx` - Application entry point
- `src/App.jsx` - Main app component with router and layout
- `src/components/` - All React components organized by feature:
  - `Home/` - Homepage components (PrayerTime, Announcement, Address)
  - `About/` - About section
  - `Donate/` - Donation components and loan info
  - `Events/` - Events display
  - `Footer/` - Site footer
  - `Navbar.jsx` - Navigation component
- `src/constants/` - Prayer times and Iqama data
- `src/utils/` - Motion/animation utilities
- `src/hooks/` - Custom React hooks
- `src/styles.js` - Centralized Tailwind class definitions

**Application Flow:**
The app renders as a single scrollable page with sections for Home, About, Donate, and Events. The navbar has a "Donate" button that smoothly scrolls to the donation section using refs and scrollIntoView.

**Key Features:**
- Prayer time display with dynamic data
- Donation section with loan information
- Responsive design with Tailwind breakpoints
- Smooth scrolling navigation
- Event announcements

**Styling Patterns:**
- Uses a centralized `styles.js` file for consistent Tailwind classes
- Responsive design with `sm:`, `md:`, `lg:` breakpoints
- Green and yellow color scheme matching Islamic/academy branding
- Custom typography scales defined in styles object

**Data Management:**
- Prayer times stored in `src/constants/PrayerTime.js`
- Iqama times in `src/constants/iqama.js` 
- No external API calls or state management library - uses local state and constants