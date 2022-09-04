import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { InboundCallService } from './inbound-call.service';
import { CreateInboundCallDto } from './dto/create-inbound-call.dto';
import { UpdateInboundCallDto } from './dto/update-inbound-call.dto';

@Controller('inbound-call')
export class InboundCallController {
  constructor(private readonly inboundCallService: InboundCallService) {}

  // @Post()
  // create(@Body() createInboundCallDto: CreateInboundCallDto) {
  //   return this.inboundCallService.create(createInboundCallDto);
  // }

  @Post()
  create(@Req() req, @Res() res) {
    const response = this.inboundCallService.create(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }

  @Post('/2')
  req2(@Req() req, @Res() res) {
    const response = this.inboundCallService.create2(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }

  @Post('/error')
  error(@Req() req) {
    return this.inboundCallService.error(req);
  }

  @Post('/good-bye')
  goodbye(@Req() req, @Res() res) {
    const response = this.inboundCallService.goodbye(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }

  @Get('/good-bye')
  goodbye2(@Req() req, @Res() res) {
    const response = this.inboundCallService.goodbye(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }

  @Get('/get-number-records/:number')
  findAll(@Param('number') number: string) {
    return this.inboundCallService.findAll(number);
  }

  @Get('/get-perticular-call/:CallSid')
  findOne(@Param('CallSid') CallSid: string) {
    return this.inboundCallService.findOne(CallSid);
  }
}
