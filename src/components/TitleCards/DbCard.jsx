import React, { useEffect, useState } from 'react';
import './GenreCard.css';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const FirestoreMediaCard = ({ title }) => {
  const [mediaData, setMediaData] = useState([]);
  const TMDB_KEY = 'f43ec82a5f24fe6190891894b7436c7a';

  useEffect(() => {
    const fetchFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'watchlist'));
        const items = querySnapshot.docs.map(doc => doc.data());

        const tmdbResults = [];

        for (const item of items) {
          const url = `https://api.themoviedb.org/3/search/${item.type}?api_key=${TMDB_KEY}&query=${encodeURIComponent(item.title)}&language=en-US`;

          const res = await fetch(url);
          const data = await res.json();

          if (data.results && data.results.length > 0) {
            tmdbResults.push({
              ...data.results[0],
              media_type: item.type,
            });
          }
        }

        setMediaData(tmdbResults);
      } catch (err) {
        console.error('Firestore/TMDB error:', err);
      }
    };

    fetchFromFirestore();
  }, []);

  return (
    <div className="titleCards">
      <h2>{title || 'Recommended'}</h2>

      <div className="scroll-wrapper">
        <div className="card-list">
          {mediaData.map(item => (
            <Link
              key={item.id}
              className="card"
              to={`/stream/${item.media_type}/${item.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title || item.name}
              />
              <p>{item.title || item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirestoreMediaCard;