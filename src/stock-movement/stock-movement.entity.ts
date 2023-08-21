import { Product } from 'src/product/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@Index('stock_movement_productId_index', ['productId'])
export class StockMovement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  stock: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => Product, (product) => product.stockMovements)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
