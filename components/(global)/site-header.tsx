/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Sprout,
  Search,
  ShoppingCart,
  User,
  Bell,
  ChevronDown,
} from "lucide-react";
import { useForm } from "react-hook-form";
import useCartStore from "@/store/cartStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

interface SearchFormValues {
  search: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const router = useRouter();
  const form = useForm<SearchFormValues>();
  const { data: session } = useSession();

  const handleLogout = async () => {
    // Implement your logout logic here
  };

  const getInitials = (name?: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-white text-[#15130b] py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>⚡ Free delivery on orders over $50</span>
          <span className="hidden md:inline">Support: +256 705801633</span>
        </div>
      </div>

      {/* Main header */}
      <nav className="bg-[#15130b] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">AgriConnect</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/marketplace"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/farmers"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Farmers
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 px-4 pl-10 rounded-full bg-amber-50 border border-[#423d16] text-[#423d16] placeholder-[#423d16] focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#423d16]" />
              </form>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-yellow-500"
                onClick={() => router.push("/cart")}
              >
                <ShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {items.length}
                </span>
              </Button>

              {/* User Menu */}
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hidden h-10 w-10 rounded-full lg:inline-flex hover:bg-yellow-500"
                    >
                      <Avatar className="h-8 w-8">
                        {/* <AvatarImage alt={session.user.name} /> */}
                        <AvatarFallback className="bg-yellow-500 text-white">
                          {getInitials(session.user.name)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push("/profile")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:inline-flex hover:bg-yellow-500"
                >
                  <Link href="/login">
                    <User className="h-6 w-6 text-white" />
                  </Link>
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-yellow-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-[#423d16]/30 py-4">
              <div className="space-y-4">
                {/* Mobile Search */}
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative px-4"
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 px-4 pl-10 rounded-full bg-amber-50 border border-[#423d16] text-[#423d16] placeholder-[#15130b]-300/70 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                  />
                  <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#15130b]-300/70" />
                </form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2 px-4">
                  <Link
                    href="/"
                    className="block py-2 text-white hover:text-yellow-400"
                  >
                    Home
                  </Link>
                  <Link
                    href="/marketplace"
                    className="block py-2 text-white hover:text-yellow-400"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="/farmers"
                    className="block py-2 text-white hover:text-yellow-400"
                  >
                    Farmers
                  </Link>
                  <Link
                    href="/about"
                    className="block py-2 text-white hover:text-yellow-400"
                  >
                    About
                  </Link>
                  {session ? (
                    <button
                      onClick={() => signOut()}
                      className="block py-2 text-white hover:text-yellow-400"
                    >
                      Log out
                    </button>
                  ) : (
                    <button
                      onClick={() => signIn()}
                      className="block py-2 text-white hover:text-yellow-400"
                    >
                      Log in
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Curved bottom edge */}
      {/* <div className="relative h-4 bg-white">
        <div className="absolute inset-x-0 -top-4 h-4 bg-[#004D40]">
          <div className="h-full w-full bg-white rounded-t-[100%]" />
        </div>
      </div> */}
    </header>
  );
};

export default Header;
