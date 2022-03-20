import { Body, Controller, Post } from '@nestjs/common';

import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';
import {
  PhoneCheckResult,
  PhoneMessagePayload,
} from '@full-stack-take-home-exercise/models';

import { PhoneDataService } from '../../services/phone-data.service';
import { MessageParserService } from '../../services/message-parser/message-parser/message-parser.service';

@Controller(API_ENDPOINTS.PHONE_NUMBER)
export class PhoneNumberController {
  constructor(
    private readonly phoneDataService: PhoneDataService,
    private messageParserService: MessageParserService
  ) {}

  @Post()
  public parseMessageToMarkdown(
    @Body() { phone, message }: PhoneMessagePayload
  ): PhoneCheckResult {
    return {
      phone: this.phoneDataService.getEntryByPhoneNumber(String(phone)),
      text: message
        ? this.messageParserService.parseStringToMarkdownWithLinks(message)
        : '',
    };
  }
}
