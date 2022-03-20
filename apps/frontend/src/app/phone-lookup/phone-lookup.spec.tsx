import { render } from '@testing-library/react';

import { PhoneLookup } from './phone-lookup';

describe('PhoneLookup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneLookup />);
    expect(baseElement).toBeTruthy();
  });
});
