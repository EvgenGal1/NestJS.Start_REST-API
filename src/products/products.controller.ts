import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // созд.мтд. + декор
  @Get()
  getAll() {
    return 'getAll';
  }
}
