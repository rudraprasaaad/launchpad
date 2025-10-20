"use client";

import { IconMenu2, IconRocket, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Tech Stack",
    href: "#tech-stack",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Documentation",
    href: "/docs",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect border-dark-border border-b" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="from-primary-600 to-accent-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
              <IconRocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">LaunchPad</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-dark-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="grdient-bg rounded-lg px-6 py-2 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="glass-effect rounded-lg p-2 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <IconX className="size-6 text-white" />
            ) : (
              <IconMenu2 className="size-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          className="glass-effect border-dark-border border-t md:hidden"
        >
          <div className="space-y-3 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-dark-text-secondary hover:bg-dark-surface/50 block rounded-lg px-4 py-2 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="gradient-bg block rounded-lg px-4 py-2 text-center font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
