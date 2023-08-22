import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 250, unique: true })
  name: string;

  @Column({ length: 250 })
  description: string;

  @OneToOne(() => User, (user) => user.role)
  user: User;
}
