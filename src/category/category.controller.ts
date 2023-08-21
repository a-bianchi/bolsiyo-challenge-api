import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('shop/:shopId')
  async getCategories(@Param('shopId') shopId: number): Promise<Category[]> {
    return this.categoryService.getCategoryByShopId(shopId);
  }

  @Post()
  async createCategory(
    @Body() createCategoryDto: CategoryCreateDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
