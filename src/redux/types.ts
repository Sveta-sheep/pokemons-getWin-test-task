import { ThunkDispatch } from 'redux-thunk';
import { store } from 'redux/store';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export type PokemonState = {
  pokemons: GeneralPokemonInfo[];
  total: number;
};

export type PokemonAction = {
  type: string;
  pokemons?: GeneralPokemonInfo[];
  total?: number;
  pokemon?: PokemonFullInfo;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, PokemonAction>;
