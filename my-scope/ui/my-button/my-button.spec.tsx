import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyButton } from './my-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyButton />);
  const rendered = getByText('hello from MyButton');
  expect(rendered).toBeTruthy();
});
