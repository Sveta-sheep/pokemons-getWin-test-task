import { getPokemonFullInfo, getPokemons, PaginationParams } from 'api';
import { Dispatch } from 'redux';
import { SET_POKEMON_INFO, SET_POKEMONS } from 'redux/actionTypes';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export const setPokemons = (pokemons: GeneralPokemonInfo[], total: number) => ({ type: SET_POKEMONS, pokemons, total });
export const setPokemonInfo = (pokemonInfo: PokemonFullInfo) => ({ type: SET_POKEMON_INFO, pokemonInfo });

export const getPokemonsList = (props: PaginationParams) => async (dispatch: Dispatch) => {
  const { results, count } = await getPokemons(props).then((res) => res);
  return dispatch(setPokemons(results, count));
};

export const getPokemonInfo = (url: string) => async (dispatch: Dispatch) => {
  const data = await getPokemonFullInfo({ url });
  return dispatch(setPokemonInfo(data));
};
