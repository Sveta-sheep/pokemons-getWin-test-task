import { SET_POKEMON_INFO, SET_POKEMONS } from 'redux/actionTypes';
import { PokemonAction, PokemonState } from 'redux/types';

const initialState: PokemonState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initialState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case SET_POKEMONS: {
      const { pokemons = [] } = action;
      return {
        pokemons: [...state.pokemons, ...pokemons],
      };
    }
    case SET_POKEMON_INFO: {
      const index = state.pokemons.findIndex((pokemon) => pokemon.name === action?.pokemon?.name);
      if (index !== -1) {
        state.pokemons[index] = { ...state.pokemons[index], ...action?.pokemon };
        return state;
      }

      return state;
    }
    default:
      return state;
  }
};
