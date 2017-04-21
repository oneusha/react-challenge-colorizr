import React from 'react';
import invertColor from '../../utils/invertColor';
import { MAX_SELECTED_COLORS, DEFAULT_COLOR } from '../../config/constants';

import './style.scss';

const SelectedColors = ({ collection, removeColor }) => {
  const items = collection.map((item, index) => (
    <li
      key={index}
      className={`color-circle${item ? ' removable' : ''}`}
      style={{ background: item || DEFAULT_COLOR, color: invertColor(item) }}
      onClick={item ? () => removeColor(item) : () => false}
    ></li>
  ));

  const emptyLength = MAX_SELECTED_COLORS - items.length;

  const emptyItems = Array.from(new Array(emptyLength)).map((item, index) => (
    <li
      key={items.length + index}
      className="color-circle"
      style={{ background: DEFAULT_COLOR }}
    ></li>
  ));

  return (
    <div className="selected-colors container">
      <h2>Select up to ten colors</h2>
      <p>Select Colors by clicking on them</p>
      <ul className="color-list">{items}{emptyItems}</ul>
    </div>
  );
};

SelectedColors.propTypes = {
  removeColor: React.PropTypes.func,
  collection: React.PropTypes.array
};

SelectedColors.defaultProps = {
  collection: []
};

export default SelectedColors;
