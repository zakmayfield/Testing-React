import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { App } from './App';

test('renders app', async () => {
  const app = render(<App />);
})