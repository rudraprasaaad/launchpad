"use client";

import { motion } from "motion/react";
import {
  IconBrandTypescript,
  IconBrandGolang,
  IconBrandRust,
  IconBrandPython,
} from "@tabler/icons-react";

const BACKENDS = [
  {
    name: "TypeScript",
    icon: IconBrandTypescript,
    status: "live",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Go",
    icon: IconBrandGolang,
    status: "soon",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Rust",
    icon: IconBrandRust,
    status: "soon",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Python",
    icon: IconBrandPython,
    status: "roadmap",
    color: "from-yellow-500 to-yellow-600",
  },
];

export function MultiLanguageDiagram() {
  return (
    <div className="relative">
      {/* Center hub */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-effect mb-8 rounded-xl p-8 text-center"
      >
        <div className="gradient-text mb-2 text-2xl font-bold">
          LaunchPad Core
        </div>
        <div className="text-dark-text-tertiary text-sm">OpenAPI Contract</div>
      </motion.div>

      {/* Backend options */}
      <div className="grid grid-cols-2 gap-4">
        {BACKENDS.map((backend, index) => {
          const Icon = backend.icon;
          const isActive = backend.status === "live";

          return (
            <motion.div
              key={backend.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={isActive ? { scale: 1.05 } : {}}
              className={`glass-effect rounded-lg p-6 text-center ${
                !isActive && "opacity-50"
              }`}
            >
              <div
                className={`h-16 w-16 rounded-lg bg-gradient-to-br ${backend.color} mx-auto mb-4 flex items-center justify-center`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div className="mb-1 font-semibold text-white">
                {backend.name}
              </div>
              <div className="text-dark-text-tertiary text-xs tracking-wide uppercase">
                {backend.status === "live" && (
                  <span className="text-green-400">● Live Now</span>
                )}
                {backend.status === "soon" && (
                  <span className="text-yellow-400">Coming Soon</span>
                )}
                {backend.status === "roadmap" && (
                  <span className="text-gray-400">Roadmap</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
