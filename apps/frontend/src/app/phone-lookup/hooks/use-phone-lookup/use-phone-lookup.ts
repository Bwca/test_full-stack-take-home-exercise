import { useState, useCallback } from 'react';

import {
  ErrorResponse,
  PhoneEntry,
} from '@full-stack-take-home-exercise/models';

import { PhoneLookapApi } from '../../api/phone-lookup.api';

interface UsePhoneLookup {
  lookupPhoneByNumber: (s: string) => Promise<void>;
  phoneEntry: PhoneEntry | null;
  error: string | null;
  isInProgress: boolean;
}

export function usePhoneLookup(): UsePhoneLookup {
  const [phoneEntry, setPhoneEntry] = useState<PhoneEntry | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInProgress, setInProgress] = useState<boolean>(false);

  const lookupPhoneByNumber = useCallback(
    async (number: string): Promise<void> => {
      try {
        setInProgress(true);
        const phone = await PhoneLookapApi.getEntryByPhoneNumber(number);
        setPhoneEntry(phone);
        setError(null);
      } catch (e) {
        console.error();
        if ((e as ErrorResponse).message) {
          setError((e as ErrorResponse).message);
        } else {
          setError('unknown error!');
        }
      } finally {
        setInProgress(false);
      }
    },
    []
  );

  return {
    lookupPhoneByNumber,
    phoneEntry,
    error,
    isInProgress,
  };
}
