import { IsInt, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
