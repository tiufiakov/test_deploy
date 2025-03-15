import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function swagger(app: INestApplication): INestApplication {
  const config = new DocumentBuilder()
    .setTitle('БЛЯ БЛЯ КАР')
    .setDescription('Крупный бизнес')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);

  return app;
}
