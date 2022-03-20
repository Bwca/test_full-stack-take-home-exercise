import { ReactText } from 'react';

import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';
import { PhoneEntry } from '@full-stack-take-home-exercise/models';

import { environment } from '../../../environments/environment';

export class PhoneLookapApi {
  public static getEntryByPhoneNumber(phone: ReactText): Promise<PhoneEntry> {
    const url = `${environment.backend}/${API_ENDPOINTS.PHONE_NUMBER}/${phone}`;
    return fetch(url).then((r) => {
      if (r.status === 200) {
        return r.json();
      } else {
        throw r.body;
      }
    });
  }
}
