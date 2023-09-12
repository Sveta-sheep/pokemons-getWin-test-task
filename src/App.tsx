import { PokemonsList } from 'components/PokemonsList/PokemonsList';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <PokemonsList />
    </Provider>
  );
}

export default App;
