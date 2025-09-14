import React, { useState } from "react";
import { ShoppingCart, User, Search, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cls = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium ${isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-background sticky top-0 z-50">
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs sm:text-sm">
        <span className="hidden sm:inline">FREE DELIVERY | 30-DAY RETURNS | AR TRY-ON | 3D TRY-ON</span>
        <span className="sm:hidden">FREE DELIVERY | 30-DAY RETURNS</span>
      </div>

      {/* Main header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 border-2 border-primary-foreground rounded-full"></div>
                </div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">lens-sight</h1>
              </Link>
            </div>

            {/* Desktop Search bar */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-lg px-4 py-3 w-96">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent border-none outline-none flex-1 text-sm"
              />
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile search button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>

              {/* Desktop navigation links */}
              <div className="hidden md:flex items-center gap-4 text-sm">
                <Link to="/track-order" className="text-gray-600 hover:text-primary whitespace-nowrap">
                  Track Order
                </Link>
                <Link to="/profile" className="text-gray-600 hover:text-primary whitespace-nowrap">
                  Sign In
                </Link>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-1 sm:gap-3">
                <Link to="/wishlist">
                  <Button variant="ghost" size="icon" className="p-2">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button variant="ghost" size="icon" className="p-2">
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent border-none outline-none flex-1 text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navigation menu */}
      <div className="border-b border-border hidden lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <Link to="/new-arrivals" className="text-sm font-medium text-gray-700 hover:text-primary">
                NEW ARRIVALS
              </Link>
              <Link to="/eyeglasses" className="text-sm font-medium text-gray-700 hover:text-primary">
                EYEGLASSES
              </Link>
              <Link to="/screen-glasses" className="text-sm font-medium text-gray-700 hover:text-primary">
                SCREEN EYEGLASSES
              </Link>
              <Link to="/sunglasses" className="text-sm font-medium text-gray-700 hover:text-primary">
                SUNGLASSES
              </Link>
              <Link to="/contact-lenses" className="text-sm font-medium text-gray-700 hover:text-primary">
                CONTACT LENSES
              </Link>
              <Link to="/kids-eyeglasses" className="text-sm font-medium text-gray-700 hover:text-primary">
                KIDS EYEGLASSES
              </Link>
            </div>
      
            <div className="flex items-center gap-3">
              <Link to="/TryOn">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded text-sm">
                  3D TRY ON
                </Button>
              </Link>
              <Link to="/Blu">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                  BLU
                </Button>
              </Link>
              <Link to="/Gold">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm">
                  GOLD
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background">
          <div className="container mx-auto px-4">
            <nav className="py-4">
              {/* Mobile navigation links */}
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/new-arrivals" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NEW ARRIVALS
                </Link>
                <Link 
                  to="/eyeglasses" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EYEGLASSES
                </Link>
                <Link 
                  to="/screen-glasses" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SCREEN EYEGLASSES
                </Link>
                <Link 
                  to="/sunglasses" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SUNGLASSES
                </Link>
                <Link 
                  to="/contact-lenses" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT LENSES
                </Link>
                <Link 
                  to="/kids-eyeglasses" 
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  KIDS EYEGLASSES
                </Link>
              </div>

              {/* Mobile action buttons */}
              <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-border">
                <Link to="/TryOn" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full py-3 rounded text-sm">
                    3D TRY ON
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Link to="/Blu" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded text-sm">
                      BLU
                    </Button>
                  </Link>
                  <Link to="/Gold" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white w-full py-3 rounded text-sm">
                      GOLD
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mobile account links */}
              <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-border md:hidden">
                <Link 
                  to="/track-order" 
                  className="text-sm text-gray-600 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Track Order
                </Link>
                <Link 
                  to="/profile" 
                  className="text-sm text-gray-600 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In & Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}