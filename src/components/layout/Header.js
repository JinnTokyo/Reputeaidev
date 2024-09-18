import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-eerie-black text-mint-green py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="/about" className="hover:text-tropical-indigo transition duration-300">About</a></li>
              <li><a href="/pricing" className="hover:text-tropical-indigo transition duration-300">Pricing</a></li>
              <li><a href="/features" className="hover:text-tropical-indigo transition duration-300">Features</a></li>
            </ul>
          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-tropical-indigo to-periwinkle text-transparent bg-clip-text">
              Repute.ai
            </h1>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/support" className="hover:text-tropical-indigo transition duration-300">Support</a>
            <a href="/login" className="bg-tropical-indigo hover:bg-tropical-indigo-600 text-white px-4 py-2 rounded transition duration-300">Login</a>
            <a href="/signup" className="bg-mint-green hover:bg-mint-green-600 text-eerie-black px-4 py-2 rounded transition duration-300">Sign Up</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li><a href="/about" className="block hover:text-tropical-indigo transition duration-300">About</a></li>
              <li><a href="/pricing" className="block hover:text-tropical-indigo transition duration-300">Pricing</a></li>
              <li><a href="/features" className="block hover:text-tropical-indigo transition duration-300">Features</a></li>
              <li><a href="/support" className="block hover:text-tropical-indigo transition duration-300">Support</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;