import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('Should match the snapshot', () => {
    const renderedApp = shallow(<App />)

    expect(renderedApp).toMatchSnapshot();
  })
});
