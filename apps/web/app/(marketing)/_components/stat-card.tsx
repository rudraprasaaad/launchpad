"use client";

import { motion } from "motion/react";
import type { Stat } from "@/types/landing";

export function StatCard({ label, value, description }: Stat) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="glass-effect group rounded-xl p-8 text-left"
    >
      <div className="text-dark-text-secondary mb-2 text-sm">{label}</div>
      <div className="group-hover:gradient-text mb-2 text-5xl font-bold text-white transition-all">
        {value}
      </div>
      <div className="text-dark-text-tertiary text-sm">{description}</div>
    </motion.div>
  );
}
