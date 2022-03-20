import { Body, Controller, Post } from '@nestjs/common';

import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';
import { Message } from '@full-stack-take-home-exercise/models';

import { MessageParserService } from '../../services/message-parser/message-parser/message-parser.service';

/** FIXME: remove, phone number controller is enough */
@Controller(API_ENDPOINTS.MESSAGE_PARSER)
export class MessageParserController {
  constructor(private messageParserService: MessageParserService) {}

  @Post()
  public parseMessageToMarkdown(@Body() message: Message): Message {
    const parsedMessage: Message = {
      text: this.messageParserService.parseStringToMarkdownWithLinks(
        message.text
      ),
    };
    return parsedMessage;
  }
}
