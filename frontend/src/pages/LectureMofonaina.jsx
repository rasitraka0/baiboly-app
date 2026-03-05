import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VerseList from '../components/VerseList';
import { getTodayDate } from '../utils/dateUtils';
import Spinner from '../components/Spinner';

export default function LectureMofonaina() {
  const [mofonainaActif, setMofonainaActif] = useState([]);
  const [loading, setLoading] = useState(true);
  const [versetDateActif, setVersetDateActif] = useState([]);
  const { dateActif } = useParams();
  const date = dateActif ?? getTodayDate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const responseDate = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/mofonaina/${date}`,
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
          `${import.meta.env.VITE_API_URL}/api/mofonaina/${data[0].livre_id}/${data[0].chapitre}/${data[0].verset_debut}/${data[0].verset_fin}`,
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
    return <Spinner />;
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
      <div className="px-6 py-1 border-b border-gray-700">
        <div className="text-yellow-400 text-1xl font-bold mb-4 text-center md:text-2xl xl:text-3xl">
          MOFON'AINA : {mofonainaActif[0].jour} {mofonainaActif[0].mois}
        </div>
        <h2 className="text-yellow-400 text-1xl text-center font-bold mb-4 xl:2xl">
          {versetDateActif[0].nom_livre} {mofonainaActif[0].chapitre}:
          {mofonainaActif[0].verset_debut}-{mofonainaActif[0].verset_fin}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <VerseList verses={versetDateActif} />
      </div>
    </div>
  );
}
