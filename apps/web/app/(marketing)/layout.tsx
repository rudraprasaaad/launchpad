import { Navbar } from "@/components/shared/navbar";
import type { ReactNode } from "react";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative">{children}</main>
    </>
  );
}
