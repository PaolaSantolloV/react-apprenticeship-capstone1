import '@testing-library/jest-dom';

test('should stored corretly', () => {
  let store = {};

  jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
    return store[key];
  });

  jest.spyOn(Storage.prototype, 'setItem').mockImplementation((value) => {
    return (store['videos'] = value);
  });

  expect(window.sessionStorage.getItem('videos'));
});
