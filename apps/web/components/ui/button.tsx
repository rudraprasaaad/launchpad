import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LaunchPad - Ship Your SaaS in Days, Not Months",
    template: "%s | LaunchPad",
  },
  description:
    "Production-ready multi-tenant SaaS boilerplate with Next.js, tRPC, Better Auth, Stripe, and more. Type-safe from database to UI.",
  keywords: [
    "SaaS boilerplate",
    "Next.js",
    "TypeScript",
    "tRPC",
    "Drizzle ORM",
    "Better Auth",
    "Stripe",
    "Multi-tenant",
  ],
  authors: [{ name: "LaunchPad Team" }],
  creator: "LaunchPad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://launchpad.dev",
    title: "LaunchPad - Ship Your SaaS in Days, Not Months",
    description: "Production-ready SaaS boilerplate with everything you need",
    siteName: "LaunchPad",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchPad - Ship Your SaaS in Days, Not Months",
    description: "Production-ready SaaS boilerplate with everything you need",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
