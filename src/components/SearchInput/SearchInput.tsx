import React, { Dispatch, SetStateAction } from 'react';
import styles from './SearchInput.module.scss';

type SearchInputProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({ query, setQuery }: SearchInputProps) => (
  <input
    className={styles.styledInput}
    placeholder="Search pokemon by name"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);
