import { Injectable } from '@nestjs/common';
import { PokemonJSON } from './interface/poke-response.interface';

@Injectable()
export class SeedService {
  async executeSeed(): Promise<any> {
    const getPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=`,
    );
    const pokemonJson: PokemonJSON = await getPokemon.json();
    pokemonJson.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      console.log({ name, no });
    });
    return pokemonJson.results;
  }
}
