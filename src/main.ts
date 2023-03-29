import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// НАЧАЛО. Обёртка в fn()bootstrap для asyncAwait
async function bootstrap() {
  // ждём созд.модуля и запуск на порту
  const app = await NestFactory.create(AppModule);
  await app.listen(4357);
}
bootstrap();
