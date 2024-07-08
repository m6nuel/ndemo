import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login({ email }: LoginDto) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('usuario no registrado');
    }

    const payload = { email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  register(registerDto: RegisterDto) {
    return this.userService.create(registerDto);
  }
}
