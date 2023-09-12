import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { getPokemonTypes } from 'redux/actionCreators';
import { useAppDispatch } from 'redux/hooks/useAppDispatch';
import { useAppSelector } from 'redux/hooks/useAppSelector';
import styles from './FilterByType.module.scss';

type FilterByTypeProps = {
  setSelectedType: Dispatch<SetStateAction<string>>;
};

export const FilterByType = ({ setSelectedType }: FilterByTypeProps) => {
  const [isListOpen, setListOpen] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemonTypes()).then((res) => res?.pokemonTypes.unshift({ name: 'all', url: '' }));
  }, []);

  const onTypeClick = (name: string) => {
    setSelectedType(name);
    setListOpen(false);
  };

  return (
    <>
      <img
        ref={ref}
        onClick={() => setListOpen((prev) => !prev)}
        className={styles.filterIcon}
        src="/filter.png"
        alt="filter-icon"
      />
      {isListOpen && (
        <div
          className={styles.dropdown}
          style={{ top: (ref.current?.offsetTop || 0) + 24, left: ref.current?.offsetLeft }}>
          {types.map((type, index) => (
            <div className={styles.dropdownItem} onClick={() => onTypeClick(type.name)} key={index}>
              {type.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
