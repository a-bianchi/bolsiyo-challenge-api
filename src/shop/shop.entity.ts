import { Category } from 'src/category/category.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  OneToMany,
} from 'typeorm';

@Entity()
@Index('shop_name_index', ['name'], { unique: true })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.shop)
  user: User;

  @OneToMany(() => Category, (category) => category.shop)
  category: Category[];
}
