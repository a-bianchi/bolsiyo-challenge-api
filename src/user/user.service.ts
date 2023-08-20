import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: string): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'email', 'isActive', 'createdAt', 'updatedAt'],
      where: [{ id: _id }],
    });
  }

  async updateUser(user: User): Promise<void> {
    this.usersRepository.save(user);
  }

  async deleteUser(_id: string): Promise<void> {
    this.usersRepository.delete(_id);
  }
}
