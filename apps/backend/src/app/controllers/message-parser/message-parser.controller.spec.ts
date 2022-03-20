import { Message } from '@full-stack-take-home-exercise/models';
import { Test, TestingModule } from '@nestjs/testing';

import { MessageParserService } from '../../services/message-parser/message-parser/message-parser.service';
import { MessageParserController } from './message-parser.controller';

describe('MessageParserController', () => {
  let controller: MessageParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageParserController],
      providers: [MessageParserService],
    }).compile();

    controller = module.get<MessageParserController>(MessageParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should parse text with a link to markdown', () => {
    // Arrange
    const message: Message = {
      text: 'I wonder if it is possible to make http://google.com a link?',
    };
    const expectedResult: Message = {
      text: 'I wonder if it is possible to make [http://google.com](http://google.com) a link?',
    };

    // Act
    const result = controller.parseMessageToMarkdown(message);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
