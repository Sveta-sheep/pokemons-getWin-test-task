import { PokemonCard } from 'components/PokemonCard';
import React, { useEffect, useState } from 'react';
import { getPokemonsList } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { useAppSelector } from 'redux/hooks/useAppSelector';
import { GeneralPokemonInfo } from 'types';

export const PokemonsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pokemons } = useAppSelector((state) => state.pokemons) || [];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemonsList({ page: currentPage, limit: 20 })).then((res) => res.pokemons);
  }, [currentPage]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        {pokemons.map((pokemon, i) => (
          <PokemonCard key={i} {...(pokemon as GeneralPokemonInfo)} />
        ))}
      </div>
      <div>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}> go next </button>
        <div>{currentPage}</div>
        <button> go back </button>
      </div>
    </div>
  );
};
