import { PokemonsList } from 'components/PokemonsList';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PokemonsList />
    </Provider>
  );
}

export default App;
