import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

// объ.метаданных
@Module({
  // масс.`поставщиков`
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
