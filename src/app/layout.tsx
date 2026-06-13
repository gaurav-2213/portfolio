import { PortfolioClient } from "@/components/PortfolioClient";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Sharma | Software Engineering Student & Full Stack Developer",
  description:
    "Portfolio of Gaurav Sharma — Software Engineering student specializing in Full Stack Development, Real-Time Applications, AI/ML systems, and Competitive Programming.",
  keywords: [
    "Gaurav Sharma",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
    "Mohali",
    "Competitive Programming",
  ],
  authors: [{ name: "Gaurav Sharma" }],
  creator: "Gaurav Sharma",
  openGraph: {
    title: "Gaurav Sharma | Software Engineering Student",
    description:
      "Full Stack Developer, AI Enthusiast, and Competitive Programmer based in Mohali, Punjab.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Sharma | Portfolio",
    description:
      "Software Engineering student passionate about Full Stack Development and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
