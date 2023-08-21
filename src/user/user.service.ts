import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Tokens } from 'src/auth/types';
import * as bycryptjs from 'bcryptjs';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(_id: string): Promise<User[]> {
    return await this.userRepository.find({
      select: ['id', 'email', 'isActive', 'createdAt', 'updatedAt'],
      where: [{ id: _id }],
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({
      select: ['id', 'email', 'password', 'isActive', 'createdAt', 'updatedAt'],
      where: [{ email: email }],
    });
  }

  async createUser(email: string, password: string): Promise<any | null> {
    try {
      const user = await this.getUserByEmail(email);

      if (user) return null;

      const userId = uuid();
      const hash = await bycryptjs.hash(password, 10);
      const tokens = await this.getTokens(userId, email);
      const hashrt = await bycryptjs.hash(tokens.refresh_token, 10);

      const newUser = await this.userRepository.create({
        id: userId,
        email,
        password: hash,
        hashrt,
      });

      return {
        ...tokens,
        ...newUser,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateUser(user: User): Promise<void> {
    try {
      this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteUser(_id: string): Promise<void> {
    try {
      await this.userRepository.delete(_id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const jwtPayload = {
      sub: userId,
      email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async updateRtUser(userId: string, refresh_token?: string): Promise<void> {
    try {
      const hashrt = refresh_token
        ? await bycryptjs.hash(refresh_token, 10)
        : null;

      await this.userRepository.update(userId, { hashrt });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
