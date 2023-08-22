import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ErrorRefreshAuthDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'statusCode', default: 401 })
  readonly statusCode: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'message',
    default: 'Unauthorized',
  })
  readonly message: string;
}
