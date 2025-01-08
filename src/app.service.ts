import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor () {}

  getHello1(): string {
    return `Hello World1 - CI & CD! By Felipe Godoy`;
  }

  getHello2(): string {
    return `Hello World2 - CI & CD! By Felipe Godoy`;
  }

  getHello3(): string {
    return `Hello World3 - CI & CD! By Felipe Godoy`;
  }

  getHello4(): string {
    return `Hello World4 - CI & CD! By Felipe Godoy`;
  }
}
