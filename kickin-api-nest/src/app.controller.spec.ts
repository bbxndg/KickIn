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
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

/* Explanation of the code above:
 * - This unit test builds a small Nest testing module with only AppController
 *   and AppService, then retrieves the controller from that module.
 * - The test calls getHello() directly and checks its returned value, so it
 *   tests controller behavior without opening an HTTP server.
 * - The end-to-end HTTP test lives separately in test/app.e2e-spec.ts.
 */
