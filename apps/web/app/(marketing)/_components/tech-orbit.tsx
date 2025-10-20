"use client";

import { motion } from "motion/react";
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconDatabase,
  IconBrandStripe,
  IconShield,
  IconRefresh,
  IconBrandReact,
  IconBrandTailwind,
  IconRocket,
} from "@tabler/icons-react";

const TECH_ITEMS = [
  // Core (inner ring)
  { name: "Next.js", icon: IconBrandNextjs, ring: 1, angle: 0 },
  { name: "TypeScript", icon: IconBrandTypescript, ring: 1, angle: 120 },
  { name: "React", icon: IconBrandReact, ring: 1, angle: 240 },

  // Data (middle ring)
  { name: "Drizzle", icon: IconDatabase, ring: 2, angle: 45 },
  { name: "PostgreSQL", icon: IconDatabase, ring: 2, angle: 135 },
  { name: "Redis", icon: IconRefresh, ring: 2, angle: 225 },
  { name: "Tailwind", icon: IconBrandTailwind, ring: 2, angle: 315 },

  // Services (outer ring)
  { name: "Stripe", icon: IconBrandStripe, ring: 3, angle: 0 },
  { name: "Better Auth", icon: IconShield, ring: 3, angle: 90 },
  { name: "BullMQ", icon: IconRefresh, ring: 3, angle: 180 },
  { name: "tRPC", icon: IconBrandTypescript, ring: 3, angle: 270 },
];

/**
 * Animated orbital tech stack visualization
 * @returns {JSX.Element} Tech orbit
 */
export function TechOrbit() {
  const containerSize = 600;
  const centerX = containerSize / 2;
  const centerY = containerSize / 2;

  return (
    <div
      className="relative mx-auto w-full max-w-3xl"
      style={{ height: `${containerSize}px` }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="from-primary-600 to-accent-600 animate-pulse-glow flex items-center justify-center rounded-full bg-gradient-to-br"
        style={{
          position: "absolute",
          width: "128px",
          height: "128px",
          left: `${centerX - 64}px`,
          top: `${centerY - 64}px`,
        }}
      >
        <span className="text-2xl font-bold text-white">
          <IconRocket className="size-6" />
        </span>
      </motion.div>

      {[1, 2, 3].map((ring) => {
        const ringSize = ring * 150;
        return (
          <motion.div
            key={ring}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: ring * 0.2 }}
            viewport={{ once: true }}
            className="border-primary-500/20 rounded-full border"
            style={{
              position: "absolute",
              width: `${ringSize}px`,
              height: `${ringSize}px`,
              left: `${centerX - ringSize / 2}px`,
              top: `${centerY - ringSize / 2}px`,
            }}
          />
        );
      })}

      {TECH_ITEMS.map((tech, index) => {
        const Icon = tech.icon;
        const radius = tech.ring * 75;
        const angleRad = (tech.angle * Math.PI) / 180;
        const x = centerX + Math.cos(angleRad) * radius - 24;
        const y = centerY + Math.sin(angleRad) * radius - 24;

        return (
          <motion.div
            key={`${tech.name}-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2 }}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            <div className="glass-effect group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg p-3">
              <Icon className="text-primary-400 group-hover:text-primary-300 h-6 w-6 transition-colors" />
              <div
                className="text-dark-text-tertiary bg-dark-surface pointer-events-none rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "8px",
                }}
              >
                {tech.name}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
