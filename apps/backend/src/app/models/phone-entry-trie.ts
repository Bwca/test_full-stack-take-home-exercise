import { PhoneEntry } from '@full-stack-take-home-exercise/models';

export interface PhoneEntryTrie {
  children: Record<string, PhoneEntryTrie>;
  value?: PhoneEntry;
}
