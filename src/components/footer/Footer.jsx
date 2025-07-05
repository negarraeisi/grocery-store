import React from 'react';
import { Home, Book, User, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 px-4 py-8 mt-auto rounded-t-xl shadow-[0_-4px_20px_rgba(0,0,0,0.3)] font-sans">
      <div className="max-w-6xl mx-auto grid gap-8 text-center md:grid-cols-3 md:text-left">

        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Grocery Shop by Negar Raeisi. All rights reserved.</p>
          <p className="text-xs mt-1">Built with passion and code.</p>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Quick Links</h4>
          <nav className="flex flex-col items-center md:items-start gap-2">
            <a href="/" className="flex items-center gap-2 hover:text-white transition-colors">
              <Home className="w-4 h-4" /> Home
            </a>
            <a href="/store" className="flex items-center gap-2 hover:text-white transition-colors">
              <Book className="w-4 h-4" /> All Products
            </a>
            <a href="/cart" className="flex items-center gap-2 hover:text-white transition-colors">
              <User className="w-4 h-4" /> My Cart
            </a>
          </nav>
        </div>

        <div className="text-right">
          <h4 className="text-white text-lg font-semibold mb-2">Connect With Us</h4>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
          <p className="text-xs mt-2 text-right">Follow us for updates!</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
