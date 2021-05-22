import React from 'react';
import { getByRole, getByText, render } from '@testing-library/react';
import App from './App';
import Component from './Component';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Button click me should be in component', () => {
  // Getting all data
  const { getByRole } = render(<Component />);
  const linkElement = getByRole("button");
  // Data conversation

  // expected
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});