import { PokemonsList } from 'components';
import { PokemonDetails } from 'components/PokemonDetails';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/pokemon-detail/:pokemonId" element={<PokemonDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
