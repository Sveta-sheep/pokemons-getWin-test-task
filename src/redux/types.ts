import { ThunkDispatch } from 'redux-thunk';
import { store } from 'redux/store';
import { GeneralPokemonInfo, PokemonFullInfo, PokemonType } from 'types';

export type PokemonState = {
  pokemons: (GeneralPokemonInfo | PokemonFullInfo)[];
  total: number;
  types: PokemonType[];
};

export type PokemonAction = {
  type: string;
  pokemons?: GeneralPokemonInfo[];
  total?: number;
  pokemonTypes?: PokemonType[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, PokemonAction>;
