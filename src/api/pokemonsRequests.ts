import { PokemonFullInfo } from 'types';
import { axiosApi } from './axios';
import { GetPokemonFullInfoParams, PaginationParams, PaginationResponse } from './types';

export const getPokemons = (props?: PaginationParams) =>
  axiosApi
    .get<PaginationResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${props?.limit}&offset=${props?.page}}`)
    .then((response) => response.data);

export const getPokemonFullInfo = ({ url }: GetPokemonFullInfoParams) =>
  axiosApi.get<PokemonFullInfo>(`${url}`).then((response) => response.data);
