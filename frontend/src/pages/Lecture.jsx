import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import VerseList from '../components/VerseList';

function FilterSelect({ label, value, onChange, children }) {
  return (
    <div className="flex justify-end mb-1">
      <label className="text-gray-400 ml-2 xl:px-4">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="bg-gray-700 text-white px-2 rounded outline-none focus:ring-1 focus:ring-yellow-400 cursor-pointer xl:gap-2.5"
      >
        {children}
      </select>
    </div>
  );
}

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
        `${import.meta.env.VITE_API_URL}/api/livres/${livreId}/chapitres/${chapitre}`,
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
        `${import.meta.env.VITE_API_URL}/api/livres/${livreId}/chapitres`,
      );
      setChapitres(response.data);
    };
    fetchChapitres();
  }, [livreId]);

  useEffect(() => {
    const fetchLivre = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/livres/${livreId}`,
      );
      setLivre(response.data);
    };
    fetchLivre();
  }, [livreId]);

  return (
    <div className="h-full flex flex-col text-white">
      <div className="flex justify-between xl:block px-6 py-4 border-b border-gray-700">
        {livre && (
          <h2 className="text-yellow-400 text-1xl font-bold mb-4 md:text-2xl xl:text-2xl">
            {livre[0].nom}
          </h2>
        )}
        <div class="flex flex-col xl:flex-row">
          <FilterSelect
            label="Toko:"
            value={chapitre}
            onChange={(e) => navigate(`/lecture/${livreId}/${e.target.value}`)}
          >
            {chapitres.map((c) => (
              <option key={c.chapitre} value={c.chapitre}>
                {c.chapitre}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect
            label={'Andininy:'}
            value={versetDebut}
            onChange={(e) => setVersetDebut(parseInt(e.target.value))}
          >
            {verset.map((v) => (
              <option key={v.verset} value={v.verset}>
                {v.verset}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect
            label={"hatram'ny:"}
            value={versetFin}
            onChange={(e) => setVersetFin(parseInt(e.target.value))}
          >
            {filtrageFin.map((v) => (
              <option key={v.verset} value={v.verset}>
                {v.verset}
              </option>
            ))}
          </FilterSelect>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
        <VerseList verses={versetFiltres} />
      </div>
    </div>
  );
}
