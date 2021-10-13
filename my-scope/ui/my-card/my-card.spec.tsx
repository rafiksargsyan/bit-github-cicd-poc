import React from 'react';
import { render } from '@testing-library/react';
import { BasicMyCard } from './my-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMyCard />);
  const rendered = getByText('hello from MyCard');
  expect(rendered).toBeTruthy();
});
