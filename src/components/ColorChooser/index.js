import React from 'react';
import ColorPicker from 'react-color-picker';

import tinycolor from 'tinycolor2';

const ColorChooser = ({ title, color, changeMainColor }) => (
  <div>
    <h1 style={{ color: tinycolor(color).isDark() ? '#fff' : '#000' }}>
      {title}
    </h1>
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
