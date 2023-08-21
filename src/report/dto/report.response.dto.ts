import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class ProductData {
  @ApiProperty({ type: Number, description: 'Id of the product' })
  @IsNumber()
  id: number;

  @ApiProperty({ type: String, description: 'Name of the product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: Number, description: 'Category id of the product' })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty({ type: Number, description: 'Stock of the product' })
  @IsNumber()
  @IsNotEmpty()
  stock: number;
}

export class ReportResponseDto {
  @ApiProperty({ type: [ProductData], description: 'Array of product data' })
  data: ProductData[];
}
