import React from 'react';
import { Coffee, Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Global Burger Patties</h3>
            <p className="text-gray-300 mb-4">
              Explore 50 delicious burger recipes from around the world.
              Perfect your patty-making skills and impress your friends and family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Favorites</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Sign up for our newsletter to receive new recipes and cooking tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Global Burger Patties. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and <Coffee className="w-4 h-4 mx-1 text-yellow-700" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;