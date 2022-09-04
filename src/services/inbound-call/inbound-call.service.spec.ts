import { Test, TestingModule } from '@nestjs/testing';
import { InboundCallService } from './inbound-call.service';

describe('InboundCallService', () => {
  let service: InboundCallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InboundCallService],
    }).compile();

    service = module.get<InboundCallService>(InboundCallService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
