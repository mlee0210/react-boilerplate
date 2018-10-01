import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import MessagePage from '../index';
// import MessageList from '../MessageList';

describe('<MessagePage />', () => {
  it('should render the messages list page', () => {
    const renderedComponent = shallow(<MessagePage />);
    expect(
      renderedComponent.contains(
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>,
      ),
    ).toBe(true);
  });
});
