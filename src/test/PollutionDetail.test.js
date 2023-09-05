import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/store';
import Pollution from '../components/PollutionDetail';

test('Pollution component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        {' '}
        {}
        <Pollution />
      </Router>
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
