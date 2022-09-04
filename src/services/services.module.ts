import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { InboundCallModule } from './inbound-call/inbound-call.module';
import { InboundCallService } from './inbound-call/inbound-call.service';

@Module({
  imports: [SharedModule, InboundCallModule],
})
export class ServicesModule {}
