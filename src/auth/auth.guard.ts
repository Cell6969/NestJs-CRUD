/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard as AuthGuardPassport } from '@nestjs/passport'

@Injectable()
export class AuthGuard extends AuthGuardPassport('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user,) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
