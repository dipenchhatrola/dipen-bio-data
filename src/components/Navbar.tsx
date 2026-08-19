import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Personal', path: '/personal', id: 'personal' },
    { name: 'Family', path: '/family', id: 'family' },
    { name: 'Property', path: '/property', id: 'property' },
    { name: 'Photos', path: '/photos', id: 'photos' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // On Home Page (/), perform Scroll-Spy to highlight current section on scroll
      if (location.pathname === '/' || location.pathname === '/about') {
        const sections = navLinks.map((link) => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isLinkActive = (link: { name: string; path: string; id: string }) => {
    if (location.pathname === '/' || location.pathname === '/about') {
      return activeSection === link.id;
    }
    return location.pathname === link.path;
  };

  const handleNavClick = (e: React.MouseEvent, link: { path: string; id: string }) => {
    if (location.pathname === '/' || location.pathname === '/about') {
      const section = document.getElementById(link.id);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-md shadow-slate-200/50'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">

        {/* Top Row / Brand Logo & Call Button for Mobile */}
        <div className="w-full sm:w-auto flex items-center justify-between gap-3 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
            <div>
              <span className="text-sm sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition block leading-tight">
                Dipen Chhatrola
              </span>
              <span className="text-[9px] sm:text-[10px] text-amber-600 font-bold tracking-widest uppercase block">
                Matrimonial Bio Data
              </span>
            </div>
          </Link>

          {/* Compact Call Button on Mobile */}
          <a
            href="tel:+919925653609"
            className="sm:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-[11px] shadow-sm shrink-0"
          >
            <Phone className="w-3 h-3" />
            <span>Call</span>
          </a>
        </div>

        {/* Navigation Links - Direct Visible on Mobile & Desktop */}
        <nav className="w-full sm:w-auto flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 backdrop-blur-md overflow-x-auto max-w-full no-scrollbar">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-bold rounded-xl transition duration-200 whitespace-nowrap shrink-0 ${
                  active
                    ? 'text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md shadow-blue-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Action Button: Call Father */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="tel:+919925653609"
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 border border-blue-500/30 transition group"
          >
            <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center">
              <Phone className="w-3 h-3 text-white group-hover:animate-bounce" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] text-blue-100 uppercase font-semibold leading-none">Call Father</span>
              <span className="text-xs font-bold leading-tight">+91 99256 53609</span>
            </div>
          </motion.a>
        </div>

      </div>
    </motion.header>
  );
};
