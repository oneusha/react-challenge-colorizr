import React from 'react';
import ColorPicker from 'react-color-picker';

import invertColor from '../../utils/invertColor';

const ColorChooser = ({ title, color, changeMainColor }) => (
  <div>
    <h1 style={{ color: invertColor(color) }}>{title}</h1>
    <ColorPicker
      defaultValue={color}
      onDrag={changeMainColor}
    />
  </div>
);

ColorChooser.propTypes = {
  changeMainColor: React.PropTypes.func,
  color: React.PropTypes.string,
  title: React.PropTypes.string
};

export default ColorChooser;
