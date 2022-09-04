import { Module } from '@nestjs/common';
import { InboundCallService } from './inbound-call.service';
import { InboundCallController } from './inbound-call.controller';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import { PrismaService } from '../shared/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [InboundCallController],
  providers: [InboundCallService, PrismaService],
  exports: [InboundCallService],
})
export class InboundCallModule {}
