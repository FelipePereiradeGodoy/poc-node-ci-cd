import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor () {}

  getHelloWorld(): string {
    return `Hello World`;
  }

  getHelloDev(): string {
    return `Hello Felipe Godoy`;
  }

  getHelloRepo(): string {
    return `Hello POC-CI-CD`;
  }

  getHello(): string {
    return `Hello`;
  }
}
