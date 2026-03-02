import React from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="lg:hidden p-2">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium uppercase tracking-widest opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">New Arrivals</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Clothing</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Accessories</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-3xl font-serif tracking-tighter font-bold">AURA & CO.</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button
            onClick={onCartClick}
            className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-brand-accent text-white text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
