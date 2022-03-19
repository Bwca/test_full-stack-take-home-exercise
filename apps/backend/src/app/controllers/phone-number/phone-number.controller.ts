import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { ApiEndpoints } from '@full-stack-take-home-exercise/constants';

import { PhoneDataService } from '../../services/phone-data.service';

@Controller(ApiEndpoints.PhoneNumbers)
export class PhoneNumberController {
  constructor(private readonly phoneDataService: PhoneDataService) {}

  @Get(':number')
  getPhoneData(@Param('number') number: string) {
    try {
      return this.phoneDataService.getEntryByPhoneNumber(number);
    } catch {
      throw new NotFoundException(
        'No entry has been found for the provided phone number!'
      );
    }
  }
}
