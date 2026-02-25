import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Lecture() {
  const [verset, setVerset] = useState([]);
  const { livreId, chapitre } = useParams();

  useEffect(() => {
    const fetchLivres = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/livres/${livreId}/chapitres/${chapitre}`,
      );
      setVerset(response.data);
    };
    fetchLivres();
  }, [livreId, chapitre]);
  return (
    <div>
      <div>
        {verset.map((v) => {
          return (
            <div key={v.id}>
              {v.verset}. {v.texte}
            </div>
          );
        })}
      </div>
    </div>
  );
}
