import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm.component';

describe('<LoginForm>', () => {
  test('should create the LoginForm element correctly', () => {
    const { container } = render(<LoginForm>{'Test'}</LoginForm>);
    expect(container.querySelector('section')).toBeValid();
  });
});
