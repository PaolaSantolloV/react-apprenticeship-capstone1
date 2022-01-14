import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from './components/App/App.component';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    // eslint-disable-next-line no-undef
    require('./index.js');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    );
  });
});
