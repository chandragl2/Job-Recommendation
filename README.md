# AI Job Matching & Skill Recommendation Website

A modern, AI-powered job recommendation platform built with Next.js, TypeScript, and Tailwind CSS. The application helps users find their perfect job matches based on their skills and experience.

## 🚀 Features

### **5 Main Pages:**

#### **1. Landing Page (Homepage)**

- Hero section with compelling call-to-action
- Features highlight section showcasing:
  - AI Job Matching
  - Skill Gap Analysis
  - Personalized Career Recommendations
  - Real-time Job Ranking
- Responsive design with gradient backgrounds
- Navigation with Login/Sign Up buttons

#### **2. Authentication Pages**

- **Login Page**: Email and password authentication
- **Register Page**: New user account creation
- Beautiful split-screen design
- Form validation with error messages
- Responsive mobile layout

#### **3. User Dashboard**

- Welcome banner with user's name
- Statistics cards showing:
  - Total Job Matches (24)
  - Average Match Percentage (85%)
  - Saved Jobs (5)
  - Skills Detected (8)
- Quick action buttons:
  - Update Skills
  - Upload CV
  - Start Job Matching
- Recent activity feed
- Collapsible sidebar navigation
- Mobile-responsive menu

#### **4. Profile & Skills Input Page**

- **4 Tab Sections:**
  1. **Personal Info** - Full name, email, phone, location
  2. **Skills** - Add/remove skills with autocomplete suggestions
  3. **Experience** - Add multiple work experiences
  4. **CV Upload** - Drag-and-drop CV file upload
- Skill input with smart suggestions
- Add/remove skills with chip UI
- Multiple experience entries
- Save changes functionality

#### **5. Job Matching Results Page**

- Search bar for job filtering
- Advanced filters:
  - Experience level (Junior, Mid, Senior)
  - Location filtering
  - Skill-based matching
- Job cards displaying:
  - Job title and company
  - Location, level, and salary
  - Required skills
  - Match percentage score
  - Save/bookmark functionality
- Color-coded match scores:
  - Green (90%+)
  - Blue (80-89%)
  - Orange (<80%)

## 🎨 Design System

### Colors

- **Primary**: Sky Blue (#0ea5e9)
- **Accent**: Purple (#a855f7)
- **Success**: Green
- **Warning**: Orange
- **Error**: Red

### Components

- Custom Button (4 variants: primary, secondary, ghost, danger)
- Card (2 variants: default, elevated)
- Input (with label and error state)
- Tabs for section navigation
- Responsive grid layouts

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, class-variance-authority, zod
- **State Management**: React Hooks

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── auth/
│   │   ├── login/page.tsx       # Login page
│   │   └── register/page.tsx    # Register page
│   ├── dashboard/page.tsx       # User dashboard
│   ├── profile/page.tsx         # Profile & skills input
│   ├── recommendations/page.tsx # Job matching results
│   ├── saved-jobs/page.tsx      # Saved jobs page
│   └── settings/page.tsx        # User settings
├── components/
│   └── ui/
│       ├── Button.tsx           # Button component
│       ├── Card.tsx             # Card component
│       ├── Input.tsx            # Input component
│       └── Tabs.tsx             # Tabs component
├── lib/
│   └── utils.ts                 # Utility functions
├── types/
│   └── index.ts                 # TypeScript types
└── styles/
    └── globals.css              # Global styles
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18.0+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
cd "d:\kuliah\Fullstack\Job-Recommendation"
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## 📖 Usage

### **Navigation Flow:**

1. **Start at Landing Page** → Click "Get Started" or "Sign Up"
2. **Register Account** → Fill in your details
3. **Dashboard** → View your statistics and quick actions
4. **Profile Setup** →
   - Add personal information
   - Input your skills (with autocomplete)
   - Add work experience
   - Upload CV (optional)
5. **Job Matching** → Browse recommended jobs with match scores
6. **Save Jobs** → Bookmark interesting positions
7. **Settings** → Manage preferences and account

### **Features Demo:**

#### Adding Skills

- Type in the skill input field
- Get autocomplete suggestions from 15+ pre-defined skills
- Click to add or use keyboard Enter
- Remove skills with the X button on skill chips

#### Job Matching

- View all recommended jobs sorted by match percentage
- Filter by experience level and location
- Search for specific jobs or companies
- Save jobs for later review
- View match percentage with color coding

## 🎯 Key Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Form validation with error messages
✅ Local storage for user data persistence
✅ Tab-based navigation
✅ Autocomplete skill suggestions
✅ Color-coded match scoring
✅ Sidebar navigation with mobile menu
✅ Beautiful gradients and animations
✅ Dark mode ready styling
✅ Accessibility considerations

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Real AI job matching algorithm
- [ ] User authentication with JWT
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Email notifications
- [ ] Job application tracking
- [ ] Skill progression tracking
- [ ] Interview preparation resources
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)
- [ ] Social login (Google, GitHub)
- [ ] Advanced analytics and insights

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 Authentication

Currently using local storage for demo purposes. In production, implement:

- JWT tokens
- Secure password hashing
- OAuth 2.0 integration
- Session management

## 📝 API Endpoints (Future)

```
GET    /api/jobs              # Get all jobs
GET    /api/jobs/:id          # Get specific job
GET    /api/recommendations   # Get personalized recommendations
POST   /api/profile           # Update user profile
GET    /api/profile           # Get user profile
POST   /api/skills            # Add user skills
DELETE /api/skills/:id        # Remove skill
POST   /api/experience        # Add experience
PUT    /api/experience/:id    # Update experience
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Hooks](https://react.dev/reference/react)
- [TypeScript](https://www.typescriptlang.org)

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 👨‍💻 Development

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind utility classes for styling
- Keep components reusable and modular

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

For issues or questions, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for job seekers worldwide**
