import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button.component';

describe('<Button>', () => {
  test('should create the root button element correctly', () => {
    const { container } = render(<Button label="test">{'Test'}</Button>);
    expect(container.querySelector('button')).toBeValid();
  });
});
