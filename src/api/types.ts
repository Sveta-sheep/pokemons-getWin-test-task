export type PaginationParams = Partial<{
  limit: number;
  page: number;
}>;

export type PaginationResponse = {
  results: GetPokemonsResponse;
  count: number;
  next: string;
  previous: string;
};

export type GetPokemonFullInfoParams = {
  url: string;
};

export type GetPokemonsResponse = {
  name: string;
  url: string;
}[];

export type Pokemon = {
  id: string;
  name: string;
};
