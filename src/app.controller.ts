import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('good-bye')
  goodbye(@Req() req, @Res() res) {
    const response = this.appService.goodbye(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }

  @Post('transcribe')
  transcribe(@Req() req, @Res() res) {
    const response = this.appService.transcribe(req);
    res.set('Content-Type', 'text/xml');
    res.send(response);
  }
}
