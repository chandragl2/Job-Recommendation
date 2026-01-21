# Setup Guide - AI Job Matching Website

## 📋 Quick Start Guide

### Prerequisites

- **Node.js 18.0+** - [Download](https://nodejs.org/)
- **npm 9.0+** or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **VS Code** (optional but recommended) - [Download](https://code.visualstudio.com/)

### Installation Steps

#### 1. Navigate to Project Directory

```bash
cd d:\kuliah\Fullstack\Job-Recommendation
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start Development Server

```bash
npm run dev
```

#### 4. Open Browser

```
http://localhost:3000
```

---

## 🎮 Testing the Application

### Landing Page Flow

1. **Homepage** (/) - See hero section and features
   - Click "Get Started" → Go to Register
   - Click "Try Job Matching" → Go to Register
   - Click "Sign Up" → Go to Register

### Authentication

2. **Register** (/auth/register)

   - Fill in: Full Name, Email, Password, Confirm Password
   - Click "Create Account"
   - Redirects to Dashboard

3. **Login** (/auth/login)
   - Fill in: Email, Password
   - Click "Sign In"
   - Redirects to Dashboard

### Dashboard

4. **Dashboard** (/dashboard)
   - View welcome message with your name
   - See 4 statistics cards
   - See quick action buttons
   - View recent activity
   - Click navigation links in sidebar

### Profile Setup

5. **Profile** (/profile)
   - **Tab 1 - Personal Info**: Update name, email, phone, location
   - **Tab 2 - Skills**:
     - Type "React" → See suggestions
     - Click React → Added to skills
     - See skill chips with X button to remove
   - **Tab 3 - Experience**:
     - Click "Add Experience"
     - Fill job details
     - Click "Save Experience"
   - **Tab 4 - Upload CV**:
     - Drag & drop or browse file

### Job Recommendations

6. **Recommendations** (/recommendations)
   - See job cards with 92%, 87%, 85% match scores
   - Use search bar to filter jobs
   - Click "Filters" to show/hide filter options
   - Filter by:
     - Experience Level (Junior, Mid, Senior)
     - Location (Jakarta, Bandung, etc.)
   - Click bookmark icon to save jobs
   - Saved jobs get filled icon ✓

### Other Pages

7. **Saved Jobs** (/saved-jobs) - View saved jobs
8. **Settings** (/settings) - Account and notification settings
9. **Sidebar Navigation** - Click menu items to navigate

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server (hot reload)
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint checks
```

---

## 📂 Project Structure

```
src/
├── app/                        # Next.js pages (App Router)
│   ├── page.tsx               # Landing page
│   ├── layout.tsx             # Root layout
│   ├── auth/
│   │   ├── login/page.tsx      # Login page
│   │   └── register/page.tsx   # Register page
│   ├── dashboard/page.tsx      # Dashboard
│   ├── profile/page.tsx        # Profile & Skills
│   ├── recommendations/page.tsx # Job Matching
│   ├── saved-jobs/page.tsx     # Saved Jobs
│   └── settings/page.tsx       # Settings
├── components/
│   └── ui/                     # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── Tabs.tsx
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── constants.ts           # App constants
│   ├── validation.ts          # Form validation
│   └── mockData.ts            # Mock data
├── hooks/
│   └── index.ts               # Custom React hooks
├── types/
│   └── index.ts               # TypeScript types
└── styles/
    └── globals.css            # Global styles

```

---

## 🎨 Feature Walkthrough

### 1. Smart Skill Input

- Type partially: "re" → Shows "React", "Redux", "REST API"
- Click suggestion or press Enter
- Remove with X button on chip

### 2. Job Matching

- Match % shown as 92%, 87%, 85%
- Color-coded:
  - Green (90%+) = Excellent
  - Blue (80-89%) = Good
  - Orange (<80%) = Fair
- Bookmark icon for saving jobs

### 3. Forms

- Real-time validation
- Error messages below fields
- Disabled submit during processing
- Focus highlighting with blue ring

### 4. Navigation

- Top header with back button
- Sidebar (collapsible on mobile)
- Breadcrumb paths
- Mobile hamburger menu

---

## 📱 Responsive Design

### Mobile (< 640px)

- Single column layout
- Hamburger menu
- Stacked cards
- Full-width buttons

### Tablet (640px - 1024px)

- 2-column grids
- Sidebar visible
- Card layouts

### Desktop (> 1024px)

- Multi-column grids
- Full sidebar
- Expanded layouts

---

## 🔐 Test Account

### Demo User

- **Name**: John Doe
- **Email**: john@example.com
- **Password**: Any password (not validated)

### Skills (Pre-filled)

- React
- JavaScript
- Figma

---

## 🐛 Troubleshooting

### Server Won't Start

```bash
# Kill existing process
taskkill /F /IM node.exe

# Try again
npm run dev
```

### Module Not Found Error

```bash
# Reinstall dependencies
rm -r node_modules
npm install
```

### Tailwind CSS Not Working

```bash
# Rebuild
npm run dev -- --webpack
```

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

---

## 📖 Key Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons
- **React Hooks** - State management

---

## 🔗 Important Links

- Landing Page: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard
- Profile: http://localhost:3000/profile
- Jobs: http://localhost:3000/recommendations
- Settings: http://localhost:3000/settings

---

## 💾 Local Storage

User data is stored in browser's localStorage:

```javascript
// User data key
localStorage.getItem("user");
// Returns: {"email":"john@example.com","name":"John Doe"}
```

---

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

---

## ⚙️ Environment Variables

No env variables required for development. Future setup:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## 🚀 Next Steps

1. **Backend Integration** - Connect to real API
2. **Database Setup** - MongoDB or PostgreSQL
3. **Authentication** - JWT implementation
4. **Real Job Data** - Integrate job listings API
5. **AI Matching** - Implement ML algorithm
6. **Deployment** - Deploy to Vercel or AWS

---

## 📞 Support

For issues:

1. Check console for errors: `F12` → Console tab
2. Check terminal output for server errors
3. Restart dev server
4. Clear browser cache and localStorage

---

**Happy coding! 🎉**
