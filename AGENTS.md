# AGENTS.md - Portfolio Project Guidelines

This document provides comprehensive guidelines for agentic coding assistants working on this React portfolio website built with Vite and Tailwind CSS.

## Project Overview

This is a personal portfolio website template, built with:
- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.13
- React Router DOM 7.9.4
- React Icons 5.5.0
- ESLint 9.36.0

## Build, Lint & Test Commands

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint on all files
```

### Testing
**Note:** No test framework is currently configured. When adding tests:
- Install Vitest: `npm install -D vitest @testing-library/react @testing-library/jest-dom`
- Test files should be named `*.test.jsx` or `*.test.js`
- Run all tests: `npx vitest`
- Run single test: `npx vitest run path/to/test.file`
- Run tests in watch mode: `npx vitest --watch`
- Run tests with coverage: `npx vitest --coverage`

## Code Style Guidelines

### File Structure & Naming
- **Components**: PascalCase filenames (e.g., `Header.jsx`, `Typewriter.jsx`)
- **Pages**: PascalCase filenames in `src/pages/` (e.g., `Home.jsx`, `About.jsx`)
- **Utilities**: camelCase filenames (e.g., `constants.js`)
- **Icons**: PascalCase with descriptive prefix (e.g., `HeaderIconCode.jsx`)
- **Hooks**: camelCase filenames in `src/hooks/` (e.g., `useSequential.js`)
- **Styles**: `src/styles/index.css` for global styles
- **Constants**: `src/constants.js` for shared constants

### Component Structure
```jsx
import Component from "./Component";
import { externalLib } from "external-lib";
import { useState, useEffect } from "react";

export default function MyComponent({ prop1, prop2 }) {
  // State and hooks at top
  const [state, setState] = useState(initialValue);

  // Data constants next
  const data = [
    { key: "value" }
  ];

  // Helper functions
  const helperFunction = () => {
    // logic
  };

  // Effects after helpers
  useEffect(() => {
    // effect logic
  }, [dependencies]);

  // Event handlers
  const handleEvent = () => {
    // handler logic
  };

  return (
    // JSX with Tailwind classes
    <div className="tailwind-classes">
      {/* JSX structure */}
    </div>
  );
}
```

### Import Organization
```jsx
// 1. Local components and icons first
import HeaderIconCode from "./icons/HeaderIconCode";
import ButtonHamburger from "./ButtonHamburger";

// 2. Custom hooks
import { useSequential } from "../hooks/useSequential";

// 3. External libraries (React first)
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// 4. Constants and utilities last
import { TYPE_SPEED_TITLE } from "../constants";
```

### React Patterns

#### Hooks Usage
- Use functional components exclusively
- Prefer hooks over class components
- Group related hooks together at component top
- Use `useRef` for DOM references and mutable flags
- Custom hooks for complex logic (e.g., `useSequential`)

#### State Management
- Use `useState` for local component state
- Avoid prop drilling with context when needed
- Keep state as close to usage as possible
- Use refs for values that don't trigger re-renders

#### Event Handlers
```jsx
// Preferred: Arrow functions defined at component level
const handleClick = () => {
  setState(newValue);
};

// Avoid: Function declarations in JSX
<button onClick={function() { /* ... */ }}>Click</button>
```

### Styling with Tailwind CSS

#### Class Organization
- Use responsive prefixes: `md:`, `lg:`, `xl:`
- Group related classes logically (layout, then colors, then effects)
- Use template literals for dynamic classes:
```jsx
const getClassName = (condition) =>
  `base-classes ${condition ? "active-classes" : "inactive-classes"}`;
```

#### Card Hover Effects (Standard)
All cards with hover effects use this unified pattern:
```jsx
<div className="group bg-slate-800/70 backdrop-blur rounded-2xl p-6
  hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2
  border border-slate-700/50 hover:border-cyan-500/30 min-h-[250px] md:min-h-[280px] flex flex-col">
  {/* Content */}
  <div className="mt-6 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0
    rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
