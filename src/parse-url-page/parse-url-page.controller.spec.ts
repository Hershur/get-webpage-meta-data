import { Test, TestingModule } from '@nestjs/testing';
import { ParseUrlPageController } from './parse-url-page.controller';

describe('ParseUrlPageController', () => {
  let controller: ParseUrlPageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParseUrlPageController],
    }).compile();

    controller = module.get<ParseUrlPageController>(ParseUrlPageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
