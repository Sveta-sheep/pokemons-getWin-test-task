import { getPokemonFullInfo, getPokemons, getPokemonTypesRequest, PaginationParams } from 'api';
import { handleError } from 'helpers';
import { Dispatch } from 'redux';
import { SET_POKEMON_TYPES, SET_POKEMONS } from 'redux/actionTypes';
import { PokemonFullInfo, PokemonType } from 'types';

export const setPokemons = (pokemons: PokemonFullInfo[], total: number) => ({ type: SET_POKEMONS, pokemons, total });
export const setPokemonTypes = (pokemonTypes: PokemonType[]) => ({ type: SET_POKEMON_TYPES, pokemonTypes });

export const getPokemonsList = (props: PaginationParams) => async (dispatch: Dispatch) => {
  try {
    const { results, count } = await getPokemons(props);
    const pokemons = await Promise.all(results.map(({ url }) => getPokemonFullInfo({ url })));

    return dispatch(setPokemons(pokemons, count));
  } catch (error) {
    handleError(error);
  }
};

export const getPokemonTypes = () => async (dispatch: Dispatch) => {
  try {
    const { results } = await getPokemonTypesRequest();
    return dispatch(setPokemonTypes(results));
  } catch (error) {
    handleError(error);
  }
};
