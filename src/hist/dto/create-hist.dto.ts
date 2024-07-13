import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class CreateHistDto {
  @IsString()
  @Length(3, 60)
  title: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  temaId: number;
}
