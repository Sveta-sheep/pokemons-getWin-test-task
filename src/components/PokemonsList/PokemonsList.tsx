import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { PokemonCard } from 'components/PokemonCard/PokemonCard';
import React, { useEffect, useMemo, useState } from 'react';
import { getPokemonsList } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { useAppSelector } from 'redux/hooks/useAppSelector';
import { GeneralPokemonInfo } from 'types';
import styles from './PokemonsList.module.scss';

const POKEMONS_PER_PAGE = 9;

export const PokemonsList = () => {
  const { pokemons, total } = useAppSelector((state) => state.pokemons) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonsList({ page: currentPage, limit: POKEMONS_PER_PAGE }))
      .then((res) => res?.pokemons)
      .finally(() => setLoading(false));
  }, [currentPage]);

  const currentPokemons = useMemo(() => {
    const firstPageIndex = pokemons.length - POKEMONS_PER_PAGE;
    const lastPageIndex = pokemons.length;
    return pokemons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemons, POKEMONS_PER_PAGE]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <div className={styles.pokemonsListWrapper}>
        {currentPokemons.map((pokemon, i) => (
          <PokemonCard key={i} {...(pokemon as GeneralPokemonInfo)} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalAmount={total}
        itemsPerPage={POKEMONS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </div>
  );
};
