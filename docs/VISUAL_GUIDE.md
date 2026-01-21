# Visual Tour & User Guide

## 🎬 Quick Visual Walkthrough

### 1️⃣ Landing Page (/)

```
┌─────────────────────────────────────────────────────┐
│  JobAI              [Login] [Sign Up]              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Temukan Pekerjaan Terbaik dengan                 │
│  AI Job Matching                                   │
│                                                     │
│  [Get Started]  [Try Job Matching]   [Illustration]│
│                                                     │
├─────────────────────────────────────────────────────┤
│  Fitur Unggulan Kami                               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│  │ AI      │ │ Skill   │ │Personal │ │Job      │ │
│  │Matching │ │ Gap     │ │ Career  │ │Ranking  │ │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ │
├─────────────────────────────────────────────────────┤
│  "Mulai isi profil Anda untuk mendapatkan..."      │
│  [Mulai Sekarang]                                  │
├─────────────────────────────────────────────────────┤
│  © 2024 JobAI. All rights reserved.               │
└─────────────────────────────────────────────────────┘
```

---

### 2️⃣ Register Page (/auth/register)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [Branding Left]  │ Create Account                 │
│  Start Your       │                                │
│  Journey!         │ Full Name      [input]         │
│  Create account   │ Email          [input]         │
│  and discover...  │ Password       [input]         │
│                   │ Confirm Pass   [input]         │
│                   │                                │
│                   │ [Create Account]               │
│                   │                                │
│                   │ Already have account? Sign in  │
└─────────────────────────────────────────────────────┘
```

---

### 3️⃣ Dashboard (/dashboard)

```
┌─────────────────────────────────────────────────────┐
│ ☰ Dashboard              ⦿ User Profile            │
├─────────────────────────────────────────────────────┤
│ [Sidebar]          │ Hello, John Doe 👋            │
│ • Dashboard        │ Let's find the best job!      │
│ • Profile          │                                │
│ • Job Recs         │ ┌──────┬──────┬──────┬──────┐ │
│ • Saved Jobs       │ │ 24   │ 85%  │ 5    │ 8    │ │
│ • Settings         │ │Match │Avg % │Saved │Skills│ │
│ [Logout]           │ └──────┴──────┴──────┴──────┘ │
│                    │                                │
│                    │ Quick Actions                  │
│                    │ [Update Skills] [Upload CV]    │
│                    │ [Start Job Matching]          │
│                    │                                │
│                    │ Recent Activity                │
│                    │ • Senior React Dev  87% 2h ago│
│                    │ • Full Stack Dev    87% 4h ago│
│                    │ • Frontend Engineer 85% 6h ago│
└─────────────────────────────────────────────────────┘
```

---

### 4️⃣ Profile Page (/profile)

```
┌─────────────────────────────────────────────────────┐
│ [← Back] Complete Your Profile  [Save Changes]    │
├─────────────────────────────────────────────────────┤
│ [Personal|Skills|Experience|CV Upload]              │
├─────────────────────────────────────────────────────┤
│                                                     │
│ SKILLS TAB:                                        │
│ [Add Skill Input ──────────]                       │
│ ↓ Autocomplete:                                    │
│ • React  • Redux  • REST API                       │
│                                                     │
│ Your Skills:                                       │
│ [React ×] [JavaScript ×] [Figma ×]               │
│                                                     │
│ [Save Skills]                                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 5️⃣ Job Recommendations (/recommendations)

