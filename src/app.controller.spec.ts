import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World"', () => {
      expect(appController.getHelloWorld()).toBe('Hello World');
    });

    it('should return "Hello Felipe Godoy"', () => {
      expect(appController.getHelloDev()).toBe('Hello Felipe Godoy');
    });

    it('should return "Hello POC-CI-CD"', () => {
      expect(appController.getHelloRepo()).toBe('Hello POC-CI-CD');
    });

    it('should return "Hello"', () => {
      expect(appController.getHello()).toBe('Hello');
    });
  });
});
