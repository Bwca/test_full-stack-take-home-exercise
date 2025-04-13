import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { PhoneEntryTrie } from '../models/phone-entry-trie';

export function convertArrayToTrie(phoneEntries: PhoneEntry[]): PhoneEntryTrie {
  const trie: PhoneEntryTrie = {
    children: {},
  };

  phoneEntries.forEach((phoneEntry) => {
    let leaf: PhoneEntryTrie = trie;

    const prefixDigits = phoneEntry.prefix.toString().split('');

    prefixDigits.forEach((digit) => {
      if (!leaf.children[digit]) {
        leaf.children[digit] = { children: {} };
      }
      leaf = leaf.children[digit];
    });

    leaf.value = phoneEntry;
  });

  return trie;
}
