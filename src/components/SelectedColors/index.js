import React from 'react';
import invertColor from '../../utils/invertColor';

import './style.scss';

const DEFAULT_COLOR = '#ededed';

const SelectedColors = ({ collection, removeColor }) => {
  let items = collection.map((item, index) => (
    <li
      key={index}
      className={`color-circle${item ? ' removable' : ''}`}
      style={{ background: item || DEFAULT_COLOR, color: invertColor(item) }}
      onClick={item ? () => removeColor(item) : () => false}
    ></li>
  ));
  return (
    <div className="selected-colors container">
      <h2>Select up to ten colors</h2>
      <p>Select Colors by clicking on them</p>
      <ul className="color-list">{items}</ul>
    </div>
  );
};

SelectedColors.propTypes = {
  removeColor: React.PropTypes.func,
  collection: React.PropTypes.array
};

SelectedColors.defaultProps = {
  collection: Array(10).fill(null)
};

export default SelectedColors;
