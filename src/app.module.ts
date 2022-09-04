import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InboundCallModule } from './services/inbound-call/inbound-call.module';
import { ServicesModule } from './services/services.module';
import { PrismaService } from './services/shared/prisma/prisma.service';

@Module({
  imports: [ServicesModule, InboundCallModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
