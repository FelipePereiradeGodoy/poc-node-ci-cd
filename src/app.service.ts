import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor () {}

  getHello(): string {
    return `Hello World - CI & CD! By Felipe Godoy`;
  }

  getHello2(): string {
    return `Hello World2 - CI & CD! By Felipe Godoy`;
  }
}
