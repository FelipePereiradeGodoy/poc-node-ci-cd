import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor () {}

  getHello(): string {
    return `Hello World - CI & CD! By Felipe Pereira de Godoy`;
  }
}
