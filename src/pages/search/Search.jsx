import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/searcher/SearchBar.jsx';
import Results from '../../components/searcher/Results.jsx';
import './Search.css';
import arrow_left from '../../assets/arrow_left.png';
import {useNavigate} from 'react-router-dom';

const API = "https://api.themoviedb.org/3/search/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&query=";

const Search = () => {
  const [query, setQuery] = useState("Avatar");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API + query)
      .then(res => res.json())
      .then(data => setMovies(data.results || []));
  }, [query]);

  return (
    <>
      <div className="topbar">
        <div className="left-section">
          <div className="logo"><img src={arrow_left} className="icon"  onClick={()=> navigate("/home")}/></div>
          <div className="brand">search ...</div>
        </div>

        <div className="right-icons">
          <p>.</p>
        </div>
      </div>

      <SearchBar query={query} setQuery={setQuery} />
      <Results movies={movies} />
    </>
  );
}
export default Search;
