import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto, CategoryResponseDto } from './dto';
import { Category } from './category.entity';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import {
  CommonBadRequestErrorDto,
  CommonForbiddenErrorDto,
} from 'src/common/dto';
import { RoleGuard } from 'src/role/role.guard';
import { Role } from 'src/role/role.decorator';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOkResponse({
    description: '200',
    type: [CategoryResponseDto],
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @Get('shop/:shopId')
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @HttpCode(HttpStatus.OK)
  async getCategories(@Param('shopId') shopId: number): Promise<Category[]> {
    return this.categoryService.getCategoryByShopId(shopId);
  }

  @ApiCreatedResponse({
    description: '201 Created',
    type: CategoryCreateDto,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @ApiBadRequestResponse({
    description: '400',
    type: CommonBadRequestErrorDto,
  })
  @Post()
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @HttpCode(HttpStatus.CREATED)
  async createCategory(
    @Body() createCategoryDto: CategoryCreateDto,
  ): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiOkResponse({
    description: '200 Ok',
    type: Boolean,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @Delete(':id')
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @HttpCode(HttpStatus.OK)
  async deleteCategory(@Param('id') id: number): Promise<boolean> {
    const eliminate = await this.categoryService.deleteCategory(id);
    return eliminate.affected > 0;
  }
}
