import { PhoneEntry } from '@full-stack-take-home-exercise/models';

export abstract class PhoneDataService {
  public abstract getEntryByPhoneNumber(number: string): PhoneEntry;
}
