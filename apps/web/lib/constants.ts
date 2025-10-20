import {
  IconRocket,
  IconShield,
  IconUsers,
  IconCreditCard,
  IconMail,
  IconPalette,
  IconRefresh,
  IconChartBar,
} from "@tabler/icons-react";
import type { Stat, Feature, Testimonial, FAQItem } from "@/types/landing";

export const STATS: Stat[] = [
  {
    label: "Developer Hours Saved",
    value: "500+",
    description: "Skip infrastructure setup",
  },
  {
    label: "Type-Safe APIs",
    value: "100%",
    description: "End-to-end TypeScript",
  },
  {
    label: "Deployment Time",
    value: "< 10min",
    description: "From clone to production",
  },
  {
    label: "Performance Score",
    value: "99/100",
    description: "Lighthouse optimized",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: IconShield,
    title: "Authentication (Email, OAuth, Magic Links)",
    description: "Complete auth system with Better Auth",
  },
  {
    icon: IconUsers,
    title: "Team & workspace management",
    description: "Multi-tenant architecture built-in",
  },
  {
    icon: IconCreditCard,
    title: "Stripe subscriptions & billing",
    description: "Payment processing ready to go",
  },
  {
    icon: IconMail,
    title: "Email & notification system",
    description: "Background job processing with BullMQ",
  },
  {
    icon: IconPalette,
    title: "Beautiful UI components (shadcn/ui)",
    description: "Customizable component library",
  },
  {
    icon: IconRefresh,
    title: "Background job processing",
    description: "Queue system for async tasks",
  },
  {
    icon: IconChartBar,
    title: "Admin dashboard templates",
    description: "Pre-built dashboard layouts",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "LaunchPad saved me 6 weeks of setup time. I launched my MVP in 2 weeks instead of 2 months.",
    body: "The authentication and billing integration alone would have taken me weeks to get right. Now I focus purely on my unique features.",
    author: {
      name: "Alex Chen",
      title: "Indie Hacker, InvoiceFlow",
      avatar: "/avatars/alex.jpg",
    },
  },
  {
    quote: "The type safety across the entire stack is game-changing.",
    body: "No more runtime errors from API mismatches. Everything is caught at compile time.",
    author: {
      name: "Sarah Martinez",
      title: "Agency Owner, DevStudio",
      avatar: "/avatars/sarah.jpg",
    },
  },
  {
    quote:
      "Best investment for our agency. We use it for all client projects now.",
    body: "Saved us thousands in development costs and helps us deliver faster.",
    author: {
      name: "David Kim",
      title: "SaaS Founder, TaskFlow",
      avatar: "/avatars/david.jpg",
    },
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What's included in LaunchPad?",
    answer:
      "LaunchPad includes a complete Next.js 15 application with authentication (Better Auth), Stripe billing, team management, tRPC + REST APIs, Drizzle ORM, background workers, and a beautiful shadcn/ui component library. Everything is production-ready and fully type-safe.",
  },
  {
    question: "Is LaunchPad suitable for production?",
    answer:
      "Absolutely! LaunchPad follows industry best practices and is built with production-grade tools. It includes proper error handling, logging, security measures, and performance optimizations.",
  },
  {
    question: "Can I use my own database/hosting?",
    answer:
      "Yes! LaunchPad works with any PostgreSQL database (Neon, Supabase, AWS RDS, etc.) and can be deployed to Vercel, Railway, AWS, or any Node.js hosting platform.",
  },
  {
    question: "How do I customize the styling?",
    answer:
      "All UI components use Tailwind CSS and shadcn/ui, making customization straightforward. Simply modify the Tailwind theme or component styles to match your brand.",
  },
  {
    question: "What's the license model?",
    answer:
      "LaunchPad uses an MIT license. You can use it for unlimited projects, modify it freely, and use it commercially without any restrictions.",
  },
];
