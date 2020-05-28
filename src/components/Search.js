import React, { useState } from "react";

const Search = ({ search }) => {
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

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <button className="button" onClick={callSearchFunction} type="submit" >
        <span>Search</span>
      </button>
      <button onClick={loadMore}>teste</button>
    </form>
  );
};

export default Search;