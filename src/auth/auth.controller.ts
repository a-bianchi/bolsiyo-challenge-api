import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  AuthDto,
  ErrorRefreshAuthDto,
  ErrorSignUpAuthDto,
  TokenDtoResponse,
} from './dto';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser,
} from 'src/common/decorators';
import { ErrorSignInAuthDto } from './dto/auth.singin.error.dto';
import { AtGuard, RtGuard } from 'src/common/guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({
    description: '201 Created',
    type: TokenDtoResponse,
  })
  @ApiConflictResponse({
    description: '409 Conflict',
    type: ErrorSignUpAuthDto,
  })
  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() authDto: AuthDto): Promise<TokenDtoResponse> {
    return this.authService.signupLocal(authDto);
  }

  @ApiForbiddenResponse({
    description: '403 Forbidden',
    type: ErrorSignInAuthDto,
  })
  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<TokenDtoResponse> {
    return this.authService.signinLocal(dto);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string): Promise<boolean> {
    return this.authService.logout(userId);
  }

  @ApiUnauthorizedResponse({
    description: '403 Forbidden',
    type: ErrorRefreshAuthDto,
  })
  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<TokenDtoResponse> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
