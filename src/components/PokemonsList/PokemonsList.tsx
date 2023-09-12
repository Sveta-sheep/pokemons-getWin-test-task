import { FilterByType } from 'components/FilterByType';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { PokemonCard } from 'components/PokemonCard/PokemonCard';
import { POKEMONS_PER_PAGE, usePokemonsList } from 'components/PokemonsList/usePokemonsList';
import { SearchInput } from 'components/SearchInput';
import React from 'react';
import { PokemonFullInfo } from 'types';
import styles from './PokemonsList.module.scss';

export const PokemonsList = () => {
  const { pokemonsList, total, query, selectedType, setQuery, currentPage, onPageChange, isLoading, setSelectedType } =
    usePokemonsList();

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <div className={styles.inputWrapper}>
        <SearchInput query={query} setQuery={setQuery} />
        <FilterByType setSelectedType={setSelectedType} />
      </div>
      {(query || selectedType) && !pokemonsList.length ? (
        <div style={{ height: '50%' }}>No pokemons with this {query ? 'name' : 'type'}.</div>
      ) : (
        <div className={styles.pokemonsListWrapper}>
          {pokemonsList.map((pokemon, i) => (
            <PokemonCard key={i} {...(pokemon as PokemonFullInfo)} />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalAmount={total}
        itemsPerPage={POKEMONS_PER_PAGE}
        onPageChange={onPageChange}
      />
    </div>
  );
};
