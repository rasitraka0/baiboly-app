import React from 'react';

export default function VerseList({ verses }) {
  return (
    <div className="space-y-4">
      {verses.map((v) => (
        <div key={v.id} className="flex gap-4">
          <span className="text-yellow-400 font-bold min-w-6">{v.verset}</span>
          <span className="text-gray-200 leading-relaxed">{v.texte}</span>
        </div>
      ))}
    </div>
  );
}
