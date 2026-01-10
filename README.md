# Kris's Portfolio (OS-Style Resume)

A modern, interactive portfolio themed after a desktop operating system. This project showcases my work, skills, and experience through a familiar, intuitive interface that seamlessly adapts between Desktop and Mobile environments.

## 🌟 Features

### 🖥️ Desktop Experience
- **Interactive Environment**: A fully functional macOS-style desktop with draggable windows, a dock, and a menu bar.
- **Finder (Projects)**: Browse projects like files in a folder system.
- **Terminal (Skills)**: Execute commands or view a skills matrix in a developer-friendly interface.
- **Files Support**: Open TXT, PDF, and Image files directly in custom windows.

### 📱 Mobile Experience
- **Mobile OS Interface**: A dedicated touch-friendly UI optimized for smaller screens (`< 640px`).
- **Home Screen**: iOS-inspired launcher with widgets and a navigation dock.
- **Custom Apps**:
    - **Contact**: A social hub with large, accessible cards for Quick connections.
    - **Safari**: A mobile browser experience for reading blog posts.
    - **Resume Viewer**: Integrated PDF viewer tailored for mobile reading.
- **Smart Adjustments**: Automatic UI adaptions (e.g., hidden profile photos on small screens for better spacing).

### 🎨 UI & UX
- **Glassmorphism**: High-end aesthetic using Tailwind CSS 4 backdrop blurs.
- **Animations**: Powered by **GSAP** for smooth window dragging and complex transitions.
- **Responsive**: Not just "shrunk down" — a completely separate, optimized layout for mobile users.

## 🏗️ Architecture & Performance

This project uses **Dynamic Imports** to ensure optimal performance across devices.

- **Code Splitting**: The `DesktopLayout` and `MobileLayout` are bundled separately.
- **Conditional Loading**:
    - If a user visits on **Mobile**, they download *only* the mobile chunks (avoiding heavy desktop 3D/drag logic).
    - If a user visits on **Desktop**, they get the full desktop experience.
    - This is handled in `app/page.tsx` using `next/dynamic` with `{ ssr: false }`.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) (GreenSock)
- **PDF Handling**: [React-PDF](https://github.com/wojtekmaj/react-pdf)
- **Runtime**: [Bun](https://bun.sh/)

## 🚀 Getting Started

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build and Production

To create an optimized production build:

```bash
bun run build
bun start
```

## 📁 Project Structure

```text
├── app/
│   ├── components/
│   │   ├── mobile/    # 📱 Mobile-specific components (Home, Apps, Layout)
│   │   ├── DesktopLayout.tsx  # 🖥️ Desktop wrapper
│   │   └── ...        # Shared/Desktop components
│   ├── constants/     # Centralized data (Projects, Blogs, Socials)
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # 🔀 Entry point (handles Dynamic Imports)
├── public/
│   ├── files/         # PDF Resumes and documents
│   └── icons/         # OS assets
└── README.md          # Project documentation
```

---

Built with ❤️ by [Kris](https://github.com/KrisAdw)
