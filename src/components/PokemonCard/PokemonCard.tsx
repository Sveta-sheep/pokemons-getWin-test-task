import { capitalize } from 'helpers';
import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonFullInfo } from 'types';
import styles from './PokemonCard.module.scss';

export const PokemonCard = (pokemonInfo: PokemonFullInfo) => (
  <Link
    style={{ textDecoration: 'none', color: 'black' }}
    to={`/pokemon-detail/${pokemonInfo?.id}`}
    state={pokemonInfo}>
    <div className={styles.cardWrapper}>
      <img src={pokemonInfo?.sprites?.front_default || ''} alt="pokemon-sprite-front" />
      <div className={styles.name}>{capitalize(pokemonInfo?.name)}</div>
    </div>
  </Link>
);
