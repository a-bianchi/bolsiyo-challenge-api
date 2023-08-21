import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
} from 'typeorm';

@Entity()
@Index('shop_name_index', ['name'], { unique: true })
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @ManyToOne(() => User, (user) => user.shop)
  user: User;
}
