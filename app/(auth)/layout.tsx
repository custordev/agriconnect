import SiteFooter from "@/components/ui/(global)/site-footer";
import Header from "@/components/ui/(global)/site-header";
import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-24 lg:px-8">{children}</div>
      <SiteFooter />
    </div>
  );
}
