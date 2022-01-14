import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Private from './Private.component';
import GlobalProvider from './../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('<Private>', () => {
  test('should create the Private element correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <Private />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container);
  });
});
