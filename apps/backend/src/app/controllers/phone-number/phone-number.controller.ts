import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';
import { PhoneDataService } from '../../services/phone-data.service';
import {
  PhoneCheckResult,
  PhoneEntry,
  PhoneMessagePayload,
} from '@full-stack-take-home-exercise/models';

import { MessageParserService } from '../../services/message-parser/message-parser/message-parser.service';

@Controller(API_ENDPOINTS.PHONE_NUMBER)
export class PhoneNumberController {
  constructor(
    private readonly phoneDataService: PhoneDataService,
    private messageParserService: MessageParserService
  ) {}

  /** FIXME: remove, post marking's the only thing that's needed */
  @Get(':number')
  public getPhoneData(@Param('number') number: string): PhoneEntry {
    try {
      return this.phoneDataService.getEntryByPhoneNumber(number);
    } catch {
      throw new NotFoundException(
        'No entry has been found for the provided phone number!'
      );
    }
  }

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
