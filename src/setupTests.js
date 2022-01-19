// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

let store = {};

jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
  return store[key];
});

jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
  return (store[key] = value);
});
