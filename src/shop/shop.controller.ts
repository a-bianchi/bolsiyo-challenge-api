import { Controller, Get, Param } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('user/:userId')
  async getShopByUserId(@Param('userId') userId: string) {
    return this.shopService.getShopByUserId(userId);
  }
}
