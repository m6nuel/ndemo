import { IsString, Length } from 'class-validator';

export class CreateTemaDto {
  @IsString()
  @Length(3, 80)
  tema: string;
}
