import React from 'react';
import './Landing.css';
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/normal_logo.png';

const Landing = () => {
  
  //const {id} = useParams();
  const navigate = useNavigate()
  return (
    <div className="hero">
      /**<div className="poster-grid" aria-hidden="true">
        {/* decorative poster tiles */}
        {Array.from({length:30}).map((_,i)=>(
          <div key={i} className="tile" />
        ))}
      </div>**/

      <header className="header">
        <H1 className="logo" >LONESTREAM</H1>
        <div className="controls">
          <select className="lang" aria-label="language">
            <option>English</option>
            <option>Français</option>
          </select>
          <button className="sign" onClick={()=> navigate("/login")}>Sign In</button>
        </div>
      </header>

      <div className="center">
        <h1 className="title">Unlimited movies, TV shows and more</h1>
        <p className="subtitle">Watch anywhere. Cancel anytime.</p>
        <p className="subtitle small">Ready to watch? Enter your email to create or restart your membership.</p>

        <form className="emailForm" onSubmit={(e)=>{e.preventDefault(); alert('Get Started clicked') }}>
          <input className="email" type="email" placeholder="Email Address" required />
          <button className="cta" type="submit" onClick={() => navigate("/home")}
           >Get Started ▸</button>
        </form>
      </div>

      <footer className="attribution">This is a UI and Other 3ngines are built by — GENSYS™️</footer>
    </div>
  );
}

export default Landing;