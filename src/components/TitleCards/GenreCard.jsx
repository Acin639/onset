import React, { useEffect, useState } from 'react';
import './GenreCard.css';
import { Link } from 'react-router-dom';

const GenreCard = ({ title, category, genre }) => {
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    let url = '';
    
    // If genre is provided → use discover endpoint
    if (genre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&with_genres=${genre}&language=en-US&page=1`;
    }
    // Otherwise → normal movie category
    else {
      url = `https://api.themoviedb.org/3/movie/${category || 'now_playing'}?api_key=f43ec82a5f24fe6190891894b7436c7a&language=en-US&page=1`;
    }
    
    fetch(url)
      .then(res => res.json())
      .then(data => setApiData(data.results || []))
      .catch(err => console.error(err));
    
  }, [category, genre]);
  
  return (
    <div className="titleCards">
      <h2>{title || 'Popular on Netflix'}</h2>

      <div className="scroll-wrapper">
        <div className="card-list">
          {apiData.map(card => (
            <Link className="card" key={card.id} to={`/stream/${card.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreCard;