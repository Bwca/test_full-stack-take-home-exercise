import { API_ENDPOINTS } from '@full-stack-take-home-exercise/constants';
import {
  PhoneCheckResult,
  PhoneMessagePayload,
} from '@full-stack-take-home-exercise/models';

import { environment } from '../../../environments/environment';

export class PhoneLookapApi {
  public static getEntryByPhoneNumber(
    payload: PhoneMessagePayload
  ): Promise<PhoneCheckResult> {
    const url = `${environment.backend}/${API_ENDPOINTS.PHONE_NUMBER}`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((r) => {
      if (r.status === 201) {
        return r.json();
      } else {
        throw r.body;
      }
    });
  }
}
