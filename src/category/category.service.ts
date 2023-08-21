import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getCategoryByShopId(shopId: number): Promise<Category[]> {
    return await this.categoryRepository.find({
      select: ['id', 'name'],
      where: { shop: { id: shopId } },
    });
  }

  async createCategory(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async deleteCategory(_id: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(_id);
  }
}
