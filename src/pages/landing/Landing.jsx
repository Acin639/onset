import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <header className="header">
        <h1 className="logo">LONESTREAM</h1>
        <div className="controls">
          <select className="lang" aria-label="language">
            <option>English</option>
            <option>Français</option>
          </select>
          <button className="sign" onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </header>

      <div className="center">
        <h1 className="title">Unlimited movies, TV shows and more</h1>
        <p className="subtitle">Watch anywhere. Cancel anytime.</p>
        <p className="subtitle small">
          follow us on Instagram @blue_heist or gift us to support our work.
        </p>

        <form
          className="emailForm"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Get Started clicked');
          }}
        >
          <input className="email" type="button"/>
          <button
            className="cta"
            type="submit"
            onClick={() => navigate('/home')}
          >
            Get Started ▸
          </button>
        </form>
      </div>

      <footer className="attribution">
        This is a UI and Other 3ngines are built by — GENSYS™️
      </footer>
    </div>
  );
};

export default Landing;
