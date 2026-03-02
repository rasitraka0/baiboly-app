import React from 'react';

export default function Header({ setIsSidebarOpen }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex gap-4">
      <div className="px-3 py-2 md:hidden">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="bg-gray-800 text-gray-200 px-3 py-2 rounded flex items-center gap-2 border border-gray-700"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>
      <div>
        <h1 className="text-white font-bold text-xl">
          Baiboly sy Mofon'aina Malagasy
        </h1>
        <p className="text-gray-400 text-sm">
          Ny Soratra Masina amin'ny teny Malagasy
        </p>
      </div>
    </header>
  );
}
