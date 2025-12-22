import React, { useEffect, useState } from 'react'
import './Stream.css'
const API_KEY = 'f43ec82a5f24fe6190891894b7436c7a';
import {useNavigate,useParams} from 'react-router-dom';

const Stream = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    async function load() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
      const data = await res.json()
      setMovie(data)
      setCast(data.credits?.cast?.slice(0, 8) || [])

      const rec = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`)
      const recData = await rec.json()
      setSuggestions(recData.results || [])
    }
    load()
  }, [id])

  return (
    <div className="page-root">
      <header className="topbar">LONE.stream</header>

      <main className="container">
        <nav className="breadcrumb">Movies → {movie?.title}</nav>

        <section className="video-hero">
          <iframe  src={`https://vidlink.pro/movie/${movie?.id}`} className="video-el"></iframe>
        </section>

        <section className="info-card">
          <h1 className="title">{movie?.title}</h1>
          <div className="meta">
            {movie?.runtime}min | {movie?.genres?.map(g=>g.name).join(', ')} | {movie?.release_date}
          </div>
          <p className="overview">{movie?.overview}</p>
          <div><strong>Director:</strong> {movie?.credits?.crew?.find(c=>c.job==='Director')?.name}</div>
          <div><strong>Cast:</strong> {cast.map(c=>c.name).join(', ')}</div>
        </section>

        <h2 className="suggest-title">Suggestions</h2>
        <div className="suggest-grid">
          {suggestions.map(s => (
            <div key={s.id} className="suggest-item" onClick={()=>{
            navigate(`/stream/${s.id}`)
            window.scrollTo({ top: 0, behavior: 'smooth' });
              
            }}>
              <img src={`https://image.tmdb.org/t/p/w300${s.poster_path}`} />
              <div className="s-title">{s.title}</div>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}
 export default Stream;



<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
>
  Scroll to Top
</button>