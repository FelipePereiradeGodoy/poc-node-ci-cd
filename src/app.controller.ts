import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHelloWorld(): string {
    return this.appService.getHelloWorld();
  }

  @Get('hello-dev')
  getHelloDev(): string {
    return this.appService.getHelloDev();
  }

  @Get('hello-repo')
  getHelloRepo(): string {
    return this.appService.getHelloRepo();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
