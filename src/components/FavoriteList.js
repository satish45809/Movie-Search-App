import React from 'react';
import './FavoritesList.css';

function FavoritesList({ favorites, onRemove }) {
  return (
    <div className="favorites-container">
      <h2 className="favorites-title">❤️ Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites yet. Start adding your favorite movies!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <div className="favorite-card" key={movie.imdbID}>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.Title} />
              <div className="favorite-card-content">
                <h3 className="favorite-card-title">{movie.Title}</h3>
                <p className="favorite-card-year">Year: {movie.Year}</p>
                <button className="remove-button" onClick={() => onRemove(movie.imdbID)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesList;
