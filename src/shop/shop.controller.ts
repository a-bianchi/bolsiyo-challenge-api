import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Role } from '../common/decorators';
import { RoleGuard } from '../common/guards';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @ApiBearerAuth()
  @Get('user/:userId')
  async getShopByUserId(@Param('userId') userId: string) {
    return this.shopService.getShopByUserId(userId);
  }
}
