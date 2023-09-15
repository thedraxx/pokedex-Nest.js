export interface PokeResponse {
  pokemonJson: PokemonJSON;
}

export interface PokemonJSON {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
