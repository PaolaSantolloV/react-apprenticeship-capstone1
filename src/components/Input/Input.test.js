import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input.component';

describe('<Input>', () => {
  test('should create the Input element correctly', () => {
    const { container } = render(
      <Input id="test" placeholder="test" type="password">
        {'Test'}
      </Input>
    );

    expect(container.querySelector('input')).toBeValid();
  });
});
