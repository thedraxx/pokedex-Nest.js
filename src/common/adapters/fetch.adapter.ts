import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    try {
      const getPokemon = await fetch(url);
      const pokemonJson: T = await getPokemon.json();
      return pokemonJson;
    } catch (error) {
      throw new Error('This is an Error');
    }
  }
}
