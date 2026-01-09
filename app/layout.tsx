import type { Metadata } from "next";
import "./globals.css";
import { georama, robotoMono } from "./font";

export const metadata: Metadata = {
  title: "Kris's Portfolio",
  description: "A Portfolio website of Kris Adiwinata, inspired by MacOS-style interface with a window manager. Distinquished by its unique design and functionality.",
  icons: {
    icon: "/macbook.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${georama.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

