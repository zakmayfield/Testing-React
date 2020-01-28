import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api'

jest.mock("../api")

mockGetData.mockResolvedValue({
  next: "Next",
  previous: "Previous",
  results: [
    {
      name: 'Test Name',
      url: 'Test Url'
    }
  ]
})

test('renders component', async () => {
  const component = render(<StarWarsCharacters />);
})

test('renders buttons', async () => {
  const component = render(<StarWarsCharacters />);

  const prevBtn = component.getByTestId('prevBtn')
  const nextBtn = component.getByTestId('nextBtn');

  fireEvent.click(nextBtn)

  expect(mockGetData).toHaveBeenCalledTimes(2)

  await wait (() => expect(component.getByText(/Test Name/i)))
})