import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PingController } from './ping.controller';
import { UserModule } from './user/user.module';
import { ormConfig } from './config';
import { ShopModule } from './shop/shop.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ormConfig,
    }),
    UserModule,
    ShopModule,
    CategoryModule,
  ],
  controllers: [PingController],
  providers: [],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT') || 3000;
  }
}
