import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Lecture() {
  const navigate = useNavigate();
  const [verset, setVerset] = useState([]);
  const { livreId, chapitre } = useParams();
  const [chapitres, setChapitres] = useState([]);
  const [livre, setLivre] = useState(null);

  useEffect(() => {
    const fetchVersets = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres/${chapitre}`,
      );
      setVerset(response.data);
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
  console.log(livre);

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
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <div className="space-y-4">
          {verset.map((v) => (
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
