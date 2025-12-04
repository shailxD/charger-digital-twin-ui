# Charger Digital Twin UI

A pixel-perfect frontend replica of the Charger Digital Twin user interface built with Next.js, React, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

## 🚀 Features

- **Pixel-perfect UI** - Exact replica of the Figma design
- **Real-time data simulation** - Mock API integration for charger status and notifications
- **Responsive layout** - Optimized for desktop viewing
- **Component-based architecture** - Reusable, well-structured components

## 📦 Tech Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| Next.js      | 16      | React framework with App Router |
| React        | 19      | UI library                      |
| TypeScript   | 5       | Type safety                     |
| Tailwind CSS | 4       | Styling                         |
| Shadcn UI    | Latest  | UI components                   |
| pnpm         | -       | Package manager                 |

## 📁 Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── dashboard/          # Dashboard route
├── assets/                 # Icons and static assets
│   └── icons.tsx           # SVG icon components (from Figma)
├── components/
│   ├── charger-management/ # Main charger UI components
│   │   └── tabs/
│   │       └── components/
│   │           └── digital-twin/
│   │               └── panels/
│   │                   ├── left-panel/    # Charger overview
│   │                   ├── middle-panel/  # Real-time data
│   │                   └── right-panel/   # Live notifications
│   ├── layout/             # Layout components (sidebar, navigation)
│   └── ui/                 # Shadcn UI components
├── hooks/                  # Custom React hooks
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-notifications.ts # Notifications API hook
└── lib/                    # Utilities and helpers
    └── utils.ts            # Utility functions
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shailxD/charger-digital-twin-ui.git
cd charger-digital-twin-ui
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `pnpm dev`          | Start development server |
| `pnpm build`        | Build for production     |
| `pnpm start`        | Start production server  |
| `pnpm lint`         | Run ESLint               |
| `pnpm format:check` | Check code formatting    |
| `pnpm format:write` | Fix code formatting      |

## 🔌 API Integration

The project uses custom hooks for API simulation as specified in the assignment:

### useNotifications()

Simulates: `GET /api/charger/:id/notifications`

```typescript
const { notifications, isLoading, error, refetch } = useNotifications(chargerId);
```

**Response format:**

```json
[
  {
    "type": "warning",
    "statusID": "000004",
    "message": "OverCurrentFailure",
    "timestamp": "2025-06-13T09:04:34"
  }
]
```

## 🎨 Design Reference

- **Figma Design**: [Zynetic Digital Twin](https://www.figma.com/design/F6yKhTlL9Cb4uk1NK0UkA0/Zynetic-Digital-Twin)
- All icons extracted directly from Figma (no external icon libraries)
- Colors, typography, and spacing match the design exactly

## 📝 Assumptions

1. Desktop-first design (tablet/mobile views are bonus)
2. Mock data is used for API simulation
3. All icons are extracted from the provided Figma file
4. Dark theme is the primary/only theme

## 🎯 Design Challenges

1. **Complex SVG icons** - Extracted and optimized all icons from Figma as React components
2. **Responsive panels** - Implemented flexible grid layout for the three-panel design
3. **Real-time data simulation** - Created hooks to simulate API behavior with loading states
4. **Pixel-perfect alignment** - Careful attention to spacing, colors, and typography

## 📄 License

This project is for assessment purposes only.

---

Built with using Next.js and Tailwind CSS
