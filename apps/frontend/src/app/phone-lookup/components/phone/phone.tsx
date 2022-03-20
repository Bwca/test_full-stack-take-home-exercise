import { FC } from 'react';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import styles from './phone.module.scss';

interface PhoneProps {
  phoneEntry: PhoneEntry;
}

export const Phone: FC<PhoneProps> = (props: PhoneProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PhoneEntry!</h1>
    </div>
  );
};
