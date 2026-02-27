import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function LectureMofonaina() {
  const [mofonainaActif, setMofonainaActif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [versetDateActif, setVersetDateActif] = useState([]);

  const { dateActif } = useParams();

  function getTodayDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const date = dateActif ?? getTodayDate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const responseDate = await axios.get(
          `http://localhost:3000/api/mofonaina/${date}`,
        );

        const data = responseDate.data;

        if (!data || data.length === 0) {
          setMofonainaActif([]);
          setVersetDateActif([]);
          setLoading(false);
          return;
        }

        setMofonainaActif(data);

        const responseVerset = await axios.get(
          `http://localhost:3000/api/mofonaina/${data[0].livre_id}/${data[0].chapitre}/${data[0].verset_debut}/${data[0].verset_fin}`,
        );

        setVersetDateActif(responseVerset.data || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAll();
  }, [date]);
  console.log(dateActif);

  if (loading) {
    return <div>chargement .....</div>;
  }

  if (!mofonainaActif.length || !versetDateActif.length) {
    return (
      <div className="h-full flex items-center justify-center text-white">
        Tsy misy mofonaina ho an'ity daty ity.
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col text-white">
      <div className="px-6 py-4 border-b border-gray-700">
        <div className="text-yellow-400 text-3xl font-bold mb-4 text-center">
          MOFON'AINA : {mofonainaActif[0].jour} {mofonainaActif[0].mois}
        </div>
        <h2 className="text-yellow-400 text-2xl font-bold mb-4">
          {versetDateActif[0].nom_livre} {mofonainaActif[0].chapitre}:
          {mofonainaActif[0].verset_debut}-{mofonainaActif[0].verset_fin}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <div className="space-y-4">
          {versetDateActif.map((v) => (
            <div key={v.id} className="flex gap-4">
              <span className="text-yellow-400 font-bold min-w-6">
                {v.verset}
              </span>
              <span className="text-gray-200 leading-relaxed">{v.texte}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
