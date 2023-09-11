import React, { useEffect, useState } from 'react';
import { getPokemonInfo } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';

export const PokemonCard = ({ url }: GeneralPokemonInfo) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonFullInfo | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonInfo(url)).then((res) => setPokemonInfo(res.pokemonInfo));
  }, []);

  return <div>{pokemonInfo?.name}</div>;
};
