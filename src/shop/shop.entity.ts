import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  OneToMany,
} from 'typeorm';

@Entity()
@Index('shop_name_userId_index', ['name', 'userId'], { unique: true })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.shop)
  user?: User;

  @OneToMany(() => Category, (category) => category.shop)
  category?: Category[];

  @OneToMany(() => Product, (product) => product.shop)
  product?: Product[];
}
