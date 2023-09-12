import { useCallback, useMemo } from 'react';
import { DOTS } from './constants';
import { PaginationProps } from './types';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  pageNeighbours = 1,
  onPageChange,
  currentPage,
  itemsPerPage,
  totalAmount,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalAmount / itemsPerPage);
  const paginationRange = useMemo(() => {
    // Page numbers is determined as pageNeighbours + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = pageNeighbours + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftNeighbourIndex = Math.max(currentPage - pageNeighbours, 1);
    const rightNeighbourIndex = Math.min(currentPage + pageNeighbours, totalPages);

    const shouldShowLeftDots = leftNeighbourIndex > 2;
    const shouldShowRightDots = rightNeighbourIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;
    const visibleItemsCount = 3 + 2 * pageNeighbours;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(firstPageIndex, visibleItemsCount);

      return [...leftRange, DOTS, lastPageIndex];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - visibleItemsCount + 1, totalPages);

      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftNeighbourIndex, rightNeighbourIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [currentPage, pageNeighbours, totalAmount, itemsPerPage]);

  const goToNextPage = useCallback(() => {
    onPageChange(currentPage + (currentPage >= totalPages ? 0 : 1));
  }, [currentPage, totalPages]);
  const goToPrevPage = useCallback(() => {
    onPageChange(currentPage + (currentPage <= 1 ? 0 : -1));
  }, [currentPage]);

  return {
    goToNextPage,
    goToPrevPage,
    paginationRange,
  };
};
