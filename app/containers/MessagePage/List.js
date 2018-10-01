/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = props => {
  console.log(props);
  return (
    <div className="messageList">
      {props.list.map(item => <ListItem item={item} />)}
    </div>
  );
};

// List.propTypes = {
//   list: PropTypes.array.isRequired,
// };

export default List;
