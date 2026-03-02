import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideMofonaina from './SideMofonaina';

import LectureMofonaina from '../pages/LectureMofonaina';

function SidebarTabButton({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 font-bold cursor-pointer ${
        isActive
          ? 'text-yellow-400 border-b-2 border-yellow-400'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}
function TestamentButton({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 cursor-pointer py-2 rounded font-bold text-sm ${
        isActive
          ? 'bg-yellow-400 text-gray-900'
          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
      }`}
    >
      {children}
    </button>
  );
}
export default function Sidebar({
  testament,
  setTestament,
  recherche,
  setRecherche,
  livresFiltres,
  livreId,
  onglet,
  setOnglet,
}) {
  const navigate = useNavigate();
  function navigerVers() {
    navigate('/LectureMofonaina');
    setOnglet('mofon');
  }
  return (
    <div className="w-86 bg-gray-800 rounded-lg flex flex-col overflow-hidden ">
      <div className="flex border-b border-gray-700">
        <SidebarTabButton
          isActive={onglet === 'baiboly'}
          onClick={() => setOnglet('baiboly')}
        >
          Baiboly
        </SidebarTabButton>

        <SidebarTabButton isActive={onglet === 'mofon'} onClick={navigerVers}>
          Mofon'aina
        </SidebarTabButton>
      </div>

      {onglet === 'baiboly' ? (
        <>
          <div className="flex gap-2 p-3">
            <TestamentButton
              isActive={testament === 'taloha'}
              onClick={() => setTestament('taloha')}
            >
              Taloha
            </TestamentButton>
            <TestamentButton
              isActive={testament === 'vaovao'}
              onClick={() => setTestament('vaovao')}
            >
              Vaovao
            </TestamentButton>
          </div>

          <div className="px-3 pb-3">
            <input
              type="text"
              placeholder="Tadiavo ny boky..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              className="w-full bg-gray-700 text-gray-200 placeholder-gray-500 rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="overflow-y-auto flex-1 px-2 pb-2 custom-scrollbar">
            {livresFiltres.map((l) => (
              <Link
                to={`/lecture/${l.id}/1`}
                key={l.id}
                className={`block px-3 py-2 rounded text-gray-200 
  ${
    parseInt(livreId) === l.id
      ? 'border-l-4 border-yellow-400 text-yellow-400 bg-gray-700'
      : 'hover:bg-gray-700 hover:text-yellow-400'
  }`}
              >
                {l.nom}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden">
          <SideMofonaina />
        </div>
      )}
    </div>
  );
}
