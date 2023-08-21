import { TypeOrmModule } from '@nestjs/typeorm';
import { StockMovement } from './stock-movement.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([StockMovement])],
  providers: [],
  controllers: [],
})
export class StockMovementModule {}
