import { Loader } from 'components/Loader';
import { capitalize } from 'helpers';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonInfo } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { GeneralPokemonInfo, PokemonFullInfo } from 'types';
import styles from './PokemonCard.module.scss';

export const PokemonCard = ({ url }: GeneralPokemonInfo) => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonFullInfo>();
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonInfo(url))
      .then((res) => setPokemonInfo(res?.pokemonInfo))
      .finally(() => setLoading(false));
  }, [url]);

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/pokemon-detail/${pokemonInfo?.id}`}
      state={pokemonInfo}>
      <div className={styles.cardWrapper}>
        {isLoading && <Loader />}
        <img src={pokemonInfo?.sprites.front_default || ''} alt="pokemon-sprite-front" />
        <div className={styles.name}>{capitalize(pokemonInfo?.name)}</div>
      </div>
    </Link>
  );
};
