import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

import { GiFruitBowl } from "react-icons/gi";

const FooterColumn: React.FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-green-800 mb-4">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <Link
            href={link.href}
            className="text-gray-600 hover:text-green-700 transition duration-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <GiFruitBowl className="h-6 w-6 text-[#004D40]" />
              <span className="text-2xl font-bold text-[#004D40]">
                Agriconnect
              </span>
            </Link>
          </div>
          <FooterColumn
            title="Products"
            links={[
              { label: "Fresh Fruits", href: "/products/fruits" },
              { label: "Vegetables", href: "/products/vegetables" },
              { label: "Export Services", href: "/services/export" },
              { label: "Quality Assurance", href: "/services/quality" },
              { label: "Country Coverage", href: "/coverage" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About us", href: "/about" },
              { label: "Customer stories", href: "/stories" },
              { label: "Press", href: "/press" },
              { label: "Careers", href: "/careers" },
              { label: "Contact us", href: "/contact" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { label: "Blog", href: "/blog" },
              { label: "FAQ", href: "/faq" },
              { label: "Help centre", href: "/help" },
              { label: "Partners", href: "/partners" },
              { label: "Terms and privacy", href: "/terms" },
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} Agriconnect. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href=""
              className="text-gray-600 hover:text-green-700 transition duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-green-700 transition duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-green-700 transition duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href=""
              className="text-gray-600 hover:text-green-700 transition duration-300"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
