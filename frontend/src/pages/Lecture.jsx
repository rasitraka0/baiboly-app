import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Lecture() {
  const navigate = useNavigate();
  const [verset, setVerset] = useState([]);
  const { livreId, chapitre } = useParams();
  const [chapitres, setChapitres] = useState([]);
  const [livre, setLivre] = useState(null);

  const [versetDebut, setVersetDebut] = useState(1);
  const [versetFin, setVersetFin] = useState(1);

  const versetFiltres = verset.filter((v) => {
    return v.verset >= versetDebut && v.verset <= versetFin;
  });
  const filtrageFin = verset.filter((v) => {
    return v.verset >= versetDebut;
  });

  useEffect(() => {
    const fetchVersets = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres/${chapitre}`,
      );
      setVerset(response.data);
      console.log(response.data);

      setVersetDebut(1);
      setVersetFin(
        response.data.length > 0
          ? response.data[response.data.length - 1].verset
          : 1,
      );
    };
    fetchVersets();
  }, [livreId, chapitre]);

  useEffect(() => {
    const fetchChapitres = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres`,
      );
      setChapitres(response.data);
    };
    fetchChapitres();
  }, [livreId]);

  useEffect(() => {
    const fetchLivre = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}`,
      );
      setLivre(response.data);
    };
    fetchLivre();
  }, [livreId]);

  return (
    <div className="h-full flex flex-col text-white">
      <div className="px-6 py-4 border-b border-gray-700">
        {livre && (
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">
            {livre[0].nom}
          </h2>
        )}
        <label className="text-gray-400 ml-4">Toko : </label>
        <select
          value={chapitre}
          onChange={(e) => navigate(`/lecture/${livreId}/${e.target.value}`)}
          className="bg-gray-700  text-white rounded px-3 py-1 outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer  custom-scrollbar"
        >
          {chapitres.map((c) => (
            <option key={c.chapitre} value={c.chapitre}>
              {c.chapitre}
            </option>
          ))}
        </select>
        <label className="text-gray-400 ml-4">Andininy faha :</label>
        <select
          value={versetDebut}
          onChange={(e) => setVersetDebut(parseInt(e.target.value))}
          className="bg-gray-700 text-white rounded px-3 py-1 outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
        >
          {verset.map((v) => (
            <option key={v.verset} value={v.verset}>
              {v.verset}
            </option>
          ))}
        </select>

        <label className="text-gray-400 ml-4">ka hatramin'ny :</label>
        <select
          value={versetFin}
          onChange={(e) => setVersetFin(parseInt(e.target.value))}
          className="bg-gray-700 text-white rounded px-3 py-1 outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer"
        >
          {filtrageFin.map((v) => (
            <option key={v.verset} value={v.verset}>
              {v.verset}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <div className="space-y-4">
          {versetFiltres.map((v) => (
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
