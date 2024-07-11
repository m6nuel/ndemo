import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
// import { AuthGuard } from './guard/auth.guard';
// import { Request } from 'express';
// import { Roles } from './decorators/roles.decorator';
// import { RoleGuard } from './guard/role.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/ActiveUser.decorator';
import { UserActiveInterface } from 'src/common/interface/userActive.interface';

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
  profile(@ActiveUser() user: UserActiveInterface) {
    //@Req() req: RequestWithUser
    return this.authService.profile(user); //req.user
  }
}
//https://www.youtube.com/watch?v=D6_dhpzPOvU&t=1897s
