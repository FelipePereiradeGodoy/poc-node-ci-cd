import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello1(): string {
    return this.appService.getHello1();
  }

  getHello2(): string {
    return this.appService.getHello2();
  }

  getHello3(): string {
    return this.appService.getHello3();
  }

  getHello4(): string {
    return this.appService.getHello4();
  }
}
