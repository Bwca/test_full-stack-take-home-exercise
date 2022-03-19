import { Test, TestingModule } from '@nestjs/testing';

import { PhoneNumberController } from './phone-number.controller';
import { MockPhoneDataService } from '../../services/mock-phone-data/mock-phone-data.service';
import { PhoneDataService } from '../../services/phone-data.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PhoneNumberController],
      providers: [
        {
          provide: PhoneDataService,
          useClass: MockPhoneDataService,
        },
      ],
    }).compile();
  });

  describe('getData', () => {
    it('should return a found phone entry', () => {
      const appController = app.get<PhoneNumberController>(PhoneNumberController);
      expect(appController.getPhoneData('14373293504')).toEqual({
        prefix: 1437329,
        operator: 'Lucky Mobile',
        country_code: 1,
        region: 'Ontario',
        country: 'Canada',
      });
    });
  });
});
