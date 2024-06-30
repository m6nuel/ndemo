import { IsString, Length } from 'class-validator';

export class CreateHistDto {
  @IsString()
  @Length(3, 60)
  title: string;
}
