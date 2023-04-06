import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('SRV.a.registr username : ' + 123);
    return 'Hello World!';
  }
}
