import { ThunkDispatch } from 'redux-thunk';
import { store } from 'redux/store';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export type PokemonState = {
  pokemons: (GeneralPokemonInfo | PokemonFullInfo)[];
};

export type PokemonAction = {
  type: string;
  pokemons?: GeneralPokemonInfo[];
  pokemon?: PokemonFullInfo;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, PokemonAction>;
