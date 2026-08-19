'use client';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { PersonalSection } from './PersonalSection';
import { FamilySection } from './FamilySection';
import { PropertySection } from './PropertySection';
import { PhotosSection } from './PhotosSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { Preloader } from './Preloader';
import { PageTransition } from './MotionWrapper';

// Main Portfolio Dashboard
const HomeView: React.FC = () => (
  <PageTransition className="bg-slate-50 min-h-screen">
    <Navbar />
    <HeroSection />
    <PersonalSection />
    <FamilySection />
    <PropertySection />
    <PhotosSection />
    <ContactSection />
    <Footer />
  </PageTransition>
);

const AboutView: React.FC = () => (
  <PageTransition className="pt-8 bg-slate-50 min-h-screen">
    <Navbar />
    <HeroSection />
    <ContactSection />
    <Footer />
  </PageTransition>
);

const PersonalView: React.FC = () => (
  <PageTransition className="pt-24 bg-slate-50 min-h-screen">
    <Navbar />
    <PersonalSection />
    <Footer />
  </PageTransition>
);

const FamilyView: React.FC = () => (
  <PageTransition className="pt-24 bg-slate-50 min-h-screen">
    <Navbar />
    <FamilySection />
    <Footer />
  </PageTransition>
);

const PropertyView: React.FC = () => (
  <PageTransition className="pt-24 bg-slate-50 min-h-screen">
    <Navbar />
    <PropertySection />
    <Footer />
  </PageTransition>
);

const PhotosView: React.FC = () => (
  <PageTransition className="pt-24 bg-slate-50 min-h-screen">
    <Navbar />
    <PhotosSection />
    <Footer />
  </PageTransition>
);

const ContactView: React.FC = () => (
  <PageTransition className="pt-24 bg-slate-50 min-h-screen">
    <Navbar />
    <ContactSection />
    <Footer />
  </PageTransition>
);

// Route Scroll To Top controller
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppRouterWrapper: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Preloader />;
  }

  return (
    <>
      <Preloader />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/personal" element={<PersonalView />} />
            <Route path="/family" element={<FamilyView />} />
            <Route path="/maternal" element={<FamilyView />} />
            <Route path="/property" element={<PropertyView />} />
            <Route path="/photos" element={<PhotosView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={<HomeView />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};
