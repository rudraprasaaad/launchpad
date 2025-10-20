"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu2, IconX, IconRocket } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ============================================================================
// Navbar Container
// ============================================================================

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ children, className }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        className,
      )}
    >
      {children}
    </motion.nav>
  );
}

// ============================================================================
// Desktop Nav Body
// ============================================================================

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function NavBody({ children, className }: NavBodyProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "mx-4 mt-4 hidden h-16 items-center justify-between rounded-2xl px-6 transition-all duration-300 md:flex",
        isScrolled
          ? "glass-effect border-dark-border border shadow-lg"
          : "bg-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}

// ============================================================================
// Navbar Logo
// ============================================================================

interface NavbarLogoProps {
  className?: string;
}

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <Link href="/" className={cn("z-50 flex items-center gap-2", className)}>
      <div className="from-primary-600 to-accent-600 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
        <IconRocket className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-white">LaunchPad</span>
    </Link>
  );
}

// ============================================================================
// Nav Items (Desktop)
// ============================================================================

interface NavItem {
  name: string;
  link: string;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
}

export function NavItems({ items, className }: NavItemsProps) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      {items.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-dark-text-secondary group relative text-sm font-medium transition-colors hover:text-white"
        >
          {item.name}
          <span className="from-primary-500 to-accent-500 absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </div>
  );
}

// ============================================================================
// Navbar Button
// ============================================================================

interface NavbarButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function NavbarButton({
  children,
  variant = "primary",
  className,
  onClick,
}: NavbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg px-6 py-2 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "gradient-bg text-white hover:scale-105 hover:opacity-90",
        variant === "secondary" &&
          "glass-effect border-dark-border hover:bg-dark-surface/70 border text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

// ============================================================================
// Mobile Navigation
// ============================================================================

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNav({ children, className }: MobileNavProps) {
  return <div className={cn("md:hidden", className)}>{children}</div>;
}

// ============================================================================
// Mobile Nav Header
// ============================================================================

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileNavHeader({ children, className }: MobileNavHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "mx-4 mt-4 flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300",
        isScrolled
          ? "glass-effect border-dark-border border shadow-lg"
          : "bg-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}

// ============================================================================
// Mobile Nav Toggle
// ============================================================================

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileNavToggle({
  isOpen,
  onClick,
  className,
}: MobileNavToggleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "glass-effect hover:bg-dark-surface/70 z-50 rounded-lg p-2 transition-colors",
        className,
      )}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <IconX className="h-6 w-6 text-white" />
      ) : (
        <IconMenu2 className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

// ============================================================================
// Mobile Nav Menu
// ============================================================================

interface MobileNavMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function MobileNavMenu({
  children,
  isOpen,
  onClose,
  className,
}: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "glass-effect border-dark-border absolute top-20 right-4 left-4 overflow-hidden rounded-2xl border",
              className,
            )}
          >
            <div className="space-y-6 px-6 py-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
