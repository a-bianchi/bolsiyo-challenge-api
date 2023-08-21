import { Shop } from 'src/shop/shop.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';

@Entity()
@Index('category_name_index', ['name'], { unique: true })
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  shopId: number;

  @ManyToOne(() => Shop, (shop) => shop.category)
  shop?: Shop;
}
