"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wine, ShoppingCart, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Wine className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold">Fox Brook Wine</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/wines"
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                pathname === "/wines" ? "text-red-600" : "text-muted-foreground"
              }`}
            >
              Our Wines
            </Link>
            <Link 
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                pathname === "/about" ? "text-red-600" : "text-muted-foreground"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                pathname === "/contact" ? "text-red-600" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="tel:08101023889">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}