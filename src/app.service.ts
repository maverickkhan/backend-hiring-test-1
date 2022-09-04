import { Injectable } from '@nestjs/common';
import { InboundCallService } from './services/inbound-call/inbound-call.service';
import { PrismaService } from './services/shared/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly InboundCallService: InboundCallService,
    private readonly prismaService: PrismaService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  goodbye(req) {
    return this.InboundCallService.goodbye(req);
  }

  async transcribe(req) {
    const body = req.body;
    console.log(
      '🚀 ~ file: app.service.ts ~ line 17 ~ AppService ~ transcribe ~ req.body',
      req.body,
    );
    await this.prismaService.callLogs.create({
      data: {
        CallSid: body.CallSid,
        Number: body.Caller || body.From,
        RecordingUrl: body.RecordingUrl,
        CallStatus: body.CallStatus,
      },
    });
    return 'Thankyou';
  }
}
