import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { PhoneEntryTrie } from '../models/phone-entry-trie';

export function convertArrayToTrie(arr: PhoneEntry[]): PhoneEntryTrie {
  const trie: PhoneEntryTrie = {
    children: {},
  };

  arr.forEach((entry) => {
    const prefixDigits = entry.prefix.toString().split('');

    let leaf: PhoneEntryTrie = trie;

    prefixDigits.forEach((d) => {
      if (!leaf.children[d]) {
        leaf.children[d] = { children: {} };
      }
      leaf = leaf.children[d];
    });

    leaf.value = entry;
  });

  return trie;
}
