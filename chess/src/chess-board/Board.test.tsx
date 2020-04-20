import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('contains a board', () => {
  const { getByText } = render(<Board />);
  const componentText = getByText(/Here is the table!/i);
  expect(componentText).toBeInTheDocument();
});
