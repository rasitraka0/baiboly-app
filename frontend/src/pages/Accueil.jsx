import React from 'react';
import image from '../assets/baiboly_mofo.svg';
import { useNavigate } from 'react-router-dom';
export default function Accueil() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center  text-center px-6 gap-4 py-8">
      <img src={image} alt="Baiboly" className="w-80 h-80" />

      <div>
        <h1 className="text-3xl font-bold text-white">Tongasoa !</h1>
        <p className="text-gray-400 mt-2 text-lg">
          Mazotoa mamaky ny Soratra Masina
        </p>
      </div>

      <p className="text-gray-500 text-sm max-w-md">
        Ny Baiboly iray manontolo amin'ny teny Malagasy, miaraka amin'ny
        Mofon'aina andavanandro.
      </p>

      <div className="flex gap-6 md:hidden">
        <span
          onClick={() => navigate('/Lecture/1/1')}
          className="text-yellow-400 text-sm font-semibold border-b border-yellow-400 cursor-pointer hover:text-yellow-300 hover:border-gray-700 transition-all duration-300"
        >
          Baiboly →
        </span>

        <span
          onClick={() => navigate('/LectureMofonaina')}
          className="text-yellow-400 text-sm font-semibold border-b border-yellow-400 cursor-pointer hover:text-yellow-300 hover:border-gray-700 transition-all duration-300"
        >
          Mofon'aina →
        </span>
      </div>
    </div>
  );
}
