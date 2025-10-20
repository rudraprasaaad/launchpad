"use client";

import { motion } from "motion/react";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconDatabase,
  IconShield,
  IconRefresh,
} from "@tabler/icons-react";

const LAYERS = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    icon: IconBrandNextjs,
    techs: ["Next.js 15", "React", "TailwindCSS"],
  },
  {
    name: "API",
    color: "from-purple-500 to-pink-500",
    icon: IconBrandReact,
    techs: ["tRPC", "REST APIs"],
  },
  {
    name: "Auth",
    color: "from-green-500 to-emerald-500",
    icon: IconShield,
    techs: ["Better Auth", "OAuth"],
  },
  {
    name: "Database",
    color: "from-orange-500 to-red-500",
    icon: IconDatabase,
    techs: ["Drizzle ORM", "PostgreSQL"],
  },
  {
    name: "Queue",
    color: "from-yellow-500 to-orange-500",
    icon: IconRefresh,
    techs: ["BullMQ", "Redis"],
  },
];

export function ArchitectureDiagram() {
  return (
    <div className="glass-effect rounded-xl p-8">
      <div className="text-dark-text-secondary mb-6 text-sm">
        LaunchPad Stack
      </div>

      <div className="space-y-4">
        {LAYERS.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect group cursor-pointer rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-lg bg-gradient-to-br ${layer.color} flex flex-shrink-0 items-center justify-center`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 font-semibold text-white">
                    {layer.name}
                  </div>
                  <div className="text-dark-text-tertiary text-sm">
                    {layer.techs.join(" • ")}
                  </div>
                </div>
              </div>

              {/* Connecting line to next layer */}
              {index < LAYERS.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 16 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="from-primary-500 mx-auto my-2 w-0.5 bg-gradient-to-b to-transparent"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
