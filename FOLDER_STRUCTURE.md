# 📁 Project Structure Documentation

Dokumentasi lengkap struktur folder dan organisasi project **AI Job Matching Website**.

## 📂 Directory Structure

```
Job-Recommendation/
├── src/
│   ├── app/                          # Next.js App Router (Pages & Layouts)
│   │   ├── auth/                     # Authentication pages
│   │   │   ├── login/
│   │   │   │   └── page.tsx         # Login page
│   │   │   └── register/
│   │   │       └── page.tsx         # Register page
│   │   ├── dashboard/                # Main dashboard pages (Protected)
│   │   │   ├── page.tsx             # Dashboard home
│   │   │   ├── profile/
│   │   │   │   └── page.tsx         # User profile & skills
│   │   │   ├── recommendations/
│   │   │   │   └── page.tsx         # Job recommendations
│   │   │   ├── saved-jobs/
│   │   │   │   └── page.tsx         # Saved jobs list
│   │   │   └── settings/
│   │   │       └── page.tsx         # User settings
│   │   ├── layout.tsx               # Root layout with metadata
│   │   └── page.tsx                 # Landing/home page
│   │
│   ├── components/                   # Reusable React Components
│   │   ├── ui/                      # Base UI components (No business logic)
│   │   │   ├── Button.tsx           # Button with variants
│   │   │   ├── Card.tsx             # Card container
│   │   │   ├── Input.tsx            # Input field with validation
│   │   │   └── Tabs.tsx             # Tab navigation
│   │   │
│   │   ├── layout/                  # Layout wrapper components
│   │   │   ├── Header.tsx           # App header/navbar
│   │   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   │   └── Footer.tsx           # App footer
│   │   │
│   │   ├── forms/                   # Form-specific components
│   │   │   ├── LoginForm.tsx        # Login form
│   │   │   ├── RegisterForm.tsx     # Registration form
│   │   │   └── ProfileForm.tsx      # Profile editing form
│   │   │
│   │   └── features/                # Feature-specific components
│   │       ├── JobCard.tsx          # Individual job display
│   │       ├── JobFilter.tsx        # Job filtering controls
│   │       └── JobList.tsx          # Job list with pagination
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   ├── useAuth.ts               # Authentication hook
│   │   ├── useForm.ts               # Form state management
│   │   ├── usePagination.ts         # Pagination logic
│   │   ├── useDebounce.ts           # Debounce utility
│   │   └── index.ts                 # Export all hooks
│   │
│   ├── lib/                          # Utilities & Library Functions
│   │   ├── utils.ts                 # General utilities (cn, etc.)
│   │   ├── validation.ts            # Form validation functions
│   │   ├── constants.ts             # App constants & routes
│   │   ├── mockData.ts              # Mock data for development
│   │   └── config.ts                # App configuration
│   │
│   ├── services/                     # Business Logic & API Integration
│   │   ├── auth.service.ts          # Authentication service
│   │   ├── job.service.ts           # Job management service
│   │   └── api.ts                   # Central API exports
│   │
│   ├── types/                        # TypeScript Type Definitions
│   │   ├── auth.ts                  # Auth-related types
│   │   ├── job.ts                   # Job-related types
│   │   ├── user.ts                  # User profile types
│   │   └── index.ts                 # Export all types
│   │
│   └── styles/                       # Global Styles
│       ├── globals.css              # Tailwind imports & global styles
│       └── variables.css            # CSS variables
│
├── public/                           # Static assets
├── node_modules/                     # Dependencies
│
├── .gitignore
├── .eslintrc.json                    # ESLint config
├── next.config.js                    # Next.js config
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts               # Tailwind CSS config
├── postcss.config.js                # PostCSS config
├── package.json
├── package-lock.json
│
└── docs/                             # Project Documentation
    ├── README.md                     # Main documentation
    ├── SETUP_GUIDE.md               # Setup instructions
    ├── FOLDER_STRUCTURE.md          # This file
    └── API.md                       # Service API documentation
```

## 🎯 Folder Organization Guide

### `src/app/` - Pages & Routing

