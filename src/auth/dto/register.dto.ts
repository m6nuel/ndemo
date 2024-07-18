import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  name: string;

  @IsOptional()
  @IsString()
  image: string;
}
