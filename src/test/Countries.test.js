import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Countries from '../components/Countries';

test('Countries component matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Countries />
    </Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
