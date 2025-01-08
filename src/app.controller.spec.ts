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
    it('should return "Hello World - CI & CD! By Felipe Godoy"', () => {
      expect(appController.getHello()).toBe('Hello World - CI & CD! By Felipe Godoy');
    });

    it('should return "Hello World2 - CI & CD! By Felipe Godoy"', () => {
      expect(appController.getHello2()).toBe('Hello World2 - CI & CD! By Felipe Godoy');
    });
  });
});
