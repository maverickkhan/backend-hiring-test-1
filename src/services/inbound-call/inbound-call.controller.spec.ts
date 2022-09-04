import { Test, TestingModule } from '@nestjs/testing';
import { InboundCallController } from './inbound-call.controller';
import { InboundCallService } from './inbound-call.service';

describe('InboundCallController', () => {
  let controller: InboundCallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InboundCallController],
      providers: [InboundCallService],
    }).compile();

    controller = module.get<InboundCallController>(InboundCallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
