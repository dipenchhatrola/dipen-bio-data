import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Sparkles, Menu, X, User, Heart, Landmark, Camera, ChevronRight } from 'lucide-react';
import { GoogleTranslate } from './GoogleTranslate';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isGujarati, setIsGujarati] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about', id: 'about', icon: Sparkles },
    { name: 'Personal', path: '/personal', id: 'personal', icon: User },
    { name: 'Family', path: '/family', id: 'family', icon: Heart },
    { name: 'Property', path: '/property', id: 'property', icon: Landmark },
    { name: 'Photos', path: '/photos', id: 'photos', icon: Camera },
    { name: 'Contact', path: '/contact', id: 'contact', icon: Phone },
  ];

  useEffect(() => {
    const checkLang = () => {
      const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
      setIsGujarati(!!(match && match[1].includes('/gu')));
    };

    checkLang();

    const handleLangChange = (e: any) => {
      setIsGujarati(e.detail?.lang === 'gu');
    };

    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    setMobileMenuOpen(false);
    if (location.pathname === '/' || location.pathname === '/about') {
      const section = document.getElementById(link.id);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/50'
            : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition block leading-tight">
                <span className="notranslate" translate="no">
                  {isGujarati ? 'દિપેન છત્રોલા' : 'Dipen Chhatrola'}
                </span>
              </span>
              <span className="text-[10px] text-amber-600 font-bold tracking-widest uppercase block">
                <span className="notranslate" translate="no">
                  {isGujarati ? 'મેટ્રિમોનિયલ બાયો ડેટા' : 'Matrimonial Bio Data'}
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold rounded-xl transition duration-200 whitespace-nowrap ${
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

          {/* Action Area: Language Selector + Call Father + Mobile Toggle Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Google Translate Language Selector */}
            <GoogleTranslate />

            {/* Desktop Action Button: Call Father */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+919925653609"
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 border border-blue-500/30 transition group"
            >
              <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center">
                <Phone className="w-3 h-3 text-white group-hover:animate-bounce" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-blue-100 uppercase font-semibold leading-none">Call Father</span>
                <span className="text-xs font-bold leading-tight">+91 99256 53609</span>
              </div>
            </motion.a>

            {/* Mobile Sidebar Hamburger Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 shadow-sm transition"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-600" /> : <Menu className="w-5 h-5 text-slate-800" />}
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* Premium Mobile Sidebar Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[9998] bg-slate-950/60 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[9999] w-4/5 max-w-sm bg-white shadow-2xl border-l border-slate-200 flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-extrabold text-slate-900 block leading-tight">
                      <span className="notranslate" translate="no">
                        {isGujarati ? 'દિપેન છત્રોલા' : 'Dipen Chhatrola'}
                      </span>
                    </span>
                    <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider block">
                      <span className="notranslate" translate="no">
                        {isGujarati ? 'મેટ્રિમોનિયલ બાયો ડેટા' : 'Matrimonial Bio Data'}
                      </span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Navigation Items */}
              <div className="p-4 space-y-1.5 flex-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isLinkActive(link);
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition duration-200 ${
                        active
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-blue-600'}`} />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${active ? 'text-white/80' : 'text-slate-400'}`} />
                    </NavLink>
                  );
                })}
              </div>

              {/* Sidebar Footer: Language Selector & Call Action */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-3">
                {/* Language Switcher inside Mobile Drawer */}
                <GoogleTranslate isFullWidth />

                <a
                  href="tel:+919925653609"
                  className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/25 border border-blue-500/30"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Father (+91 99256 53609)</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
