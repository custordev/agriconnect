// components/ui/breadcrumb.tsx
import { CornerUpLeft } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="space-x-2">
      {items.map((item, index) => (
        <span key={index}>
          <a href={item.href} className="">
            <CornerUpLeft className="text-green-800 " />
          </a>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};
