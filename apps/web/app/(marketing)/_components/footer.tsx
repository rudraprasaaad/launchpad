import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandX,
  IconRocket,
} from "@tabler/icons-react";
import Link from "next/link";

const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Documentation", href: "/docs" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Examples", href: "/examples" },
      { label: "Templates", href: "/templates" },
    ],
  },
  community: {
    title: "Community",
    links: [
      { label: "Discord", href: "https://discord.gg/launchpad" },
      { label: "GitHub", href: "https://github.com/launchpad" },
      { label: "Twitter/X", href: "https://twitter.com/launchpad" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "License", href: "/license" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};

const SOCIAL_LINKS = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/launchpad",
    label: "GitHub",
  },
  {
    icon: IconBrandDiscord,
    href: "https://discord.gg/launchpad",
    label: "Discord",
  },
  {
    icon: IconBrandX,
    href: "https://twitter.com/launchpad",
    label: "Twitter/X",
  },
];

/**
 * Site footer with navigation and social links
 * @returns {JSX.Element} Footer
 */
export function Footer() {
  return (
    <footer className="bg-dark-bg border-dark-border relative border-t">
      <div className="section-container">
        {/* Main footer content */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="from-primary-600 to-accent-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                <IconRocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">LaunchPad</span>
            </Link>
            <p className="text-dark-text-tertiary text-sm">
              Ship SaaS faster with production-ready infrastructure
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([key, section]) => (
            <div key={key}>
              <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-dark-text-tertiary text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-dark-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect hover:bg-dark-surface/70 flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="text-dark-text-tertiary h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-dark-text-tertiary text-sm">
            © 2025 LaunchPad • Built with ❤️ by developers
          </p>
        </div>
      </div>
    </footer>
  );
}