- **Purpose**: Define all application routes using Next.js App Router
- **Structure**: File-based routing where folder names = URL paths
- **Files**: Only `page.tsx` files (and optional `layout.tsx`)
- **Note**: Protected routes should check authentication in `useEffect`

### `src/components/` - UI Components

**Organized by responsibility:**

- **`ui/`**: Pure UI components (buttons, cards, inputs) - no API calls
- **`layout/`**: Layout wrappers (header, sidebar, footer)
- **`forms/`**: Form-specific components with validation
- **`features/`**: Business-logic components (job cards, filters)

### `src/hooks/` - Custom Hooks

- Encapsulate component logic
- Handle state management
- Integrate with services
- Reusable across components

### `src/lib/` - Utilities

- **`utils.ts`**: General helper functions (styling, formatting)
- **`validation.ts`**: Form validation & sanitization
- **`constants.ts`**: Routes, colors, job levels, etc.
- **`mockData.ts`**: Development test data
- **`config.ts`**: App settings & environment variables

### `src/services/` - Business Logic

- **Purpose**: Centralized API & data operations
- **Structure**: One service per feature (auth, jobs, etc.)
- **Benefits**: Easy to swap real API for mocks
- **Pattern**: Stateless functions returning data

### `src/types/` - TypeScript Definitions

- **Purpose**: Single source of truth for all types
- **Naming**: Feature-based (`auth.ts`, `job.ts`, `user.ts`)
- **Export**: All types re-exported from `index.ts`
- **Usage**: Import from `@/types` throughout app

## 📊 Data Flow Architecture

```
User Action
    ↓
Component (UI)
    ↓
Hook (State Management)
    ↓
Service (Business Logic)
    ↓
localStorage / Mock API
    ↓
Return Data → Component → Render
```

## 🔄 Import Patterns

```typescript
// Components
import { Button } from "@/components/ui/Button";
import { JobCard } from "@/components/features/JobCard";

// Hooks
import { useAuth } from "@/hooks";

// Services
import { authService, jobService } from "@/services/api";

// Types
import { User, Job, JobFilter } from "@/types";

// Utilities
import { cn } from "@/lib/utils";
import { validateEmail } from "@/lib/validation";
import { ROUTES } from "@/lib/constants";
```

## 🚀 Adding New Features

### Adding a New Page

1. Create folder in `src/app/`: `src/app/feature/`
2. Create `page.tsx` with component
3. Update `ROUTES` in `src/lib/constants.ts`
4. Add navigation links as needed

### Adding a New Component

1. Determine type: **UI** (no logic) or **Feature** (with logic)
2. Create in appropriate folder: `src/components/ui/` or `src/components/features/`
3. Export from index file if needed
4. Use in pages/components

### Adding a New Service

1. Create `feature.service.ts` in `src/services/`
2. Add service functions (async operations)
3. Export from `src/services/api.ts`
4. Use in hooks/components

### Adding New Types

1. Create `feature.ts` in `src/types/`
2. Define all interfaces for the feature
3. Re-export from `src/types/index.ts`

## 📝 File Naming Conventions

- **Components**: PascalCase (`Button.tsx`, `JobCard.tsx`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`, `useForm.ts`)
- **Services**: camelCase with `.service.ts` suffix (`auth.service.ts`)
- **Types**: camelCase with `.ts` suffix (`auth.ts`, `job.ts`)
- **Pages**: `page.tsx` (Next.js convention)
- **Layouts**: `layout.tsx` (Next.js convention)

## 🎨 Best Practices

✅ **DO:**

- Keep components small and focused
- Put business logic in services
- Use TypeScript types everywhere
- Organize by feature/domain
- Create reusable UI components
- Use hooks for shared logic
- Import from path aliases (`@/`)

❌ **DON'T:**

- Put API calls directly in components
- Create deeply nested folders
- Use generic names like `utils/helpers`
- Mix UI and business logic
- Create god components
- Import from relative paths

## 🔗 Related Files

- [Setup Guide](SETUP_GUIDE.md) - How to run the project
- [API Documentation](API.md) - Service & API reference
- [README](README.md) - Project overview

---

**Last Updated**: December 2, 2025  
**Maintained by**: Development Team
