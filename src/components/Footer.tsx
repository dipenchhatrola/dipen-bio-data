import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  const quickLinks = [
    { name: 'Home Overview', path: '/', isHome: true },
    { name: 'About & Career', path: '/about' },
    { name: 'Personal Details', path: '/personal' },
    { name: 'Family/Maternal Background', path: '/family' },
    { name: 'Residence & Assets', path: '/property' },
    { name: 'Photo Gallery', path: '/photos' },
    { name: 'Contact Information', path: '/contact' },
  ];

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8 text-slate-300 text-xs relative print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Footer Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">

            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group inline-flex">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-white group-hover:text-blue-400 transition">
                    Dipen Chhatrola
                  </span>
                  <span className="block text-[10px] text-amber-400 font-bold tracking-widest uppercase">
                    Matrimonial Bio Data
                  </span>
                </div>
              </Link>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Web Developer &amp; Co-Founder at{' '}
                <a
                  href="https://ashtrixcode.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 transition duration-300"
                >
                  ASHTRIXCODE
                </a>
                .<br />
                Residing in Rajkot, Gujarat.
              </p>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Official Matrimonial Profile</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={link.isHome ? handleHomeClick : undefined}
                      className="hover:text-amber-400 transition flex items-center gap-1.5 py-1 text-slate-300 hover:translate-x-1 duration-200 inline-block"
                    >
                      <span>•</span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Direct Contact */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Contact
              </h4>
              <div className="space-y-2">
                <a
                  href="tel:+919925653609"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition group"
                >
                  <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold">Father</span>
                    <span className="font-bold text-xs text-white">+91 99256 53609</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919925653609"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold">WhatsApp Chat</span>
                    <span className="font-bold text-xs text-white">Send Message</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-6 flex items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>© {new Date().getFullYear()} Dipen Chhatrola • All rights reserved.</p>
          </div>

        </div>
      </footer>

      {/* Floating Scroll-To-Top Arrow Button */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[9999] w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white shadow-xl shadow-blue-600/35 border border-white/30 transition flex items-center justify-center group ring-4 ring-blue-500/15 backdrop-blur-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
