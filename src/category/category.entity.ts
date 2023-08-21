import { Product } from 'src/product/product.entity';
import { Shop } from 'src/shop/shop.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  OneToMany,
} from 'typeorm';

@Entity()
@Index('category_name_shopId_index', ['name', 'shopId'], { unique: true })
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  shopId: number;

  @ManyToOne(() => Shop, (shop) => shop.category)
  shop?: Shop;

  @OneToMany(() => Product, (product) => product.category)
  product?: Product[];
}
