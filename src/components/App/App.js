import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../../reducers';
import "./App.scss";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
