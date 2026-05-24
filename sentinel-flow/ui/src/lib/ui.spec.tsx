import { render } from '@testing-library/react';

import SentinelFlowUi from './ui';

describe('SentinelFlowUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SentinelFlowUi />);
    expect(baseElement).toBeTruthy();
  });
});
