import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto';
import { Tokens } from './types';
import * as bycryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async signupLocal({ email, password }: AuthDto): Promise<Tokens> {
    const newUserDb = await this.userService.createUser(email, password);

    if (!newUserDb) throw new ConflictException('email already exists');

    return {
      access_token: newUserDb.access_token,
      refresh_token: newUserDb.refresh_token,
    };
  }

  async signinLocal({ email, password }: AuthDto): Promise<Tokens> {
    const userDb = await this.userService.getUserByEmail(email);
    if (!userDb) throw new ForbiddenException('Access Denied');

    const passswordMatches = await bycryptjs.compare(password, userDb.password);
    if (!passswordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.userService.getTokens(userDb.id, userDb.email);

    await this.userService.updateRtUser(userDb.user_id, tokens.refresh_token);

    return tokens;
  }
}