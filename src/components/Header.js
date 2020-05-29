import React from "react";

const Header = props => {
  return (
    <header className="App-header">
      <h2 onClick={props.click}>
        movies poster 
      </h2>
      <span>beta</span>
    </header>
  );
};

export default Header;