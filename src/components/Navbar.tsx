import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Personal', path: '/personal' },
    { name: 'Family/Maternal', path: '/family' },
    { name: 'Property', path: '/property' },
    { name: 'Photos', path: '/photos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/50'
          : 'bg-gradient-to-b from-white/95 via-white/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
              Dipen Chhatrola
            </span>
            <span className="block text-[10px] text-amber-600 font-bold tracking-widest uppercase">
              Matrimonial Bio Data
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600 shadow-md shadow-blue-600/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Button: Contact Father */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="tel:+919925653609"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 border border-blue-500/30 transition group"
          >
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-white group-hover:animate-bounce" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-blue-100 uppercase font-semibold leading-none">Call Father</span>
              <span className="text-xs font-bold leading-tight">+91 99256 53609</span>
            </div>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 overflow-hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Contact Father CTA */}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="tel:+919925653609"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Father: Amarshibhai (+91 99256 53609)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
