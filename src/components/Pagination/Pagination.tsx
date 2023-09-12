import { usePagination } from 'components/Pagination/usePagination';
import React from 'react';
import { DOTS } from './constants';
import styles from './Pagination.module.scss';
import { PaginationProps } from './types';

const MINIMAL_PAGINATION_PAGES = 2; // minimal number of pages for showing pagination JSX

export const Pagination = (props: PaginationProps) => {
  const { currentPage, onPageChange } = props;
  const { paginationRange = [], goToNextPage, goToPrevPage } = usePagination(props);

  if (currentPage === 0 || paginationRange.length < MINIMAL_PAGINATION_PAGES) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={styles.paginationContainer}>
      {/* Left navigation arrow */}
      <li
        className={`${styles.paginationItem}${currentPage === 1 ? ` ${styles.disabled}` : ''}`}
        onClick={goToPrevPage}>
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber, index) =>
        pageNumber === DOTS ? (
          <li key={`${pageNumber} - ${index}`} className={`${styles.paginationItem} ${styles.dots}`}>
            &#8230;
          </li>
        ) : (
          <li
            key={pageNumber}
            className={`${styles.paginationItem}${pageNumber === currentPage ? ` ${styles.selected}` : ''}`}
            onClick={() => onPageChange(+pageNumber)}>
            {pageNumber}
          </li>
        )
      )}
      {/*  Right Navigation arrow */}
      <li
        className={`${styles.paginationItem}${currentPage === lastPage ? ` ${styles.disabled}` : ''}`}
        onClick={goToNextPage}>
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};
