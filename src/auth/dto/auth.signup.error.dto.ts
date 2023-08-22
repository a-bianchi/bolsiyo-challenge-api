import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ErrorSignUpAuthDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'statusCode', default: 409 })
  readonly statusCode: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'message',
    default: 'email already exists',
  })
  readonly message: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'error',
    default: 'Conflict',
  })
  readonly error: string;
}
