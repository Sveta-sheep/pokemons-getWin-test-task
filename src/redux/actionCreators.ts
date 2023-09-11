import { getPokemonFullInfo, getPokemons, PaginationParams } from 'api';
import { Dispatch } from 'redux';
import { SET_POKEMON_INFO, SET_POKEMONS } from 'redux/actionTypes';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export const setPokemons = (pokemons: GeneralPokemonInfo[]) => ({ type: SET_POKEMONS, pokemons });
export const setPokemonInfo = (pokemonInfo: PokemonFullInfo) => ({ type: SET_POKEMON_INFO, pokemonInfo });

export const getPokemonsList = (props: PaginationParams) => async (dispatch: Dispatch) => {
  const data = await getPokemons(props).then((res) => res.results);
  return dispatch(setPokemons(data));
};

export const getPokemonInfo = (url: string) => async (dispatch: Dispatch) => {
  const data = await getPokemonFullInfo({ url });
  return dispatch(setPokemonInfo(data));
};
