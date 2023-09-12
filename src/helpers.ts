import axios from 'axios';
import { toast } from 'react-toastify';
import { PokemonFullInfo } from 'types';

export const capitalize = (text?: string) => {
  if (!text) return;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const showToast = (message: string, type: 'error' | 'success' | 'warning') => {
  toast.dismiss();
  toast[type](message);
};

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error) && error.response) {
    showToast(error.response.data?.message, 'error');
  } else {
    const message = String(error);
    showToast(message, 'error');
  }
};

export const search = <T extends object>(array: T[], field: keyof T, query?: string) => {
  if (!query) return array;

  return array.filter((item) => (item[field] as unknown as string)?.toLowerCase()?.includes(query.toLowerCase()));
};

export const filterPokemonsByType = (pokemons: PokemonFullInfo[], selectedType?: string) => {
  if (!selectedType || selectedType === 'all') return pokemons;

  return pokemons.filter((pokemon) => {
    return pokemon.types.some((type) => type.type.name === selectedType);
  });
};
