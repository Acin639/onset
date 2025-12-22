import React from "react"; import "./Home.css"; import Navbar from "../../components/Navbar/Navbar.jsx"; 
 // new slider import
 import MovieSlider from '../../components/TitleCards/MovieSlider.jsx';
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import GenreCard from '../../components/TitleCards/GenreCard.jsx';
import CountryCard from '../../components/TitleCards/CountryCard.jsx';
import SeriesCard from '../../components/TitleCards/SeriesCard.jsx';
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => { return ( <div className="home"> <Navbar />

{/* Replaced hero section with Slider */}
  <MovieSlider />

  <div className="more-cards">
    <div id="blockbusters">
      <TitleCards title="Blockbuster Movies" category="popular" />
    </div>
    <div id="only-on-netflix">
      <TitleCards title="Only on Netflix" category="top_rated" />
    </div>
    <div id="upcomings">
      <TitleCards title="Upcomings Movies" category="upcoming" />
    </div>
    <div id="top-picks">
      <TitleCards title="Top Pics for You" category="now_playing" />
    </div>
    <div id="top-picks">
      <GenreCard title="Kids" category="now_playing" genre={10751} />
    </div>
    <div id="top-picks">
      <GenreCard title="Horror" category="now_playing" genre={27}/>
    </div>
    <div id="top-picks">
      <GenreCard title="Romance" category="now_playing" genre={10749}/>
    </div>
    <div id="top-picks">
      <CountryCard title="Hollywood" category="discover" country="US" />
    </div>
    <div id="top-picks">
      <CountryCard title="Nollywood" category="discover" country="NG"/>
    </div>
    <div id="top-picks">
      <CountryCard title="Bollywood" category="discover" country="IN"/>
    </div>
    <div id="top-picks">
      <SeriesCard title="Popular" category="popular" />
    </div>
    <div id="top-picks">
      <SeriesCard title="Romance" genre={10749}/>
    </div>
  </div>

  <div id="footer">
    <Footer />
  </div>
</div>

); };

export default Home;
