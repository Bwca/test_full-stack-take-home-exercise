import { render } from '@testing-library/react';

import { DisplayMessage } from './display-message';

describe('DisplayMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DisplayMessage message="" />);
    expect(baseElement).toBeTruthy();
  });
});
