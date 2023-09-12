export type PaginationProps = {
  currentPage: number;
  totalAmount: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  pageNeighbours?: number;
};
