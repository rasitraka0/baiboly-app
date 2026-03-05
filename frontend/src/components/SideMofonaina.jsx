import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDateMalgache, isToday } from '../utils/dateUtils';

function MofonainaItem({ item, isActive, onClick }) {
  const isTodayDate = isToday(item.date);
  return (
    <Link
      to={`/lectureMofonaina/${item.date}`}
      onClick={onClick}
      className={`flex flex-col gap-1 py-3 border-b border-gray-200 
hover:bg-gray-700 hover:text-yellow-400 cursor-pointer rounded px-2
transition-all duration-300 ease-out
${isActive ? 'bg-gray-700 text-yellow-400  border-l-4 border-yellow-400 ml-3' : ''}`}
    >
      <span className="text-sm text-gray-500">
        {formatDateMalgache(item.date)}{' '}
        {isTodayDate ? <span className="text-green-400"> Anio</span> : ''}
      </span>
      <span className="font-medium">
        {item.livre_nom} {item.chapitre}:{item.verset_debut}-{item.verset_fin}
      </span>
    </Link>
  );
}
export default function SideMofonaina({ onItemClick }) {
  const [mois, setMois] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clickedId, setClickedId] = useState(null);

  useEffect(() => {
    const fetchMois = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/mofonaina/moisActuel`,
      );
      setMois(response.data);
      setLoading(false);
    };
    fetchMois();
  }, []);
  console.log(mois);

  if (loading) return <div>Chargement....</div>;

  return (
    <div className="flex flex-col h-full">
      <h2 className="pb-2 uppercase text-center m-2 ">{mois[0].theme}</h2>
      <div className="overflow-y-auto flex-1 px-2 pb-2 custom-scrollbar">
        {mois.map((m) => {
          return (
            <MofonainaItem
              key={m.id}
              item={m}
              isActive={
                clickedId !== null ? clickedId === m.id : isToday(m.date)
              }
              onClick={() => {
                setClickedId(m.id);
                if (onItemClick) {
                  onItemClick();
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
