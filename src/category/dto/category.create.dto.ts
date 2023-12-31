import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CategoryCreateDto {
  @ApiProperty({
    type: Number,
    description: 'Id of the category',
    default: '1',
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: String,
    description: 'Name of the category',
    default: 'Some category',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    description: 'Shop id of the category',
    default: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  shopId: number;
}
