import { Injectable } from '@nestjs/common';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { PhoneDataService } from '../phone-data.service';
import { DB } from './db';
import { PhoneEntryTrie } from '../../models/phone-entry-trie';
import { convertArrayToTrie } from '../../utils/convert-array-to-trie.util';

@Injectable()
export class MockPhoneDataService implements PhoneDataService {
  public getEntryByPhoneNumber(number: string): PhoneEntry {
    let result: PhoneEntry;
    let currentTrieNode = this.loadDb;

    for (const n of number) {
      currentTrieNode = currentTrieNode.children[n];
      if (!currentTrieNode) {
        break;
      }
      if (currentTrieNode.value) {
        result = currentTrieNode.value;
      }
    }

    if (!result) {
      throw new Error('Could not locate a phone entry for the entered number!');
    }
    return result;
  }

  private get loadDb(): Readonly<PhoneEntryTrie> {
    return convertArrayToTrie([...DB]);
  }
}
