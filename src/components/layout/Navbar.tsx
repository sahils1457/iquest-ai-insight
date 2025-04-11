
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-iqblue">iQuest</span>
              <span className="ml-1 text-sm bg-iqblue text-white px-1.5 py-0.5 rounded">AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-iqdark-500 hover:text-iqblue transition-colors font-medium">
              Home
            </Link>
            <Link to="/features" className="text-iqdark-500 hover:text-iqblue transition-colors font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-iqdark-500 hover:text-iqblue transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-iqdark-500 hover:text-iqblue transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth/login" className="text-iqdark-500 hover:text-iqblue transition-colors font-medium">
              Log in
            </Link>
            <Button className="bg-iqblue hover:bg-iqblue-600 text-white" asChild>
              <Link to="/auth/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-iqblue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-iqdark-500 hover:text-iqblue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block px-3 py-2 rounded-md text-base font-medium text-iqdark-500 hover:text-iqblue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-iqdark-500 hover:text-iqblue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-iqdark-500 hover:text-iqblue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/auth/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-iqdark-500 hover:text-iqblue hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Log in
          </Link>
          <Link
            to="/auth/signup"
            className="block px-3 py-2 rounded-md text-base font-medium bg-iqblue text-white hover:bg-iqblue-600"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
