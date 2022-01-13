import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from './Switch.component';

describe('<Input>', () => {
  test('should create the Switch element correctly', () => {
    const { container } = render(<Switch>{'Test'}</Switch>);
    expect(container.querySelector('div')).toBeValid();
  });

  test('should create the Switch element correctly with label', () => {
    const { container } = render(<Switch label="test">{'Test'}</Switch>);
    expect(container.querySelector('div')).toBeValid();
  });
});
