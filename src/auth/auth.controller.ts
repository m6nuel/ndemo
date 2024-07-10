import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
// import { Roles } from './decorators/roles.decorator';
// import { RoleGuard } from './guard/role.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Get('profile')
  @Auth(Role.User)
  // @Roles(Role.Admin)
  // @UseGuards(AuthGuard, RoleGuard)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile({
      email: req.user.email,
      role: req.user.role,
    });
  }
}