```
┌─────────────────────────────────────────────────────┐
│ [← Back] Job Recommendations                       │
├─────────────────────────────────────────────────────┤
│ [Search ─────────────────────────] [Filters]       │
│ ├─ Level: [All Levels ▼]                          │
│ └─ Location: [All Locations ▼]                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Senior React Developer              [♡ → ♥]   │ │
│ │ Tech Company Inc                                │ │
│ │ 📍 Jakarta  🏢 Senior  💰 $80-120k            │ │
│ │ Lead frontend team and build scalable apps    │ │
│ │ Skills: [React] [TypeScript] [Node.js]        │ │
│ │                          92% [View Details]   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ┌─────────────────────────────────────────────────┐ │
│ │ Full Stack Developer                 [♡]       │ │
│ │ Digital Solutions                               │ │
│ │ 📍 Bandung  🏢 Mid  💰 $50-80k               │ │
│ │ Build and maintain web application stack     │ │
│ │ Skills: [React] [Node.js] [MongoDB]          │ │
│ │                          87% [View Details]   │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Color Scheme

### Primary Colors

```
Primary Blue:    #0ea5e9 (Sky Blue)
Accent Purple:   #a855f7 (Vibrant Purple)
```

### Status Colors

```
Success Green:   #16a34a (✅ 90%+ match)
Info Blue:       #2563eb (ℹ️ 80-89% match)
Warning Orange:  #ea580c (⚠️ <80% match)
Danger Red:      #dc2626 (❌ Errors)
Neutral Slate:   #475569 (Text, borders)
```

### Card Styling

```
Background:  White (#ffffff)
Border:      Light Slate (#e2e8f0)
Shadow:      Slate with 50% opacity
Radius:      12px (rounded-xl)
```

---

## 📊 Component Hierarchy

```
Root Layout
├── Landing Page
│   ├── Navigation Bar
│   ├── Hero Section
│   ├── Features Grid
│   ├── CTA Section
│   └── Footer
│
├── Auth Pages
│   ├── Register
│   │   └── Form (Full Name, Email, Password)
│   └── Login
│       └── Form (Email, Password)
│
├── Dashboard Layout
│   ├── Sidebar Navigation
│   ├── Top Header
│   └── Main Content
│       ├── Welcome Section
│       ├── Stats Cards
│       ├── Quick Actions
│       └── Recent Activity
│
├── Profile Page
│   ├── Tabs
│   │   ├── Personal Info Tab
│   │   ├── Skills Tab
│   │   ├── Experience Tab
│   │   └── CV Upload Tab
│   └── Save Button
│
├── Recommendations Page
│   ├── Search Bar
│   ├── Filters
│   └── Job Cards List
│       ├── Job Info
│       ├── Company Info
│       ├── Skills Chips
│       └── Match Score
│
├── Saved Jobs Page
│   └── Empty State
│
└── Settings Page
    ├── Account Settings
    ├── Notifications
    └── Danger Zone
```

---

## ⌨️ Keyboard Navigation

```
Tab              : Move between elements
Shift + Tab      : Move backward
Enter            : Submit form / Click button
Escape           : Close menu / Cancel
Spacebar         : Toggle checkbox
Arrow Keys       : Tab navigation
```

---

## 🎯 Interactive Elements

### Buttons

```
Primary:   [Get Started]        - Sky Blue, text white
Secondary: [Learn More]         - Slate gray
Ghost:     [Back]               - Transparent, blue text
Danger:    [Delete Account]     - Red background
```

### Form Inputs

```
Text Input:  [Full Name ────────────]
Email Input: [Email ────────────────]
Password:    [••••••••────────────]
Textarea:    [Description ───────────]
             [───────────────────────────]
```

### Cards

```
Default:  ┌────────────────────┐
          │ Card Content       │ - White bg, light border
          └────────────────────┘

Elevated: ┌────────────────────┐
          │ Card Content       │ - White bg, shadow
          └────────────────────┘
```

---

## 📱 Responsive Breakpoints

```
Mobile:          < 640px   (single column)
Tablet:      640px - 1024px (2 columns)
Desktop:        > 1024px   (3+ columns)

Grid Examples:
md:grid-cols-2   = 2 columns on medium+
lg:grid-cols-4   = 4 columns on large+
```

---

## 🎬 User Interactions Timeline

### Registration Flow

```
1. User clicks [Sign Up]
   ↓
2. Form appears with 4 fields
   ↓
3. User fills fields
   ↓
4. Validation errors shown (if any)
   ↓
5. User fixes errors
   ↓
6. Clicks [Create Account]
   ↓
7. Button shows "Creating account..."
   ↓
8. Redirects to Dashboard
```

### Skill Addition Flow

```
1. User types in skill input
   ↓
2. Autocomplete suggestions appear
   ↓
3. User clicks suggestion (or presses Enter)
   ↓
4. Skill added to chips list
   ↓
5. Input cleared for next skill
   ↓
6. User can click [×] to remove
```

### Job Search Flow

```
1. User types job name/company
   ↓
2. Results filter in real-time
   ↓
3. User opens Filters
   ↓
4. Selects level and location
   ↓
5. Results update immediately
   ↓
6. User clicks [♡] to save job
   ↓
7. Icon changes to [♥]
```

---

## 🎨 Typography

```
Headings:
H1: 48px (Landing hero)
H2: 36px (Section titles)
H3: 24px (Card titles)
H4: 20px (Form labels)

Body:
Paragraph: 16px (default)
Small: 14px (labels, hints)
Tiny: 12px (metadata)

Font: System default (sans-serif)
Weight: 400 (normal), 600 (semibold), 700 (bold)
```

---

## 🔄 State Indicators

```
Success:  Green checkmark + green text
Error:    Red X + red text + error message
Loading:  Spinner/skeleton + disabled button
Disabled: Gray button + cursor-not-allowed
Focus:    Blue ring around element
Hover:    Slight color change + shadow increase
Active:   Underline for tabs
```

---

## 📊 Data Visualization

### Match Score Badge

```
92% = Large bold text
     Green color
     Green progress bar (optional)

"Match Score" subtitle below
```

### Job Level Badge

```
[Junior]   = Green background, white text
[Mid]      = Blue background, white text
[Senior]   = Purple background, white text
```

### Skill Chips

```
[React ×]  = Light blue bg
             Blue text
             X button on right
```

---

**End of Visual Tour** 🎬

For interactive experience, visit: **http://localhost:3000**