```

#### Common Patterns
- Background: `bg-slate-950` (dark theme), `bg-slate-800/70` (semi-transparent cards)
- Text: `text-slate-200` (light text), `text-cyan-400` (accent)
- Spacing: `p-6`, `m-4`, `space-x-4`, `gap-8`
- Layout: Flexbox (`flex`, `justify-center`) and Grid (`grid`, `md:grid-cols-3`)
- Effects: `transition-all duration-300`, `hover:shadow-2xl`, `backdrop-blur`

### JavaScript/TypeScript Conventions

#### Variables & Constants
- `const` for immutable values
- `let` only when reassignment is needed
- Constants in ALL_CAPS with descriptive names
- Array/object destructuring preferred

#### Functions
- Arrow functions for component methods and callbacks
- Named functions for complex logic
- Early returns for error conditions
- Async/await for asynchronous operations

#### Arrays & Objects
```jsx
// Preferred: Array of objects for data
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" }
];

// Map for rendering lists with proper keys
{navLinks.map(({ to, label }) => (
  <Link key={to} to={to}>{label}</Link>
))}
```

### Sequential Animation System

#### Overview
The portfolio uses a custom sequential animation system for typewriter effects:

#### SequentialProvider Component
```jsx
// Wraps pages to provide sequential execution context
<SequentialProvider>
  <PageContent />
</SequentialProvider>
```

#### useSequential Hook
```jsx
// Used by Typewriter components to register animations
const { register } = useSequential();

// Register animation start function
register(async () => {
  await animateText(text);
});
```

#### Typewriter Component Integration
- All `Typewriter` components automatically register with the sequential system
- Animations run in order: titles first, then descriptions, then content
- Creates elegant wave-like text appearance

### Error Handling & Edge Cases
- Use try/catch for async operations
- Validate props when necessary (especially for dynamic data)
- Handle loading states with conditional rendering
- Clean up event listeners in useEffect returns
- Provide fallback UI for error states

### Comments & Documentation
- **English** for code logic comments
- **German** for UI text and user-facing content
- Comments explain "why" not "what"
- Avoid obvious comments
- Use JSDoc for complex functions

```jsx
// Good: Explains purpose
// Close mobile menu when clicking outside
useEffect(() => { /* ... */ }, [isOpen]);

// Avoid: Obvious
// Set isOpen to false
setIsOpen(false);
```

### Animation & UX Patterns

#### Typewriter Effect
- Use `Typewriter` component for animated text reveals
- Configure speed via constants: `TYPE_SPEED_TITLE`, `TYPE_SPEED_TEXT`
- Respect sequential animation order with `SequentialProvider`
- Text appears character by character for engaging UX

#### Hover Effects
- Unified card hover effects across all components
- Include shadow, translation, border, and gradient accent line
- Use `group` class for coordinated hover states
- Consistent timing: `duration-300` for smooth transitions

#### Scroll-based Animations
- Use `IntersectionObserver` for performance (when implemented)
- Trigger animations once per component (flag with `useRef`)
- Register animations with sequential controller for coordinated timing

### Performance Considerations
- Use `React.memo` sparingly (measure first with React DevTools)
- Optimize re-renders with proper dependency arrays
- Debounce scroll/resize handlers with `useCallback`
- Lazy load components if needed with `React.lazy`
- Use `useMemo` for expensive calculations

### Accessibility
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support
- Screen reader friendly text with `aria-labels`
- Focus management for interactive elements

### Git Workflow
- Feature branches for new work (`feature/feature-name`)
- Descriptive commit messages in English
- Squash commits before merging to main
- Follow conventional commit format: `feat:`, `fix:`, `docs:`, etc.
- Pull request reviews for significant changes

## ESLint Configuration

Current rules:
- `no-unused-vars`: Error with ignore pattern `^[A-Z_]` (globals)
- React hooks rules enabled (`exhaustive-deps`, `rules-of-hooks`)
- React refresh plugin for HMR support
- No TypeScript rules (JavaScript only)

## Future Enhancements

When adding new features:
- Consider TypeScript migration for better type safety
- Add Vitest testing framework with React Testing Library
- Implement error boundaries for better error handling
- Add loading states and skeleton screens
- Consider internationalization (i18n) for German/English content
- Add performance monitoring and analytics
- Implement PWA features (service worker, offline support)

---

**Last updated:** January 22, 2026
**Project version:** 0.0.0
