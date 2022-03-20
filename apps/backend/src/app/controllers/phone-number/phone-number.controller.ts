import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';

import { PhoneDataService } from '../../services/phone-data.service';

@Controller(API_ENDPOINTS.PHONE_NUMBER)
export class PhoneNumberController {
  constructor(private readonly phoneDataService: PhoneDataService) {}

  @Get(':number')
  public getPhoneData(@Param('number') number: string) {
    try {
      return this.phoneDataService.getEntryByPhoneNumber(number);
    } catch {
      throw new NotFoundException(
        'No entry has been found for the provided phone number!'
      );
    }
  }
}
