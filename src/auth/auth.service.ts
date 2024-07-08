import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async login({ email }: LoginDto) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('usuario no registrado');
    }
    return user;
  }

  register(registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }
}
