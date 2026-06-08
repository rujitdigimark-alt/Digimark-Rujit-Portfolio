"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-navy">
          DigIT<span className="text-accent">Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center gap-1 text-gray-700 hover:text-accent font-medium transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </div>
            {/* Dropdown */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-top-2">
                <Link href="/#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent">
                  Web Development
                </Link>
                <Link href="/#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent">
                  Campaign Management
                </Link>
                <Link href="/#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent">
                  Tagging Solutions
                </Link>
              </div>
            )}
          </div>
          <Link href="/segments" className="text-gray-700 hover:text-accent font-medium transition-colors">
            Segments
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-accent font-medium transition-colors">
            Contact
          </Link>
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
            Get a Free Audit
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="font-medium text-gray-900">Services</div>
              <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100">
                <Link href="/#services" className="text-gray-600 hover:text-accent text-sm" onClick={toggleMenu}>Web Development</Link>
                <Link href="/#services" className="text-gray-600 hover:text-accent text-sm" onClick={toggleMenu}>Campaign Management</Link>
                <Link href="/#services" className="text-gray-600 hover:text-accent text-sm" onClick={toggleMenu}>Tagging Solutions</Link>
              </div>
            </div>
            <Link href="/segments" className="font-medium text-gray-900 hover:text-accent" onClick={toggleMenu}>
              Segments
            </Link>
            <Link href="/contact" className="font-medium text-gray-900 hover:text-accent" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/contact" className="bg-accent text-white px-6 py-2 rounded-full text-center font-medium" onClick={toggleMenu}>
              Get a Free Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
