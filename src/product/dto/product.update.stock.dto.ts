import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class ProductUpdateStockDto {
  @ApiProperty({
    type: Number,
    description: 'Stock of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
