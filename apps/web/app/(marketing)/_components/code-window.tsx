"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CODE_TABS = [
  {
    name: "schema.ts",
    content: `// Type-safe database schema
export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  tenantId: integer('tenant_id').notNull(),
  role: varchar('role', { length: 50 }).default('MEMBER'),
});`,
  },
  {
    name: "router.ts",
    content: `// Type-safe API endpoint
export const userRouter = router({
  getProfile: protectedProcedure
    .query(async ({ ctx }) => {
      return await db.query.users.findFirst({
        where: eq(users.id, ctx.user.id)
      });
    }),
});`,
  },
  {
    name: "page.tsx",
    content: `// Type-safe React component
export default function ProfilePage() {
  const { data } = trpc.user.getProfile.useQuery();
  
  return <div>{data?.email}</div>;
  //            ^ Fully typed!
}`,
  },
];

/**
 * Interactive code editor mockup
 * @returns {JSX.Element} Code window
 */
export function CodeWindow() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="glass-effect overflow-hidden rounded-xl">
        {/* Window controls */}
        <div className="bg-dark-surface/50 border-dark-border flex items-center gap-2 border-b px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Tabs */}
        <div className="bg-dark-surface/30 border-dark-border flex border-b">
          {CODE_TABS.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeTab === index
                  ? "bg-dark-surface border-primary-500 border-b-2 text-white"
                  : "text-dark-text-tertiary hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Code content */}
        <div className="relative min-h-[300px] p-6">
          <AnimatePresence mode="wait">
            <motion.pre
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="overflow-x-auto text-sm"
            >
              <code className="language-typescript text-dark-text-secondary">
                {CODE_TABS[activeTab]?.content}
              </code>
            </motion.pre>
          </AnimatePresence>

          {/* Type info popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-effect absolute right-8 bottom-8 rounded-lg p-3 text-xs"
          >
            <div className="mb-1 text-green-400">✓ All types validated</div>
            <div className="text-dark-text-tertiary">0 errors, 0 warnings</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
