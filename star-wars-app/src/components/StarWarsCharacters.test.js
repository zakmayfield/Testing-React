import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api'

jest.mock("../api")

// mockGetData.mockResolvedValue({
//   count: "80",
//   next: "Next",
//   previous: "Previous",
//   results: [
//     {
//       name: 'Test Name',
//       url: 'Test Url'
//     }
//   ]
// })

test('renders component', async () => {
  const testData = {
    count: "80",
    next: "Next",
    previous: "Previous",
    results: [
      {
        name: 'Test Name',
        url: 'Test Url'
      }
    ]
  }
  mockGetData.mockResolvedValueOnce(testData)

  const component = render(<StarWarsCharacters />);
})

test('api test', async () => {
  const testData = {
    count: "80",
    next: "Next",
    previous: "Previous",
    results: [
      {
        name: 'Test Name',
        url: 'Test Url'
      }
    ]
  }
  mockGetData.mockResolvedValueOnce(testData)

  const component = render(<StarWarsCharacters />);

  const nextBtn = component.getByTestId('nextBtn');

  fireEvent.click(nextBtn)

  expect(mockGetData).toHaveBeenCalledTimes(2)

  await wait (() => {
    expect(component.getByText(/Test Name/i)).toBeTruthy();
    expect(mockGetData).toHaveBeenCalledTimes(2)
  })
})