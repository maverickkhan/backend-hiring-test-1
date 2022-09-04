import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class TwilioServiceService {
  private readonly twilio: Twilio;
  private readonly accountSid = process.env.TWILIO_ACCOUNT_SID;
  private readonly authToken = process.env.TWILIO_AUTH_TOKEN;
  private readonly phone_number = process.env.TWILIO_PHONE_NUMBER;
  constructor() {
    this.twilio = new Twilio(this.accountSid, this.authToken);
  }

  async Response(res) {
    try {
      const response: VoiceResponse = new VoiceResponse();
      response.say(
        { voice: 'alice' },
        'Please Press 1 to talk to our representative or 2 to record a voice message',
      );
      //   res.type('text/xml');
      //   res.send(response.toString);
    } catch (error) {
      throw new Error(error);
    }
  }
}
