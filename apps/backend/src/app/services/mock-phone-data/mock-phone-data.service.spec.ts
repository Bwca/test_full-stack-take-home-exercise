import { Test, TestingModule } from '@nestjs/testing';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { MockPhoneDataService } from './mock-phone-data.service';

describe('MockPhoneDataService', () => {
  let service: MockPhoneDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockPhoneDataService],
    }).compile();

    service = module.get<MockPhoneDataService>(MockPhoneDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('When matching a number to the prefix the application should select the record with the longest matching prefix', () => {
    // Arrange
    const input = '14373293504';
    const expectedResult: PhoneEntry = {
      prefix: 1437329,
      operator: 'Lucky Mobile',
      country_code: 1,
      region: 'Ontario',
      country: 'Canada',
    };

    // Act
    const result = service.getEntryByPhoneNumber(input);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('Expect error when no matches found', () => {
    // Arrange
    const input = '48';

    // Act
    // Assert
    expect(() => service.getEntryByPhoneNumber(input)).toThrow();
  });
});
