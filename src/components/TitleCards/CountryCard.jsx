import React, { useEffect, useState } from 'react';
import './CountryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = ({ title, category = "now_playing", country = "US" }) => {
  
  const [apiData, setApiData] = useState([]);
  
  useEffect(() => {
    const url =
      category === "discover" ?
      `https://api.themoviedb.org/3/discover/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&with_origin_country=${country}&language=en-US&page=1` :
      `https://api.themoviedb.org/3/movie/${category}?api_key=f43ec82a5f24fe6190891894b7436c7a&language=en-US&page=1`;
    
    fetch(url)
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => console.error(err));
    
  }, [category, country]);
  
  return (
    <div className="titleCards">
      <h2>{title || "Movies by Country"}</h2>

      <div className="scroll-wrapper">
        <div className="card-list">
          {apiData.map((card) => (
            <Link className="card" key={card.id} to={`/stream/${card.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.title}
              />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;