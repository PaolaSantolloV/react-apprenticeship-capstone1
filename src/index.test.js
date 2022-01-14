import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './components/App/App.component';

describe('index', () => {
  test('should create index correctly', () => {
    const { container } = render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    expect(container.querySelector('div.root'));
  });
});
