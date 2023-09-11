export interface GeneralPokemonInfo {
  name: string;
  url: string;
}

export type PokemonAbility = {
  slot: number;
  is_hidden: boolean;
  ability: GeneralPokemonInfo;
};

export type PokemonGameIndex = {
  game_index: number;
  version: GeneralPokemonInfo;
};

export type PokemonMove = {
  move: GeneralPokemonInfo;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: GeneralPokemonInfo;
    version_group: GeneralPokemonInfo;
  }[];
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: GeneralPokemonInfo;
};

export type PokemonSprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type PokemonType = {
  slot: number;
  type: GeneralPokemonInfo;
};

export interface PokemonFullInfo {
  id: number;
  abilities: PokemonAbility[];
  base_experience: number;
  forms: GeneralPokemonInfo[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: [];
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: [];
  species: GeneralPokemonInfo;
  stats: PokemonStat[];
  sprites: PokemonSprites;
  types: PokemonType[];
  weight: number;
}
