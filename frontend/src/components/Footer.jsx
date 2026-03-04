import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 px-6 py-3 flex flex-wrap items-center justify-center text-gray-400 text-sm gap-1">
      © 2026 Baiboly Malagasy by{' '}
      <a
        href="https://github.com/rasitraka0"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-1"
      >
        <Github size={14} />
        RaSitraka
      </a>
      . All rights reserved.
    </footer>
  );
}
