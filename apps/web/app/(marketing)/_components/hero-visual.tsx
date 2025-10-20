"use client";

import { motion } from "motion/react";

export function HeroVisual() {
  return (
    <div className="relative h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="glass-effect mx-auto max-w-2xl rounded-xl p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <pre className="overflow-hidden text-left text-sm">
          <code className="language-typescript">
            <span className="text-primary-400">export</span>{" "}
            <span className="text-accent-400">const</span>{" "}
            <span className="text-green-400">users</span> ={" "}
            <span className="text-yellow-400">pgTable</span>(
            <span className="text-green-300">'users'</span>, {"{"}
            {"\n"}
            {"  "}id: <span className="text-yellow-400">text</span>(
            <span className="text-green-300">'id'</span>).
            <span className="text-blue-400">primaryKey</span>(),{"\n"}
            {"  "}email: <span className="text-yellow-400">text</span>(
            <span className="text-green-300">'email'</span>).
            <span className="text-blue-400">notNull</span>(),{"\n"}
            {"  "}role: <span className="text-yellow-400">varchar</span>(
            <span className="text-green-300">'role'</span>),{"\n"}
            {"});"}
          </code>
        </pre>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="glass-effect animate-float absolute -top-10 -left-10 rounded-lg p-4"
        style={{ animationDelay: "0s" }}
      >
        <div className="text-sm text-green-400">✓ Type-safe</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="glass-effect animate-float absolute -top-10 -right-10 rounded-lg p-4"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-sm text-blue-400">⚡ Fast</div>
      </motion.div>
    </div>
  );
}
