import { capitalize } from 'helpers';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PokemonFullInfo } from 'types';
import styles from './PokemonDetails.module.scss';

export const PokemonDetails = () => {
  const { state } = useLocation();
  const pokemonInfo = state as PokemonFullInfo;

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <div className={styles.name}>{capitalize(pokemonInfo.name)}</div>
        <div className={styles.imagesWrapper}>
          <img className={styles.image} src={pokemonInfo?.sprites.front_default || ''} alt="pokemon-front" />
          <img className={styles.image} src={pokemonInfo?.sprites.back_default || ''} alt="pokemon-back" />
        </div>
        <div className={styles.parametersWrapper}>
          <p className={styles.paragraph}>Height: {pokemonInfo.height}</p>
          <p className={styles.paragraph}>Weight: {pokemonInfo.weight}</p>
        </div>
        <div className={styles.infoWrapper}>
          <DetailInfo title="Types" items={pokemonInfo.types.map((type) => type.type.name)} />
          <DetailInfo title="Abilities" items={pokemonInfo.abilities.map((ability) => ability.ability.name)} />
          <DetailInfo title="Moves" items={pokemonInfo.moves.map((move) => move.move.name)} canScroll />
          <DetailInfo title="Stats" items={pokemonInfo.stats.map((stat) => stat.stat.name)} canScroll />
        </div>
      </div>
    </div>
  );
};

type DetailInfoProps = {
  title: string;
  items: string[];
  canScroll?: boolean;
};

const DetailInfo = ({ items, title, canScroll }: DetailInfoProps) => {
  return (
    <div className={styles.detailInfoWrapper}>
      <div className={styles.title}>{title}:</div>
      <ul className={styles.list} style={canScroll ? { maxHeight: 150, overflow: 'scroll' } : {}}>
        {items.map((item, index) => (
          <li className={styles.listItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
