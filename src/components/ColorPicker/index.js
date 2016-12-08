import React from 'react';
import ColorPicker from 'react-color-picker'

import './style.scss';

const ColorPicker = (props) => (
  <input
    type="color"
    name="mainColor"
    className="color-input"
    id="mainColor" onChange={(e) => props.changeColor(e.value)}
  />
);

ColorPicker.propTypes = {
  changeColor: React.PropTypes.func
};

export default ColorPicker;
