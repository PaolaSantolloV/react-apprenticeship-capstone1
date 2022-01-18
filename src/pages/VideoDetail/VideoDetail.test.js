import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoDetailPage from './VideoDetail.page';
import GlobalProvider from '../../providers/Global.provider';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

// jest.mock('./VideoDetail.page', () => jest.fn(() => null));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
//   useParams: () => ({
//     companyId: 'company-id1',
//     teamId: 'team-id1',
//   }),
//   useRouteMatch: () => ({ url: '/nmXMgqjQzls' }),
// }));

describe('<VideoDetail>', () => {
  test('should create the VideoDetail element correctly', () => {
    const props = {
      history: {
        location: {
          video: {
            title: 'oli',
          },
        },
      },
    };

    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <VideoDetailPage data-my-custom-prop={props} />
        </GlobalProvider>
      </BrowserRouter>
    );

    expect(container.querySelector('div'));
  });

  // test('should create the cardsVideo elements correctly', () => {
  //   const mockValue = {
  //     authenticated: {
  //       id: '123',
  //       name: 'Wizeline',
  //       avatarUrl:
  //         'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  //     },
  //   };
  //   const { getByTitle } = renderWithRouter(
  //     <GlobalProvider value={mockValue}>
  //       <VideoDetailPage match={{ params: { id: 1 } }} />
  //     </GlobalProvider>
  //   );
  //   const videoRep = getByTitle('rick-roll');
  //   expect(videoRep).toBeInTheDocument();
  // });
});
