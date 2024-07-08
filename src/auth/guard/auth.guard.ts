import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { jwtConstantSecret } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.ExtractTokenFromHeader(request);
    if (!token) {
      throw new BadRequestException('No Autorizado');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstantSecret.secret,
      });
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private ExtractTokenFromHeader(resquest: Request): string | undefined {
    const [type, token] = resquest.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
