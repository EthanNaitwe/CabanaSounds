# Cabana Artist Website

## Overview

This is a modern full-stack web application for Cabana, a musician from Uganda. The website serves as a complete digital presence featuring music streaming, show listings, merchandise store, photo gallery, and contact functionality. Built with React frontend and Express backend, the application demonstrates a clean separation between client and server with shared schema definitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: TSX for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Design System
- **Typography**: Multiple Google Fonts (Montserrat, Playfair Display, Inter)
- **Color Scheme**: Custom neutral palette with gold accents
- **Theme**: Light theme with CSS custom properties
- **Component Style**: "New York" variant from Shadcn/ui

## Key Components

### Database Schema (shared/schema.ts)
- **Users**: Basic user authentication with username/password
- **Tracks**: Music tracks with metadata, streaming links, and featured status
- **Shows**: Concert/event listings with venue and ticket information
- **Merchandise**: Store items with categories and inventory status
- **Gallery Images**: Photo gallery with titles and descriptions

### Storage Layer (server/storage.ts)
- Interface-based storage abstraction (IStorage)
- In-memory storage implementation for development
- CRUD operations for all data entities
- Type-safe operations using shared schema types

### API Routes (server/routes.ts)
- RESTful endpoints for tracks, shows, merchandise, and gallery
- Input validation using Zod schemas
- Error handling with appropriate HTTP status codes
- Partial implementation focusing on tracks functionality

### Frontend Sections
- **Hero**: Full-screen landing with background image and call-to-action
- **Music**: Featured track display and track listing
- **Gallery**: Photo grid with lightbox functionality
- **Shows**: Event listings with venue and date information
- **Store**: Merchandise catalog with categories
- **Contact**: Contact form and social media links
- **Navigation**: Smooth scrolling navigation with mobile responsiveness

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle requests and validate input
3. **Storage Layer**: Storage interface abstracts database operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON data flows back through the same layers

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript support
- **Component Library**: Extensive Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React and React Icons (Font Awesome)
- **Animation**: Framer Motion for transitions
- **Forms**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Development Server**: Vite with HMR for frontend
- **TypeScript**: Strict type checking across the stack
- **Build Process**: Vite for frontend, esbuild for backend
- **Database Migrations**: Drizzle Kit with PostgreSQL dialect

## Deployment Strategy

### Development Environment
- Concurrent frontend (Vite) and backend (TSX) development servers
- Hot module replacement for React components
- Automatic TypeScript compilation
- Database schema synchronization with `db:push` command

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single-server deployment serving both API and static files
- Environment-based configuration for database connections

### Database Management
- PostgreSQL database hosted on Neon (serverless)
- Schema definitions in shared TypeScript files
- Migration system using Drizzle Kit
- Environment variable configuration for database URL

The application follows modern full-stack patterns with type safety throughout, responsive design, and a clean separation of concerns between presentation, business logic, and data persistence layers.