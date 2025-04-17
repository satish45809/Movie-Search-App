import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FavoritesList from './components/FavoriteList';


const API_KEY = 'bad7ffae'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
  };

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      const updated = [...favorites, movie];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  useEffect(() => {
    if (searchTerm) fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && <MovieList movies={movies} onFavorite={addFavorite} />}
      <FavoritesList favorites={favorites} onRemove={removeFavorite} />
    </div>
  );
}

export default App;
