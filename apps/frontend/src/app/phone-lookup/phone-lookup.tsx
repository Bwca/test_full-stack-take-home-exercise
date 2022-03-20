import { FC, useCallback, useState } from 'react';

import { Phone } from './components/phone/phone';
import { SearchForm } from './components/search-form/search-form';
import styles from './phone-lookup.module.scss';
import { usePhoneLookup } from './hooks/use-phone-lookup/use-phone-lookup';
import { FormValues } from './models/form-values.model';
import { DisplayMessage } from './components/display-message/display-message';

export const PhoneLookup: FC = () => {
  const { error, lookupPhoneByNumber, phoneEntry } = usePhoneLookup();
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(({ phone, message }: FormValues) => {
    lookupPhoneByNumber(phone);
    setMessage(message ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles['container']}>
      <SearchForm onSubmit={handleSubmit} />
      {phoneEntry && <Phone phoneEntry={phoneEntry} />}
      {error && <div>{error}</div>}
      {message && <DisplayMessage message={message} />}
    </section>
  );
};
