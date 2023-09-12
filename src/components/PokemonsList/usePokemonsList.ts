import { filterPokemonsByType, search } from 'helpers';
import { useEffect, useMemo, useState } from 'react';
import { getPokemonsList } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { useAppSelector } from 'redux/hooks/useAppSelector';
import { PokemonFullInfo } from 'types';

export const POKEMONS_PER_PAGE = 9;

export const usePokemonsList = () => {
  const { pokemons, total } = useAppSelector((state) => state.pokemons) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const dispatch = useAppDispatch();

  const onPageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemonsList({ page: currentPage, limit: POKEMONS_PER_PAGE })).finally(() => setLoading(false));
  }, [currentPage]);

  const slicedPokemons = useMemo(() => {
    const firstPageIndex = pokemons.length - POKEMONS_PER_PAGE;
    const lastPageIndex = pokemons.length;
    return pokemons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemons, POKEMONS_PER_PAGE]);

  const pokemonsList = useMemo(() => {
    const foundedPokemons = search(slicedPokemons, 'name', query);

    return filterPokemonsByType(foundedPokemons as PokemonFullInfo[], selectedType);
  }, [query, selectedType, slicedPokemons]);

  return {
    total,
    currentPage,
    isLoading,
    query,
    setQuery,
    onPageChange,
    pokemonsList,
    setSelectedType,
    selectedType,
  };
};
