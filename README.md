# Kris's Portfolio (OS-Style Resume)

A modern, interactive portfolio themed after a desktop operating system. This project showcases my work, skills, and experience through a familiar, intuitive interface.

## 🌟 Features

- **Interactive Desktop**: A fully functional desktop environment with icons and a Taskbar/Navbar.
- **Finder (Projects)**: Explore my work through a file-browsing interface. Highlights include:
  - Nike Ecommerce Website
  - AI Resume Analyzer
  - Food Delivery App
- **Safari (Articles)**: Integrated blog posts and technical guides.
- **Terminal (Skills)**: A developer-centric view of my technical stack and expertise.
- **Photos (Gallery)**: A visual showcase of memories and highlights.
- **Contact & Resume**: Easily accessible links to get in touch or view my professional CV.
- **Glassmorphism UI**: High-end aesthetic using Tailwind CSS 4 backdrop blurs and semi-transparent layers.
- **Responsive Design**: Optimized for a premium experience across different devices.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)

## 🚀 Getting Started

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

```bash
bun install
```

### Development Server

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Production

To create an optimized production build:

```bash
bun run build
bun start
```

## 📁 Project Structure

```text
├── app/
│   ├── components/    # Reusable UI components (Navbar, Clock, etc.)
│   ├── constants/     # Project data and configurations
│   ├── globals.css    # Global styles and Tailwind 4 layers
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main desktop page
├── public/
│   ├── icons/         # OS and app icons
│   └── images/        # Project screenshots and assets
└── README.md          # Project documentation
```

---

Built with ❤️ by [Kris](https://github.com/KrisAdw)
