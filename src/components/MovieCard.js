import React from 'react';
import './MovieCard.css'; 

function MovieCard({ movie, onFavorite }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.Title}
        className="movie-card-img"
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.Title}</h3>
        <p className="movie-card-meta">{movie.Year} | {movie.Type}</p>
        <button className="movie-card-btn" onClick={() => onFavorite(movie)}>+ Add to Favorites</button>
      </div>
    </div>
  );
}

export default MovieCard;
