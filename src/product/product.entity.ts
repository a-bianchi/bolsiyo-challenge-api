import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Shop } from 'src/shop/shop.entity';
import { Category } from 'src/category/category.entity';

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

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
