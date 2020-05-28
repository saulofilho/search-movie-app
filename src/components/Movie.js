import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://pbs.twimg.com/profile_images/1266052228776853504/BjCNzlHg_400x400.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <p>{movie.Title}</p>
      <div>
        <img
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;