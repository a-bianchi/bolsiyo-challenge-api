import { Shop } from 'src/shop/shop.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToOne,
} from 'typeorm';

@Entity()
@Index('user_email_index', ['email'], { unique: true })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @OneToOne(() => Shop, (shop) => shop.user)
  shop: Shop;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
