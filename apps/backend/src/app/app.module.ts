import { Module } from '@nestjs/common';

import { PhoneNumberController } from './controllers/phone-number/phone-number.controller';
import { MessageParserService } from './services/message-parser/message-parser/message-parser.service';
import { MockPhoneDataService } from './services/mock-phone-data/mock-phone-data.service';
import { PhoneDataService } from './services/phone-data.service';

@Module({
  controllers: [PhoneNumberController],
  providers: [
    {
      provide: PhoneDataService,
      useClass: MockPhoneDataService,
    },
    MessageParserService,
  ],
})
export class AppModule {}
