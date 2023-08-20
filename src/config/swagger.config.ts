import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Bolsiyo - API Documentation')
  .setDescription('Bolsiyo - Challenge - API Solution.')
  .setVersion('1.0')
  .addTag('API Endpoints')
  .build();
