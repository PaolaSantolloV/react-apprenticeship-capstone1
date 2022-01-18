import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './Home.page';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalProvider from '../../providers/Global.provider';

// const mockValue = {
//   state: {
//     searchResults: {
//       videosMetaInfo: [
//         {
//           kind: 'youtube#searchResult',
//           etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
//           id: {
//             kind: 'youtube#channel',
//             channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
//           },
//           snippet: {
//             publishedAt: '2014-09-27T01:39:18Z',
//             channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
//             title: 'Wizeline',
//             description:
//               "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
//             thumbnails: {
//               default: {
//                 url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
//               },
//               medium: {
//                 url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
//               },
//               high: {
//                 url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
//               },
//             },
//             channelTitle: 'Wizeline',
//             liveBroadcastContent: 'upcoming',
//             publishTime: '2014-09-27T01:39:18Z',
//           },
//         },
//       ],
//     },
//   },
// };

describe('<HomePage>', () => {
  test('should create the homePage correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <GlobalProvider>
          <HomePage />
        </GlobalProvider>
      </BrowserRouter>
    );
    expect(container.querySelector('div')).toBeValid();
  });

  // test('should create the videoCard correctly', () => {
  //   const { getByRole } = render(
  //     <BrowserRouter>
  //       <GlobalProvider value={mockValue}>
  //         <HomePage />
  //       </GlobalProvider>
  //     </BrowserRouter>
  //   );
  //   const card = getByRole('list');
  //   expect(card).toBeInTheDocument();
  // });
});
