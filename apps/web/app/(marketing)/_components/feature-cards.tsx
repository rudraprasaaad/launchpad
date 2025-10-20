"use client";

import { motion } from "motion/react";
import { IconUsers, IconCreditCard, IconShield } from "@tabler/icons-react";

const CARDS = [
  {
    title: "Team Management",
    icon: IconUsers,
    description: "Invite members, manage roles, and collaborate",
    rotation: 0,
    zIndex: 30,
    bgColor: "from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Billing Dashboard",
    icon: IconCreditCard,
    description: "Stripe integration with subscription management",
    rotation: -5,
    zIndex: 20,
    bgColor: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Authentication",
    icon: IconShield,
    description: "Email, OAuth, and magic link authentication",
    rotation: 5,
    zIndex: 10,
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
];

export function FeatureCards() {
  return (
    <div className="relative flex h-[550px] w-full items-center justify-center">
      {CARDS.map((card, index) => {
        const Icon = card.icon;
        const yOffset = index * 30;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 100, rotate: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: yOffset,
              rotate: card.rotation,
              scale: 1,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: yOffset - 20,
              rotate: 0,
              scale: 1.02,
              zIndex: 40,
            }}
            className="glass-effect border-primary-500/10 absolute w-full max-w-md cursor-pointer rounded-xl border p-6"
            style={{
              zIndex: card.zIndex,
              background: `linear-gradient(135deg, var(--color-dark-surface) 0%, var(--color-dark-surface) 100%)`,
            }}
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
              <div
                className={`h-14 w-14 rounded-xl bg-gradient-to-br ${card.bgColor} flex items-center justify-center`}
              >
                <Icon className="text-primary-400 h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-dark-text-tertiary text-sm">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-3">
              {[
                { label: "Users", value: 85 },
                { label: "Active", value: 72 },
                { label: "Growth", value: 91 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-dark-text-tertiary mb-1 flex justify-between text-xs">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="bg-dark-border h-2 overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{
                        delay: index * 0.15 + i * 0.1,
                        duration: 1,
                      }}
                      viewport={{ once: true }}
                      className="from-primary-500 to-accent-500 h-full rounded-full bg-gradient-to-r"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer stats */}
            <div className="border-dark-border/50 mt-6 flex justify-between border-t pt-4 text-sm">
              <div>
                <div className="text-dark-text-tertiary text-xs">Total</div>
                <div className="font-semibold text-white">
                  {Math.floor(Math.random() * 500 + 100)}
                </div>
              </div>
              <div>
                <div className="text-dark-text-tertiary text-xs">This Week</div>
                <div className="font-semibold text-green-400">
                  +{Math.floor(Math.random() * 50 + 10)}
                </div>
              </div>
              <div>
                <div className="text-dark-text-tertiary text-xs">Status</div>
                <div className="text-primary-400 font-semibold">Active</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
