import React, { useReducer } from "react";
import '../styles/App.css';
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

// const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=f96c20b2";
// http://www.omdbapi.com/

// const MOVIE_API_URL = "https://www.omdbapi.com/apikey=f96c20b2";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   axios.get(MOVIE_API_URL).then(jsonResponse => {
  //     dispatch({
  //       type: "SEARCH_MOVIES_SUCCESS",
  //       payload: jsonResponse.data.Search
  //     });
  //   });
  // }, []);

  const refreshPage = () => {
    window.location.reload();
  };


  const search = async (searchValue, page) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    await axios(`https://www.omdbapi.com/?apikey=f96c20b2&s=${searchValue}&plot=full&page=${page}`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  console.log('payload', movies)

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header 
          text="movie poster" 
          click={refreshPage}
        />
        <Search search={search} />
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default App;