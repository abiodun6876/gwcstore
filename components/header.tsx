"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Phone, Cake, Shirt, Utensils, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-amber-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Cake className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold text-amber-800">GCW Store</span>
            </Link>
          </div>
          
          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/pastries"
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                pathname === "/pastries" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-1">
                <Cake className="h-4 w-4" />
                Pastries
              </div>
            </Link>
            <Link 
              href="/fashion"
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                pathname === "/fashion" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-1">
                <Shirt className="h-4 w-4" />
                Fashion
              </div>
            </Link>
            <Link 
              href="/african-foods"
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                pathname === "/african-foods" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-1">
                <Utensils className="h-4 w-4" />
                African Foods
              </div>
            </Link>
            <Link 
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                pathname === "/about" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                pathname === "/contact" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
           

            {/* Other icons (hidden on mobile when menu is open) */}
            <div className={`${isMobileMenuOpen ? 'hidden' : 'flex'} items-center space-x-4`}>
              <Button variant="ghost" size="icon" asChild>
                <a href="tel:+1 (905) 922-7715">
                  <Phone className="h-5 w-5 text-amber-600" />
                </a>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5 text-amber-600" />
                <span className="sr-only">Cart</span>
              </Button>
             {/* Mobile Menu Button (visible on mobile) */}
             <Button 
  variant="ghost" 
  size="lg"
  className="md:hidden p-2"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  {isMobileMenuOpen ? (
    <X className="h-6 w-6 text-amber-700 dark:text-amber-400" />
  ) : (
    <Menu className="h-6 w-6 text-amber-600" />
  )}
  <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
</Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (shown on mobile when toggled) */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/pastries"
                className={`flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === "/pastries" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Cake className="h-4 w-4" />
                Pastries
              </Link>
              <Link 
                href="/fashion"
                className={`flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === "/fashion" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shirt className="h-4 w-4" />
                Fashion
              </Link>
              <Link 
                href="/african-foods"
                className={`flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === "/african-foods" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Utensils className="h-4 w-4" />
                African Foods
              </Link>
              <Link 
                href="/about"
                className={`px-2 py-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === "/about" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact"
                className={`px-2 py-1 text-sm font-medium transition-colors hover:text-amber-600 ${
                  pathname === "/contact" ? "text-amber-600" : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}