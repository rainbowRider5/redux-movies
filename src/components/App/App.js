import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import "./App.scss";


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
