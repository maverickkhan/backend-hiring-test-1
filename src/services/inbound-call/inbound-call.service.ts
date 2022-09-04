import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UpdateInboundCallDto } from './dto/update-inbound-call.dto';
// import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
const VoiceResponse = require('twilio').twiml.VoiceResponse;
import { PrismaService } from '../shared/prisma/prisma.service';
import { commonMessage } from 'src/common/messages';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class InboundCallService {
  calls: any[] = [];
  constructor(private readonly prismaService: PrismaService) {}
  logger = new Logger(InboundCallService.name);
  create(req) {
    const { body } = req.body;
    try {
      const response = new VoiceResponse();
      const gather = response.gather({
        numDigits: 1,
        action: '/inbound-call/2',
      });
      gather.say(
        'For calling Abdul Hai office, press 1. For submitting complains, press 2.',
      );
      response.redirect('/inbound-call');
      console.log(req.body);
      this.calls.push(body);
      return response.toString();
    } catch (error) {
      console.log(error);
    }
  }

  create2(req) {
    const { body } = req;
    this.logger.verbose(
      `Call received from ${body?.From}, Number Pressed ${body?.Digits}`,
    );
    try {
      const answer = new VoiceResponse();
      if (body.Digits) {
        switch (body.Digits) {
          case '1':
            answer.say(
              `You called Abdul Hai a.k.a Maverick's office. Connecting you to him`,
            );
            answer.dial('+923048121241', {
              action: '/good-bye',
            });
            break;
          case '2':
            answer.say(
              `You've reached Abdul Hai's voicemail machine please leave your message after the beep!`,
            );
            answer.record({
              timeout: 10,
              transcribe: true,
              transcribeCallback: '/transcribe',
              action: '/good-bye',
            });
            break;
          default:
            answer.say("Sorry, I don't understand that choice.");
            answer.pause();
            answer.redirect('/inbound-call');
            break;
        }
      } else {
        this.logger.debug(`no input found re routing call to /inbound-call`);
        answer.redirect('/inbound-call');
      }
      this.calls.push(body);
      return answer.toString();
    } catch (error) {
      console.log(error);
    }
  }

  goodbye(req) {
    try {
      const { body } = req;
      this.logger.verbose(
        `Call received from ${body?.From}, Number Pressed ${body?.Digits}`,
      );
      console.log(req.body);
      const response = new VoiceResponse();
      response.say(
        `Thank you for trying out this cool project I've made! You are cool but I'm cooler. Goodbye!`,
      );
      response.hangup();
      this.calls.push(body);
      return response.toString();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  error(req) {
    try {
      console.log(req.body);
    } catch (error) {
      console.log(error);
    }
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async updateLogs() {
    this.logger.debug('Running cron to update logs');
    try {
      for (let i = 0; i < this.calls.length; i++) {
        const call = this.calls[i];
        console.log(call);
        if (call) {
          await this.prismaService.callLogs.create({
            data: {
              CallSid: call.CallSid,
              Number: call.Caller || call.From,
              CallStatus: call.CallStatus,
            },
          });
        }
      }
      this.calls = [];
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findAll(number: string) {
    try {
      if (!number) {
        throw new BadRequestException('Please provide number to see records');
      }
      const data = await this.prismaService.callLogs.findMany({
        where: {
          Number: number,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
      return {
        message: commonMessage.get,
        data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(CallSid: string) {
    try {
      if (!CallSid) {
        throw new BadRequestException('Please provide call sid to see records');
      }
      const data = await this.prismaService.callLogs.findMany({
        where: {
          CallSid: CallSid,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });
      return {
        message: commonMessage.get,
        data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: number, updateInboundCallDto: UpdateInboundCallDto) {
    return `This action updates a #${id} inboundCall`;
  }

  remove(id: number) {
    return `This action removes a #${id} inboundCall`;
  }
}
