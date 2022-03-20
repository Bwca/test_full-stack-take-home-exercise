import { Test, TestingModule } from '@nestjs/testing';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { PhoneNumberController } from './phone-number.controller';
import { MockPhoneDataService } from '../../services/mock-phone-data/mock-phone-data.service';
import { PhoneDataService } from '../../services/phone-data.service';
import { MessageParserService } from '../../services/message-parser/message-parser/message-parser.service';

describe('AppController', () => {
  let app: TestingModule;
  let controller: PhoneNumberController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PhoneNumberController],
      providers: [
        {
          provide: PhoneDataService,
          useClass: MockPhoneDataService,
        },
        MessageParserService,
      ],
    }).compile();

    controller = app.get<PhoneNumberController>(PhoneNumberController);
  });

  it('should return a found phone entry', () => {
    // Arrange
    const phone = '14373293504';
    const expected: PhoneEntry = {
      prefix: 1437329,
      operator: 'Lucky Mobile',
      country_code: 1,
      region: 'Ontario',
      country: 'Canada',
    };

    // Act
    const result = controller.getPhoneData(phone);

    // Assert
    expect(result).toEqual(expected);
  });

  it('Should be able to parse phone number with a message', () => {
    // Arrange
    const payload = {
      phone: 1,
      message:
        'dhasjkdjhk asdkh aks daksjdha http://google.com dasjdklasdj asd alskd',
    };
    const expected = {
      phone: {
        prefix: 1,
        operator: null,
        country_code: 1,
        country: 'Canada',
        region: null,
      },
      text: 'dhasjkdjhk asdkh aks daksjdha [http://google.com](http://google.com) dasjdklasdj asd alskd',
    };

    // Act
    const result = controller.parseMessageToMarkdown(payload);

    // Assert
    expect(result).toEqual(expected);
  });
});
