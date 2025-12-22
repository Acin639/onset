import React, { useEffect, useState } from 'react';
import './SeriesCard.css';
import { Link } from 'react-router-dom';

const SeriesCard = ({ title, category, genre }) => {
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    let url = '';
    
    // If genre is provided → discover TV series by genre
    if (genre) {
      url = `https://api.themoviedb.org/3/discover/tv?api_key=f43ec82a5f24fe6190891894b7436c7a&with_genres=${genre}&language=en-US&page=1`;
    }
    // Otherwise → normal TV category
    else {
      url = `https://api.themoviedb.org/3/tv/${category || 'popular'}?api_key=f43ec82a5f24fe6190891894b7436c7a&language=en-US&page=1`;
    }
    
    fetch(url)
      .then(res => res.json())
      .then(data => setApiData(data.results || []))
      .catch(err => console.error(err));
  }, [category, genre]);
  
  return (
    <div className="titleCards">
      <h2>{title || 'Popular TV Series'}</h2>

      <div className="scroll-wrapper">
        <div className="card-list">
          {apiData.map(series => (
            <Link
              className="card"
              key={series.id}
              to={`/stream/series/${series.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`}
                alt={series.name}
              />
              <p>{series.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;