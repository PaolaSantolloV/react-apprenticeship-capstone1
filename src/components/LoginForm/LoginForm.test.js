import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm.component';

const authenticate = jest.fn();

describe('<LoginForm>', () => {
  test('should create the LoginForm element correctly', () => {
    const { container } = render(<LoginForm>{'Test'}</LoginForm>);
    expect(container.querySelector('section')).toBeValid();
  });

  test('should click button corretly', () => {
    const { getByRole } = render(
      <LoginForm authenticate={authenticate}>{'Test'}</LoginForm>
    );
    const button = getByRole('button');
    fireEvent.click(button);
  });

  test('should onChange username input corretly', () => {
    const { getByRole } = render(<LoginForm>{'Test'}</LoginForm>);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'paola' } });
  });

  test('should onChange password input corretly', () => {
    const { getByRole } = render(<LoginForm>{'Test'}</LoginForm>);
    const input = getByRole('textbox', { id: 'password' });
    fireEvent.change(input, { target: { value: 'jskjss' } });
  });
});
