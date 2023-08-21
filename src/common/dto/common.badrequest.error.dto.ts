import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CommonBadRequestErrorDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'statusCode', default: 400 })
  readonly statusCode: number;

  @IsString()
  @ApiProperty({
    type: Array,
    description: 'message',
    default: ['Name should not be empty'],
  })
  readonly message: [];

  @IsString()
  @ApiProperty({
    type: String,
    description: 'error',
    default: 'Bad Request',
  })
  readonly error: string;
}
