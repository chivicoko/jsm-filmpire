import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

// 732938ae

const API_URL = 'http://www.omdbapi.com?apikey=732938ae'

const App = () => {

  const movie1 = {
      "Title": "Italian Spiderman",
      "Year": "2007",
      "imdbID": "tt2705436",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  }

  const movie2 = {
      "Title": "Amazing Spiderman Syndrome",
      "Year": "2012",
      "imdbID": "tt2586634",
      "Type": "movie",
      "Poster": "N/A"
  }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt="Search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>Year</p>
          </div>

          <div>
            <img src={ movie2.Poster !== 'N/A' ? movie2.Poster : 'https://via.placeholder.com/400'} alt={movie2.Title} />
          </div>

          <div>
            <span>{movie2.Type}</span>
            <h3>{movie2.Title}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
