import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from './ping.controller';

describe('PingController', () => {
  let pingController: PingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PingController],
      providers: [],
    }).compile();

    pingController = app.get<PingController>(PingController);
  });

  describe('root', () => {
    it('should return "OK"', () => {
      expect(pingController.ping()).toBe('OK');
    });
  });
});
