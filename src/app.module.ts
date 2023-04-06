import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsController } from './products/products.controller';
// import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';

// декоратор Module с настр. (imports - др.модули, cntrl,provid - только от App)
@Module({
  imports: [ProductsModule],
  controllers: [AppController /* ProductsController */],
  providers: [AppService /* ProductsService */],
})
// класс с навещаным декоратором
export class AppModule {}
