import React from 'react';

export default function Header({ setIsSidebarOpen }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-3">
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="md:hidden bg-gray-700 text-gray-200 px-3 py-2 rounded border border-gray-600 shrink-0"
      >
        <span className="text-xl">☰</span>
      </button>

      <div className="flex items-center gap-3 min-w-0">
        <img src="/logo.svg" alt="Bible" className="w-10 h-10 flex-shrink-0" />
        <div className="min-w-0">
          <h1 className="text-white font-bold text-base md:text-xl truncate">
            Baiboly sy Mofon'aina Malagasy
          </h1>
          <p className="text-gray-400 text-xs md:text-sm truncate">
            Ny Soratra Masina amin'ny teny Malagasy
          </p>
        </div>
      </div>
    </header>
  );
}
