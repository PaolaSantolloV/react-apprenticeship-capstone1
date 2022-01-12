import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from './IconButton.component';

describe('<IconButton>', () => {
  test('should create the iconButton element correctly', () => {
    const { container } = render(<IconButton>{'Test'}</IconButton>);

    expect(container.querySelector('button')).toBeValid();
  });

  test('create the iconButton element correctly when styles=iconButtonClose', () => {
    const { container } = render(
      <IconButton styles="iconButtonClose">{'Test'}</IconButton>
    );

    expect(container.querySelector('button')).toBeValid();
  });
});
