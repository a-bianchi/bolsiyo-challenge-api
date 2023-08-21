import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { ReportController } from './report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
