import React from 'react';
import { shallow } from 'enzyme';

import Message from '../Message';

describe('<Message />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<Message />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Message attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
