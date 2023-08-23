import {
  Body,
  Controller,
  Get,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Patch,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Product } from './product.entity';
import {
  CommonBadRequestErrorDto,
  CommonForbiddenErrorDto,
} from '../common/dto';
import {
  ProductCreateDto,
  ProductResponseDto,
  ProductUpdateDto,
  ProductUpdateStockDto,
} from './dto';
import { QueryOptions } from './types';
import { RoleGuard } from '../common/guards';
import { Role } from '../common/decorators';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOkResponse({
    description: '200',
    type: [ProductResponseDto],
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @Get('shop/:shopId')
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async getProductsByShopId(
    @Param('shopId') shopId: number,
    @Query('name') name?: string,
  ): Promise<Product[]> {
    const queryOptions: QueryOptions = {};
    queryOptions.where = { shopId: shopId };
    if (name) {
      queryOptions.where.name = name;
    }
    return this.productService.getProductsByShopId(queryOptions);
  }

  @ApiCreatedResponse({
    description: '201 Created',
    type: ProductCreateDto,
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
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  async createProduct(
    @Body() createProductDto: ProductCreateDto,
  ): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @ApiOkResponse({
    description: '200 OK',
    type: ProductResponseDto,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @ApiBadRequestResponse({
    description: '400',
    type: CommonBadRequestErrorDto,
  })
  @Patch(':id')
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: ProductUpdateDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @ApiOkResponse({
    description: '200 OK',
    type: Boolean,
  })
  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: CommonForbiddenErrorDto,
  })
  @ApiBadRequestResponse({
    description: '400',
    type: CommonBadRequestErrorDto,
  })
  @Patch(':id/stock-update')
  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductStockDto: ProductUpdateStockDto,
  ): Promise<boolean> {
    await this.productService.updateStock(id, updateProductStockDto.quantity);
    return true;
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
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async deleteProduct(@Param('id') id: number): Promise<boolean> {
    const eliminate = await this.productService.deleteProduct(id);
    return eliminate.affected > 0;
  }
}
