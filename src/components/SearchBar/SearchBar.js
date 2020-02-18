import React from 'react';
import "./SearchBar.scss";


function SearchBar() {
  return (
    <form className="SearchBar">
            <input 
            className="SearchBar__input" 
            type="text" 
            placeholder="The Lion King" />
            <button className="SearchBar__button SearchBar__button--primary">Search!</button>
    </form>
  );
}

export default SearchBar;
