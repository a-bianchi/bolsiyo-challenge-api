import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { StockMovement } from 'src/stock-movement/stock-movement.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([StockMovement]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
