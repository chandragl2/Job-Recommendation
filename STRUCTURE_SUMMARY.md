# 📋 Struktur Project - Ringkasan

## Tree Diagram

```
📦 Job-Recommendation/
├── 📁 src/
│   ├── 📁 app/                       ← Next.js Pages (Routing)
│   │   ├── 📁 auth/
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── 📁 dashboard/
│   │   │   ├── page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   ├── recommendations/page.tsx
│   │   │   ├── saved-jobs/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── layout.tsx                ← Root layout
│   │   └── page.tsx                  ← Homepage
│   │
│   ├── 📁 components/                ← Reusable Components
│   │   ├── 📁 ui/                    ← UI Components (Button, Card, Input, Tabs)
│   │   ├── 📁 layout/                ← Layout Components (Header, Sidebar, Footer)
│   │   ├── 📁 forms/                 ← Form Components (LoginForm, RegisterForm)
│   │   └── 📁 features/              ← Feature Components (JobCard, JobFilter)
│   │
│   ├── 📁 hooks/                     ← Custom React Hooks
│   │   ├── useAuth.ts
│   │   ├── useForm.ts
│   │   ├── usePagination.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   │
│   ├── 📁 lib/                       ← Utilities & Constants
│   │   ├── utils.ts                  ← Helper functions (cn, etc.)
│   │   ├── validation.ts             ← Form validation
│   │   ├── constants.ts              ← Routes, colors, constants
│   │   ├── mockData.ts               ← Mock data for dev
│   │   └── config.ts                 ← App configuration
│   │
│   ├── 📁 services/                  ← Business Logic Layer
│   │   ├── auth.service.ts           ← Authentication logic
│   │   ├── job.service.ts            ← Job management logic
│   │   └── api.ts                    ← Central exports
│   │
│   ├── 📁 types/                     ← TypeScript Definitions
│   │   ├── auth.ts                   ← Auth types
│   │   ├── job.ts                    ← Job types
│   │   ├── user.ts                   ← User types
│   │   └── index.ts                  ← Re-exports all types
│   │
│   └── 📁 styles/                    ← Global Styles
│       ├── globals.css               ← Tailwind imports
│       └── variables.css             ← CSS variables
│
├── 📁 public/                        ← Static assets
├── 📁 docs/                          ← Documentation files
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 tailwind.config.ts
└── 📄 next.config.js
```

## 📊 Layers & Responsibilities

### Layer 1: Presentation (UI)

```
src/app/        → Pages & Routing
src/components/ → UI Components
```

**Job**: Display data, handle user interactions

### Layer 2: Logic

```
src/hooks/      → Component state & logic
```

**Job**: Manage component state, coordinate with services

### Layer 3: Business Logic

```
src/services/   → API calls, data operations
src/lib/        → Utilities & constants
```

**Job**: Handle data processing, API integration

### Layer 4: Types

```
src/types/      → TypeScript definitions
```

**Job**: Define all data structures

---

## 🔍 Quick File Locations

| What?                 | Where?                                       |
| --------------------- | -------------------------------------------- |
| 🔐 Login page         | `src/app/auth/login/page.tsx`                |
| 📝 Register page      | `src/app/auth/register/page.tsx`             |
| 📊 Dashboard          | `src/app/dashboard/page.tsx`                 |
| 👤 Profile page       | `src/app/dashboard/profile/page.tsx`         |
| 💼 Jobs page          | `src/app/dashboard/recommendations/page.tsx` |
| 🔘 Button component   | `src/components/ui/Button.tsx`               |
| 💳 Card component     | `src/components/ui/Card.tsx`                 |
| 📋 Job card component | `src/components/features/JobCard.tsx`        |
| 🔐 Auth logic         | `src/services/auth.service.ts`               |
| 💼 Job logic          | `src/services/job.service.ts`                |
| 📝 Auth types         | `src/types/auth.ts`                          |
| 💼 Job types          | `src/types/job.ts`                           |
| 👤 User types         | `src/types/user.ts`                          |
| 🛠️ Routes constant    | `src/lib/constants.ts`                       |
| 🔧 Validation         | `src/lib/validation.ts`                      |
| 🎣 Auth hook          | `src/hooks/useAuth.ts`                       |
| 📋 Form hook          | `src/hooks/useForm.ts`                       |

---

## 💡 Why This Structure?

✅ **Organized by Concern**

- UI components are separate from business logic
- Easy to find files by feature
- Clear separation of responsibilities

✅ **Scalable**

- Easy to add new features
- Growing team can work on different layers
- Each folder has clear purpose

✅ **Testable**

- Services can be tested independently
- Components easy to mock
- Types ensure correctness

✅ **Maintainable**

- Clear imports with path aliases (`@/`)
- Consistent naming conventions
- Documentation in each folder

✅ **Professional**

- Industry-standard structure
- Production-ready organization
- Easy for new developers to understand

---

**For detailed information, see [FOLDER_STRUCTURE.md](FOLDER_STRUCTURE.md)**
