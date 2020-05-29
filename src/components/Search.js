import React from "react";

const Search = ({ handleSearchInputChanges, searchValue, callSearchFunction }) => {
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
    </form>
  );
};

export default Search;