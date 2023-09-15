import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { FetchAdapter } from '../common/adapters/fetch.adapter';
import { PokemonJSON } from './interface/poke-response.interface';
@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: FetchAdapter,
  ) {}

  async executeSeed(): Promise<any> {
    await this.pokemonModel.deleteMany({});

    const pokemonToInsert: { name: string; no: number }[] = [];
    const pokemonJson: PokemonJSON = await this.http.get(
      'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
    );

    pokemonJson.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'seed executed';
  }
}
