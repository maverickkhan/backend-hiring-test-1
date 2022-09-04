import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TwilioServiceService } from './twilio-service/twilio-service.service';

@Module({
  imports: [],
  providers: [TwilioServiceService, PrismaService],
  exports: [TwilioServiceService, PrismaService],
})
export class SharedModule {}
