import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AtStrategy, RtStrategy } from './strategies';
import { AuthController } from './auth.controller';

@Module({
  imports: [JwtModule.register({}), UserModule],
  providers: [AuthService, AtStrategy, RtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
