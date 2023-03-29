import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
// экспорт класс AppController с декор. Controller
export class AppController {
  // инжектируем appService с таким же типом
  constructor(private readonly appService: AppService) {}

  // метод с декор.
  @Get()
  getHello(): string {
    // возврат раб.сервиса
    return 'Helloy NestJS'; /* this.appService.getHello(); */
  }
}
