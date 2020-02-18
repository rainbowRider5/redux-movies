import React from 'react';
import "./SearchBar.scss";
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {search} from '../../actions';

function SearchBar() {
    const movies = useSelector(state => state.searchReducer);
    const dispatch = useDispatch();
    const [value, setState] = useState("");

    console.log(movies);
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
