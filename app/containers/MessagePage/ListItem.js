/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <div>
    <span> {item} </span>
  </div>
);

// ListItem.propTypes = {
//   item: PropTypes.string,
// };

export default ListItem;
