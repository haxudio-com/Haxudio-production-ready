import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "glass-navbar transition-all duration-300",
        scrolled ? "py-2 md:py-4 shadow-lg text-theme-transition" : "py-4 md:py-6"
      )}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              loading="lazy"
              src="/LOGO.avif"
              alt="Haxudio"
              className="h-[49px] w-[49px] object-contain group-hover:scale-110 transition-transform"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="ml-0 text-xl md:text-2xl lg:text-4xl font-bold gradient-text">Haxudio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] lg:text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-primary",
                    isActive ? "text-primary scale-105" : "text-text-m"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/contact"
              className="gradient-bg text-white px-5 lg:px-7 py-2.5 lg:py-3 rounded-full text-[12px] lg:text-[13px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 whitespace-nowrap"
            >
              Get a Quote
            </Link>
            <div className="border-l border-border-s pl-4 lg:pl-6 h-8 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-h p-2 hover:bg-bg-section rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-deep-bg border-t border-border-s"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-4 text-base font-medium rounded-lg transition-colors",
                      isActive ? "bg-surface text-primary" : "text-text-m hover:bg-surface/50 hover:text-text-h"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center gradient-bg text-white px-6 py-4 rounded-xl text-base font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
