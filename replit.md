# Romantic Anniversary Website

## Overview

This is a romantic anniversary website built to celebrate 8 months together. It's a full-stack application featuring a beautiful, animated frontend with a romantic theme and a backend infrastructure ready for future enhancements. The website displays a heartfelt message with typewriter effects, photo carousel, and embedded music video.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom romantic theme (neon red/pink color scheme)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx for TypeScript execution

### Design System
- **Typography**: Dancing Script for romantic headings, Poppins for body text
- **Color Palette**: Black background with neon red (#FF073A) and pink (#FF073A, #FF69B4) accents
- **Theme**: Dark romantic theme with glowing neon effects
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Home Page** (`client/src/pages/home.tsx`)
   - Loading screen with animated heart
   - Photo carousel with romantic images
   - Typewriter effect romantic message
   - Embedded YouTube music video
   - Floating heart particles animation

2. **UI Components** (`client/src/components/ui/`)
   - Complete Shadcn/ui component library
   - Custom styled components for romantic theme
   - Accessible components using Radix UI primitives

3. **Custom Components**
   - `LoadingScreen`: Animated loading with pulsing heart
   - `PhotoCarousel`: Auto-rotating image carousel
   - `RomanticMessage`: Typewriter effect message display
   - `MusicVideo`: Embedded YouTube video player

### Backend Infrastructure
1. **Server Setup** (`server/index.ts`)
   - Express.js application with middleware
   - Request logging and error handling
   - Development-only Vite integration

2. **Database Schema** (`shared/schema.ts`)
   - User table with username/password fields
   - Zod validation schemas
   - Type-safe database interactions

3. **Storage Layer** (`server/storage.ts`)
   - In-memory storage implementation
   - Interface-based design for easy database migration
   - CRUD operations for user management

## Data Flow

1. **Client Request**: Browser requests are handled by Express server
2. **Development Mode**: Vite middleware serves React application with HMR
3. **Production Mode**: Express serves built static files
4. **API Routes**: Prefixed with `/api` for backend functionality
5. **Database**: Drizzle ORM manages PostgreSQL connections and queries
6. **Session Management**: PostgreSQL-backed sessions for user authentication

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Libraries**: Radix UI components, Framer Motion, Lucide React icons
- **Utilities**: Class Variance Authority, clsx, Tailwind Merge
- **Development**: TypeScript, Vite, PostCSS, Autoprefixer

### Backend Dependencies
- **Core**: Express.js, TypeScript, Node.js 20
- **Database**: Drizzle ORM, @neondatabase/serverless, connect-pg-simple
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### External Services
- **Database**: PostgreSQL (Neon serverless configured)
- **Media**: YouTube embedded videos
- **Images**: Unsplash for romantic stock photos
- **Fonts**: Google Fonts (Dancing Script, Poppins)

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20, PostgreSQL 16 modules
- **Port Configuration**: Server runs on port 5000, exposed as port 80
- **Hot Reload**: Vite HMR for frontend, tsx for backend
- **Database**: Local PostgreSQL instance

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles TypeScript server to `dist/index.js`
- **Deployment**: Autoscale deployment target on Replit
- **Database**: Environment variable `DATABASE_URL` for production database

### Build Commands
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Drizzle schema migration

## Changelog

```
Changelog:
- June 14, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```