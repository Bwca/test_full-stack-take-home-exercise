import { useState, useCallback } from 'react';

import {
  ErrorResponse,
  PhoneCheckResult,
} from '@full-stack-take-home-exercise/models';

import { PhoneLookapApi } from '../../api/phone-lookup.api';

interface UsePhoneLookup {
  lookup: (phone: number, message?: string) => Promise<void>;
  entry: PhoneCheckResult | null;
  error: string | null;
  isInProgress: boolean;
}

export function usePhoneLookup(): UsePhoneLookup {
  const [entry, setEntry] = useState<PhoneCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInProgress, setInProgress] = useState<boolean>(false);

  const lookup: UsePhoneLookup['lookup'] = useCallback(
    async (phone: number, message?: string): Promise<void> => {
      try {
        setInProgress(true);
        const entry = await PhoneLookapApi.getEntryByPhoneNumber({
          phone,
          message,
        });
        setEntry(entry);
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
    lookup,
    entry,
    error,
    isInProgress,
  };
}
