import { Role } from '../role/role.entity';
import { Shop } from '../shop/shop.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@Index('user_email_index', ['email'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 1 })
  roleId: number;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ nullable: true })
  hashrt: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Shop, (shop) => shop.user)
  shop: Shop;

  @OneToOne(() => Role, (role) => role.user, { eager: true })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
