import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// декоратор Module с настр.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// класс с навещаным декоратором
export class AppModule {}
