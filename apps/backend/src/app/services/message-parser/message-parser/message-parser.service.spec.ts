import { Test, TestingModule } from '@nestjs/testing';

import { MessageParserService } from './message-parser.service';

describe('MessageParserService', () => {
  let service: MessageParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageParserService],
    }).compile();

    service = module.get<MessageParserService>(MessageParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should parse text with a link to markdown', () => {
    // Arrange
    const message =
      'I wonder if it is possible to make http://google.com a link?';
    const expectedResult =
      'I wonder if it is possible to make [http://google.com](http://google.com) a link?';

    // Act
    const result = service.parseStringToMarkdownWithLinks(message);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
