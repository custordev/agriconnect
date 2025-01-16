'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface HeaderProps {
  userRole?: 'farmer' | 'consumer' | 'driver' | null
}

export function Header({ userRole }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = {
    farmer: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'My Products', href: '/products' },
      { name: 'Orders', href: '/orders' },
      { name: 'Analytics', href: '/analytics' },
    ],
    consumer: [
      { name: 'Browse', href: '/products' },
      { name: 'My Orders', href: '/orders' },
      { name: 'Saved', href: '/saved' },
    ],
    driver: [
      { name: 'Deliveries', href: '/deliveries' },
      { name: 'Schedule', href: '/schedule' },
      { name: 'History', href: '/history' },
    ],
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-600">FarmConnect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {userRole && navigationLinks[userRole]?.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {userRole === 'consumer' && (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    3
                  </Badge>
                </Button>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </>
            )}

            {userRole ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">Register</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            {userRole ? (
              navigationLinks[userRole]?.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))
            ) : (
              <div className="space-y-2">
                <Link
                  href="/auth/register?role=farmer"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Register as Farmer
                </Link>
                <Link
                  href="/auth/register?role=consumer"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Register as Consumer
                </Link>
                <Link
                  href="/auth/register?role=driver"
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Register as Driver
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

