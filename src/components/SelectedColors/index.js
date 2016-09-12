import React from 'react';
import './style.scss';

const DEFAULT_COLOR = '#ededed';

const SelectedColors = ({ colors, removeColor }) => {
  let items = colors.map((item, index) => (
    <li
      key={index}
      className={`color-circle${item ? ' removable' : ''}`}
      style={{ background: item || DEFAULT_COLOR }}
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
  colors: React.PropTypes.array
};

SelectedColors.defaultProps = {
  colors: Array(10).fill(null)
};

export default SelectedColors;
