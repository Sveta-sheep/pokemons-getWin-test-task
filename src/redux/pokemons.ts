import { SET_POKEMON_TYPES, SET_POKEMONS } from 'redux/actionTypes';
import { PokemonAction, PokemonState } from 'redux/types';

const initialState: PokemonState = {
  pokemons: [],
  total: 0,
  types: [],
};

export const pokemonsReducer = (state = initialState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case SET_POKEMONS: {
      const { pokemons = [], total = 0 } = action;

      return {
        ...state,
        total,
        pokemons: [...state.pokemons, ...pokemons],
      };
    }

    case SET_POKEMON_TYPES: {
      const { pokemonTypes = [] } = action;

      return {
        ...state,
        types: pokemonTypes,
      };
    }

    default:
      return state;
  }
};
