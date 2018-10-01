import React from 'react';
import { shallow } from 'enzyme';

import MessageList from '../MessageList';

describe('<MessageList />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<MessageList />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<MessageList attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
