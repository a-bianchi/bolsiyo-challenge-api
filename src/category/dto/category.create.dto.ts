import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CategoryCreateDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  shopId: number;
}
