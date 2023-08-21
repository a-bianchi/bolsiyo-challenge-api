import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ProductUpdateDto {
  @ApiProperty({
    type: String,
    description: 'Name of the product',
    default: 'Some product',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    type: Number,
    description: 'Shop id of the product',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  shopId?: number;

  @ApiProperty({
    type: Number,
    description: 'Category id of the product',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({
    type: Number,
    description: 'Purchase price of the product',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  pricePurchase?: number;

  @ApiProperty({
    type: Number,
    description: 'Sale price of the product',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  priceSale?: number;

  @ApiProperty({
    type: Number,
    description: 'Stock of the product',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  stock?: number;
}
