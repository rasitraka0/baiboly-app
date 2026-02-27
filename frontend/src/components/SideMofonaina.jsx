import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideMofonaina() {
  const [mois, setMois] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatDateMalgache(dateStr) {
    if (!dateStr) return '';

    const moisMalgache = [
      'Janoary',
      'Febroary',
      'Marsa',
      'Aprily',
      'Mey',
      'Jona',
      'Jolay',
      'Aogositra',
      'Septambra',
      'Oktobra',
      'Novambra',
      'Desambra',
    ];

    const [year, month, day] = dateStr.split('-');

    return `${parseInt(day)} ${moisMalgache[parseInt(month) - 1]} ${year}`;
  }
  useEffect(() => {
    const fetchMois = async () => {
      const response = await axios.get(
        'http://localhost:3000/api/mofonaina/moisActuel',
      );
      setMois(response.data);
      setLoading(false);
    };
    fetchMois();
  }, []);
  console.log(mois);

  const isToday = (date) => {
    const today = new Date();
    const d = new Date(date);

    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  if (loading) return <div>Chargement....</div>;

  return (
    <div className="flex flex-col h-full">
      <h2 className="pb-2 uppercase text-center m-2 ">{mois[0].theme}</h2>
      <div className="overflow-y-auto flex-1 px-2 pb-2 custom-scrollbar">
        {mois.map((m) => {
          return (
            <Link
              to={`/lectureMofonaina/${m.date}`}
              key={m.id}
              className={`flex flex-col gap-1 py-3 border-b border-gray-200 hover:bg-gray-700  hover:text-yellow-400 cursor-pointer rounded px-2 ${isToday(m.date) ? 'bg-gray-700 text-yellow-400 ' : ''}`}
            >
              <span className="text-sm text-gray-500">
                {formatDateMalgache(m.date)}{' '}
                {isToday(m.date) ? (
                  <span className="text-green-400"> Anio</span>
                ) : (
                  ''
                )}
              </span>
              <span className="font-medium">
                {m.livre_nom} {m.chapitre}:{m.verset_debut}-{m.verset_fin}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
