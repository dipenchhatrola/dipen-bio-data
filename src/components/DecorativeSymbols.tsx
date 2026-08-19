import React from 'react';

interface SymbolProps {
  type: string;
  className?: string;
}

export const DecorativeSymbols: React.FC<SymbolProps> = ({ type, className = "w-12 h-12" }) => {
  if (type === 'none') return null;

  if (type === 'ganesha') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mukut / Top Crown */}
        <path d="M50 8 L57 22 H43 Z" />
        <circle cx="50" cy="17" r="2.5" />

        {/* Head & Ear Curves */}
        <path d="M50 24 C34 24 20 27 18 37 C16 46 25 50 34 45 C40 41 42 35 50 35 C58 35 60 41 66 45 C75 50 84 46 82 37 C80 27 66 24 50 24 Z" />

        {/* Graceful Trunk (Sond) */}
        <path d="M44 36 C44 53 58 56 63 66 C67 75 58 83 48 81 C44 80 42 75 45 72 C48 69 53 72 55 74 C57 76 60 71 56 65 C51 57 41 49 41 36 Z" />

        {/* Bindi & Modak Dot */}
        <circle cx="35" cy="73" r="3.5" />
        <circle cx="50" cy="30" r="2" />
      </svg>
    );
  }

  if (type === 'swastik') {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <path d="M50 10 v80 M10 50 h80 M50 10 h40 M90 50 v40 M50 90 h-40 M10 50 v-40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="30" r="4" />
        <circle cx="70" cy="30" r="4" />
        <circle cx="30" cy="70" r="4" />
        <circle cx="70" cy="70" r="4" />
      </svg>
    );
  }

  if (type === 'om') {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <text x="50%" y="70%" textAnchor="middle" fontSize="72" fontFamily="serif" fontWeight="bold">
          ॐ
        </text>
      </svg>
    );
  }

  return null;
};
