import { getPokemonFullInfo, getPokemons, PaginationParams } from 'api';
import { handleError } from 'helpers';
import { Dispatch } from 'redux';
import { SET_POKEMON_INFO, SET_POKEMONS } from 'redux/actionTypes';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export const setPokemons = (pokemons: GeneralPokemonInfo[], total: number) => ({ type: SET_POKEMONS, pokemons, total });
export const setPokemonInfo = (pokemonInfo: PokemonFullInfo) => ({ type: SET_POKEMON_INFO, pokemonInfo });

export const getPokemonsList = (props: PaginationParams) => async (dispatch: Dispatch) => {
  try {
    const { results, count } = await getPokemons(props);
    return dispatch(setPokemons(results, count));
  } catch (error) {
    handleError(error);
  }
};

export const getPokemonInfo = (url: string) => async (dispatch: Dispatch) => {
  try {
    const data = await getPokemonFullInfo({ url });
    return dispatch(setPokemonInfo(data));
  } catch (error) {
    handleError(error);
  }
};
