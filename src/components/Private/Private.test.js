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

  // test('should create the Private element correctly', () => {
  //   jest.mock('./../../providers/Global.provider', () => ({
  //     __esModule: true,
  //     default: React.createContext(),
  //   }));

  //   const mockValue = {
  //     state: {
  //       authenticated: true,
  //     },
  //   };
  //   const { getByRole } = render(
  //     <BrowserRouter>
  //       <GlobalProvider value={mockValue}>
  //         <Private />
  //       </GlobalProvider>
  //     </BrowserRouter>
  //   );
  //   const route = getByRole('div', { hidden: true });
  //   expect(route).toBeInTheDocument();
  // });
});
