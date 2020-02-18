import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../../reducers';
import "./App.scss";

const store = createStore(
  rootReducer,applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <SearchBar />
        <MovieList />
      </Provider>
    </div>
  );
}

export default App;
