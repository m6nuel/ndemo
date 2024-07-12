import {
  BadRequestException,
  Injectable,
  // UnauthorizedException,
} from '@nestjs/common';
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

    const payload = { email: user.email, role: user.role, id: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userService.findByEmail(registerDto.email);
    if (!user) {
      return this.userService.create(registerDto);
    }
    throw new BadRequestException('El usuario ya existe');
  }

  async profile({ email }: { email: string; role: string }) {
    // if (role !== 'admin') {
    //   throw new UnauthorizedException('No Autorizado');
    // }
    const user = await this.userService.findByEmail(email);
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      deleted: user.deleted,
    };
  }
}
