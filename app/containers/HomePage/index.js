/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import Form from './Form';
import Input from './Input';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onSubmitForm(e) {
    e.preventDefault();
    const message = { message: this.state.message };
    axios
      .post('/messages', message)
      .then(() => {
        alert('Message saved!');
        this.setState({ message: '' });
      })
      .catch(err => console.log('Message not saved', err));
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <Form onSubmit={this.onSubmitForm}>
          <Input
            id="message"
            type="text"
            placeholder="message here"
            value={this.state.message}
            onChange={this.onChangeMessage}
          />
        </Form>
      </h1>
    );
  }
}
