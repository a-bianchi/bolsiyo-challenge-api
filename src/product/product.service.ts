import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';
import { QueryOptions } from './types';
import { ProductUpdateDto } from './dto/product.update.dto';
import { StockMovement } from 'src/stock-movement/stock-movement.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(StockMovement)
    private stockMovementRepository: Repository<StockMovement>,
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

  async deleteProduct(productId: number): Promise<UpdateResult> {
    return this.productRepository.softDelete(productId);
  }

  async loadUnitsToStock(productId: number, quantity: number): Promise<void> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    await this.productRepository.update(productId, { stock: quantity });

    const stockMovement = new StockMovement();
    stockMovement.productId = productId;
    stockMovement.stock = quantity;
    stockMovement.timestamp = new Date();
    await this.stockMovementRepository.save(stockMovement);
  }
}
