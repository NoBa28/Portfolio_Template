# Noah Balzan - Portfolio Website

A modern, responsive portfolio website built with React 19, Vite, and Tailwind CSS, featuring sophisticated animations and a sleek dark theme design.

## Technologies

- **Frontend:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.13
- **Routing:** React Router DOM 7.9.4
- **Icons:** React Icons 5.5.0
- **Code Quality:** ESLint 9.36.0

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to localhost

## Key Features Explained

### Sequential Animation System
The portfolio uses a custom animation system that creates a wave-like text appearance:
- Animations trigger when elements enter the viewport
- Text appears character-by-character using the Typewriter component
- Queue-based execution ensures animations run in order
- Performance optimized with Intersection Observer

### Responsive Design
- Mobile-first approach with breakpoints at `md:` and `lg:`
- Collapsible navigation for mobile devices
- Flexible grid layouts for content sections
- Touch-friendly interactions and hover states

### Glass Morphism Design
- Semi-transparent cards with backdrop blur effects
- Cyan accent colors for visual hierarchy
- Smooth hover animations with shadow and translation effects
- Consistent spacing using Tailwind's utility classes

## Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality checks
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Android Chrome)