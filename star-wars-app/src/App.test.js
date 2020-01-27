import React from 'react';
import { render } from '@testing-library/react';
import StarWarsCharacters from './components/StarWarsCharacters';

test('renders the StarWarsCharacter component', () => {
  const component = render(<StarWarsCharacters />)
})