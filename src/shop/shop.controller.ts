import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { Role } from '../role/role.decorator';
import { RoleGuard } from 'src/role/role.guard';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Role('ADMIN')
  @UseGuards(RoleGuard)
  @Get('user/:userId')
  async getShopByUserId(@Param('userId') userId: string) {
    return this.shopService.getShopByUserId(userId);
  }
}
