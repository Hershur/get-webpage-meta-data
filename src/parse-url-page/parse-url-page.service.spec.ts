import { Test, TestingModule } from '@nestjs/testing';
import { ParseUrlPageService } from './parse-url-page.service';

describe('ParseUrlPageService', () => {
  let service: ParseUrlPageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParseUrlPageService],
    }).compile();

    service = module.get<ParseUrlPageService>(ParseUrlPageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
