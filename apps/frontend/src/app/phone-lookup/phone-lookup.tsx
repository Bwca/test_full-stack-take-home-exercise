import { FC, useCallback } from 'react';

import { Phone } from './components/phone/phone';
import { SearchForm } from './components/search-form/search-form';
import styles from './phone-lookup.module.scss';
import { usePhoneLookup } from './hooks/use-phone-lookup/use-phone-lookup';
import { FormValues } from './models/form-values.model';
import { DisplayMessage } from './components/display-message/display-message';

export const PhoneLookup: FC = () => {
  const { error, lookup, entry } = usePhoneLookup();

  const handleSubmit = useCallback(({ phone, message }: FormValues) => {
    /** TODO: make sure the number is not NaN */
    lookup(Number(phone), message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles['container']}>
      <SearchForm onSubmit={handleSubmit} />
      {error && <div>{error}</div>}
      {entry && (
        <>
          <Phone phoneEntry={entry.phone} />
          <DisplayMessage message={entry.text} />
        </>
      )}
    </section>
  );
};
