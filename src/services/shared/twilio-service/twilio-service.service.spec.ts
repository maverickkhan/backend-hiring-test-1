import { Test, TestingModule } from '@nestjs/testing';
import { TwilioServiceService } from './twilio-service.service';

describe('TwilioServiceService', () => {
  let service: TwilioServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioServiceService],
    }).compile();

    service = module.get<TwilioServiceService>(TwilioServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
