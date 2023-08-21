import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private shopRepository: Repository<Shop>,
  ) {}

  async getShopByUserId(userId: string): Promise<Shop | undefined> {
    return await this.shopRepository.findOne({
      where: { user: { id: userId } },
    });
  }
}
