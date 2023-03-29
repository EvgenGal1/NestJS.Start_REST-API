import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';

// декоратор Module с настр.
@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
// класс с навещаным декоратором
export class AppModule {}
