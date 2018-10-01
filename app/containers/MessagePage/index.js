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
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import messages from './messages';
import Message from './Message';
import MessageList from './MessageList';

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
    return this.state.messages
      .reverse()
      .map(item => <Message>{item.message}</Message>);
  }

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <MessageList> {this.renderMessages()} </MessageList>
      </div>
    );
  }
}
