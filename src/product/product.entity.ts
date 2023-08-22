import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Shop } from '../shop/shop.entity';
import { Category } from '../category/category.entity';
import { StockMovement } from '../stock-movement/stock-movement.entity';

@Entity()
@Index('product_name_shopId_categoryId_index', ['name', 'shopId', 'categoryId'])
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  pricePurchase: number;

  @Column()
  priceSale: number;

  @Column()
  stock: number;

  @Column()
  shopId: number;

  @Column()
  categoryId: number;

  @ManyToOne(() => Shop, (shop) => shop.product)
  shop?: Shop;

  @ManyToOne(() => Category, (category) => category.product)
  category?: Category;

  @OneToMany(() => StockMovement, (stockMovement) => stockMovement.product)
  stockMovements?: StockMovement[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
