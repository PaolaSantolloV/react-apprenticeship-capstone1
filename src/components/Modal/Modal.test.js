import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal.component';

describe('<Modal>', () => {
  test('should create the Modal element correctly', () => {
    const { container } = render(<Modal />);
    expect(container.querySelector('div')).toBeValid();
  });

  test('should create the Modal display-block element correctly', () => {
    const { container } = render(<Modal show="block" />);
    expect(container.querySelector('div')).toBeValid();
  });

  test('should create the Modal display-none element correctly', () => {
    const { container } = render(<Modal show="none" />);
    expect(container.querySelector('div')).toBeValid();
  });
});
