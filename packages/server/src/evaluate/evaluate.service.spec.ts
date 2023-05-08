import { Test, TestingModule } from '@nestjs/testing';
import { EvaluateService } from './evaluate.service';

describe('Api2Service', () => {
  let service: EvaluateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluateService],
    }).compile();

    service = module.get<EvaluateService>(EvaluateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
