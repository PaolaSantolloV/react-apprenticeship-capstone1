import '@testing-library/jest-dom';
import getVideos from './getVideos';

test('should have videos correctly', async () => {
  const result = await getVideos('wizeline');
  expect(result);
});
