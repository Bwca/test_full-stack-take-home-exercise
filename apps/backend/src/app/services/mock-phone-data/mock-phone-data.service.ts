import { Injectable } from '@nestjs/common';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { PhoneDataService } from '../phone-data.service';
import { DB } from './db';

@Injectable()
export class MockPhoneDataService implements PhoneDataService {
  public getEntryByPhoneNumber(number: string): PhoneEntry {
    const result = [...this.loadDb]
      .sort((a, b) => b.prefix - a.prefix)
      .find(({ prefix }) => number.startsWith(String(prefix)));

    if (!result) {
      throw new Error('Could not locate a phone entry for the entered number!');
    }
    return result;
  }

  private get loadDb(): Readonly<Array<Readonly<PhoneEntry>>> {
    return Object.freeze([...DB]);
  }
}
