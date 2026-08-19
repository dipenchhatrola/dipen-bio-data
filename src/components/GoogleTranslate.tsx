'use client';

import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export const GoogleTranslate: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'gu'>('en');

  useEffect(() => {
    // Check existing cookie
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match && match[1].includes('/gu')) {
      setCurrentLang('gu');
    }

    // Google translate init script handler
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,gu,hi',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };
  }, []);

  const changeLanguage = (lang: 'en' | 'gu') => {
    const domain = window.location.hostname;
    const cookieVal = lang === 'gu' ? '/en/gu' : '/en/en';

    // Set cookie on multiple domain paths for compatibility
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${domain};`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain};`;

    setCurrentLang(lang);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-1 p-0.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-sm text-xs font-bold shrink-0">
      <div className="pl-1.5 pr-0.5 text-blue-600 flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-lg text-[11px] font-extrabold transition ${
          currentLang === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('gu')}
        className={`px-2 py-1 rounded-lg text-[11px] font-extrabold transition ${
          currentLang === 'gu'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="ગુજરાતીમાં અનુવાદ"
      >
        ગુજરાતી
      </button>
      <div id="google_translate_element" className="hidden" />
    </div>
  );
};
