import React, { useReducer, useState } from "react";
import api from "./services/api";
import './styles/App.css';
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";
import { initialState, reducer } from "./store/reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  // const resetInputField = () => {
  //   setSearchValue("");
  // };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue, page);
  };

  const loadMore = e => {
    e.preventDefault();
    setPage(page + 1);
    search(searchValue, page + 1);
  };

  async function search(searchValue, page) {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    await api.get(`?apikey=f96c20b2&s=${searchValue}&plot=full&page=${page}`).then(
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
  }

  const refreshPage = () => {
    window.location.reload();
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <div className="m-container">
        <Header 
          click={refreshPage}
        />
        <Search 
          search={search} 
          searchValue={searchValue}
          handleSearchInputChanges={handleSearchInputChanges}
          callSearchFunction={callSearchFunction}
        />
        <Movies 
          movies={movies} 
          loading={loading}
          search={search}
          loadMore={loadMore}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
};

export default App;