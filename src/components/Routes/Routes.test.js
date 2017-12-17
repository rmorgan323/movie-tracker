import Routes from './Routes';
import React from 'react';
import { shallow } from 'enzyme';

describe('Routes tests', () => {
  it('Should match the snapshot', () => {
    const renderedRoutes = shallow(<Routes />);

    expect(renderedRoutes).toMatchSnapshot();
  });
});
