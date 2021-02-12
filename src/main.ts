import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './middleware/logger.middleware';

function useSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Petshop')
    .setDescription('Api do petshop')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(logger);
  useSwagger(app);

  await app.listen(3000);
}

bootstrap();
