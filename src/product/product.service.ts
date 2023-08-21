import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';
import { QueryOptions } from './types';
import { ProductUpdateDto } from './dto/product.update.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async getProductsByShopId(queryOptions: QueryOptions): Promise<Product[]> {
    return await this.productRepository.find(queryOptions);
  }

  async createProduct(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async updateProduct(id: number, product: ProductUpdateDto): Promise<Product> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { stock, ...updateWithoutStock } = product;

    await this.productRepository.update(id, updateWithoutStock);

    return this.productRepository.findOne({ where: { id } });
  }

  async updateStock(id: number, quantity: number): Promise<UpdateResult> {
    return this.productRepository.update(id, { stock: quantity });
  }

  async deleteProduct(productId: number): Promise<UpdateResult> {
    return this.productRepository.softDelete(productId);
  }
}
