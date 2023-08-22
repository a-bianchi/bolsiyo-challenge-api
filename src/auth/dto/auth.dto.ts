import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    type: String,
    description: 'email',
    default: 'test@test.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, description: 'password', default: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
