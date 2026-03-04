import React from 'react';
import image from '../assets/baiboly_mofo.svg';
export default function Accueil() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-6">
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

     
    </div>
  );
}
