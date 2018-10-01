/* eslint react/prop-types: 0 */

/**
 * MessagePage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class MessagePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    axios
      .get('/messages')
      .then(results => this.setState({ messages: results.data }))
      .catch(err => console.log('error fetching messages', err));
  }

  renderMessages() {
    return this.state.messages.map(item => <li>{item.message}</li>);
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        {this.renderMessages()}
      </div>
    );
  }
}
