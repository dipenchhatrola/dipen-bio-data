'use client';

import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

interface GoogleTranslateProps {
  className?: string;
  isFullWidth?: boolean;
}

export const GoogleTranslate: React.FC<GoogleTranslateProps> = ({
  className = '',
  isFullWidth = false,
}) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'gu'>('en');

  useEffect(() => {
    // Detect existing selected language from cookie
    const match = document.cookie.match(/(?:^|; )googtrans=([^;]*)/);
    if (match && match[1].includes('/gu')) {
      setCurrentLang('gu');
    } else {
      setCurrentLang('en');
    }
  }, []);

  const changeLanguage = (lang: 'en' | 'gu') => {
    setCurrentLang(lang);
    const cookieVal = lang === 'gu' ? '/en/gu' : '/en/en';

    // 1. Set cookie for all paths and hostnames
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    const hostname = window.location.hostname;
    if (hostname && hostname !== 'localhost') {
      document.cookie = `googtrans=${cookieVal}; path=/; domain=.${hostname};`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${hostname};`;
    }

    // 2. Try direct DOM combo selection if available
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = lang;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // 3. Fallback reload
      window.location.reload();
    }
  };

  if (isFullWidth) {
    return (
      <div className={`p-3 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-sm ${className}`}>
        <div className="flex items-center gap-2 mb-2 px-1 text-slate-700 font-bold text-xs">
          <Globe className="w-4 h-4 text-blue-600" />
          <span>Select Language / ભાષા પસંદ કરો</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition text-center ${
              currentLang === 'en'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('gu')}
            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold transition text-center ${
              currentLang === 'gu'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            ગુજરાતી
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-1 p-0.5 rounded-xl bg-slate-100/90 border border-slate-200 shadow-sm text-xs font-bold shrink-0 ${className}`}
    >
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
    </div>
  );
};
