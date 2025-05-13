import React from 'react';
import { MenuIcon, Search, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-orange-500 dark:from-red-800 dark:to-orange-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MenuIcon className="w-6 h-6 md:hidden" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            <span className="text-yellow-300">Global</span> Burger Patties
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full py-2 px-4 pr-10 rounded-full text-gray-800 dark:text-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">Favorites</a>
            <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;