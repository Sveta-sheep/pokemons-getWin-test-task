import React from 'react';
import { useLocation } from 'react-router-dom';
import { PokemonFullInfo } from 'types';
import styles from './PokemonDetails.module.scss';

export const PokemonDetails = () => {
  const { state } = useLocation();
  const pokemonInfo = state as PokemonFullInfo;

  return (
    <div className={styles.wrapper}>
      <img src={pokemonInfo?.sprites.front_default || ''} alt="pokemon-front" />
      <img src={pokemonInfo?.sprites.back_default || ''} alt="pokemon-back" />
      <div>{pokemonInfo?.name}</div>
    </div>
  );
};
