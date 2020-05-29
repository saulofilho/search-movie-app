import React from "react";
import GlitchClip from 'react-glitch-effect/core/Clip';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://pbs.twimg.com/profile_images/1266052228776853504/BjCNzlHg_400x400.jpg";

const Movies = ({ movies, loading, loadMore, errorMessage }) => {
  return (
    <>
      <div className="movies">
        {movies.map((movie, index) => (
          <div
            className="movie"
            key={`${index}-${movie.Title}`}
          >
            <p>{movie.Title}</p>
            <div>
            <GlitchClip 
              onHover={true}
              duration="10s"
              iterationCount="infinite"
              disabled={true}
            >
              <img
                alt={`The movie titled: ${movie.Title}`}
                src={movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
              />
            </GlitchClip>
            </div>
            <p>({movie.Year})</p>
          </div>
        ))}
      </div>
      {loading && !errorMessage ? null : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : <button className="button plus" onClick={loadMore}>+</button>}
    </>
  );
}

export default Movies;