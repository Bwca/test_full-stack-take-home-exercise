import { FC } from 'react';

import { PhoneEntry } from '@full-stack-take-home-exercise/models';

interface PhoneProps {
  phoneEntry: PhoneEntry;
}

export const Phone: FC<PhoneProps> = ({ phoneEntry }) => {
  return (
    <section>
      {Array.from(Object.entries(phoneEntry))
        .filter(([, v]) => Boolean(v))
        .map(([k, v]) => (
          <div key={k}>
            <span>
              <strong>{k}: </strong>
            </span>
            <span>{v}</span>
          </div>
        ))}
    </section>
  );
};
