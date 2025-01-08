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
    it('should return "Hello World1 - CI & CD! By Felipe Godoy"', () => {
      expect(appController.getHello1()).toBe('Hello World1 - CI & CD! By Felipe Godoy');
    });

    it('should return "Hello World2 - CI & CD! By Felipe Godoy"', () => {
      expect(appController.getHello2()).toBe('Hello World2 - CI & CD! By Felipe Godoy');
    });

    it('should return "Hello World3 - CI & CD! By Felipe Godoy"', () => {
      expect(appController.getHello3()).toBe('Hello World3 - CI & CD! By Felipe Godoy');
    });
  });
});
