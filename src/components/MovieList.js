import React from 'react';
import MovieCard from './MovieCard';



function MovieList({ movies, onFavorite }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onFavorite={onFavorite} />
      ))}
    </div>
  );
}

export default MovieList;
