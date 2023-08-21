import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductCreateDto {
  @ApiProperty({
    type: String,
    description: 'Name of the product',
    default: 'Some product',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    description: 'Shop id of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  shopId: number;

  @ApiProperty({
    type: Number,
    description: 'Category id of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty({
    type: Number,
    description: 'Purchase price of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  pricePurchase: number;

  @ApiProperty({
    type: Number,
    description: 'Sale price of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  priceSale: number;

  @ApiProperty({
    type: Number,
    description: 'Stock of the product',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
