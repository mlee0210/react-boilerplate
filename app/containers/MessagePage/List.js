/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = props => (
  <div className="messageList">
    {props.list.map(item => <ListItem item={item} />)}
  </div>
);

// List.propTypes = {
//   list: PropTypes.array.isRequired,
// };

export default List;

// {this.state.messages ? (
//           <ul>Message:{this.state.messages.map(item => <li>{item}</li>)}</ul>
//         ) : (
//           <p> Loading... </p>
//         )}
