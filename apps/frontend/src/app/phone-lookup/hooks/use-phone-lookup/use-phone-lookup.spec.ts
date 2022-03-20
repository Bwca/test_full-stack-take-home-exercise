import { act, renderHook } from '@testing-library/react-hooks';

import { usePhoneLookup } from './use-phone-lookup';

describe('usePhoneLookup', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => usePhoneLookup());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
