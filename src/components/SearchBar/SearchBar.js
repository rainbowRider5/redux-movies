import React from 'react';
import "./SearchBar.scss";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {search} from '../../actions';

function SearchBar() {
    
    const dispatch = useDispatch();
    const [value, setState] = useState("");
    
    return (
        <form className="SearchBar">
                <input 
                className="SearchBar__input" 
                type="text" 
                placeholder="The Lion King"
                value={value}
                onChange={(evt) => setState(evt.target.value)} />
                <button 
                className="SearchBar__button SearchBar__button--primary"
                onClick={(evt) =>{ 
                    evt.preventDefault();
                    dispatch(search(value))}}>Search!</button>
        </form>
    );
}

export default SearchBar;
