import React from 'react';
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';

export default function Header({ setIsSidebarOpen, isSidebarOpen }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3">
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="md:hidden bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded border border-gray-200 dark:border-gray-600 shrink-0"
      >
        <div className="w-5 h-5 flex flex-col justify-center gap-1.5 relative">
          <span
            className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-5 bg-current transform transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </div>
      </button>

      <div className="flex items-center gap-3 min-w-0">
        <img src="/logo.svg" alt="Bible" className="w-10 h-10 flex-shrink-0" />
        <div className="min-w-0">
          <h1 className="text-gray-900 dark:text-white font-bold text-base md:text-xl truncate">
            Baiboly sy Mofon'aina Malagasy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm truncate">
            Ny Soratra Masina amin'ny teny Malagasy
          </p>
        </div>
      </div>

      <label className="relative inline-flex items-center cursor-pointer ml-auto shrink-0">
        <input
          className="sr-only peer"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <div className="w-14 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-gray-400 peer-checked:to-gray-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-7 peer-checked:after:content-['🌙'] after:shadow-md after:text-sm"></div>
      </label>
    </header>
  );
}
