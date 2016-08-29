import React from 'react';
import './style.scss';

function colorLuminance(color, lum = 0) {
	// validate hex string
  let hex = String(color).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

	// convert to decimal and change luminosity
  let rgb = '#';
  let c;
  let i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += (`00${c}`).substr(c.length);
  }

  return rgb;
}

const ColorsSource = ({ color, addColor, colors }) => {
  function generateColors() {
    if (!color) return [];

    return Array(10).fill(color).map((o, index) =>
      colorLuminance(color, 0.5 - 1 / index)
    );
  }

  const colorSet = generateColors(color);
  const items = colorSet.map((item, index) => (
    <li
      key={index}
      className={`color-circle${colors.indexOf(item) < 0 ? ' addable' : ''}`}
      style={{ background: item }}
      onClick={item ? addColor : () => false}
    ></li>
  ));

  return (
    <div className="selected-colors container">
      <h2>Darker and Lighter</h2>
      <ul className="color-list">{items}</ul>
    </div>
  );
};

// Make ESLint happy again: add validation to props
ColorsSource.propTypes = {
  addColor: React.PropTypes.func,
  color: React.PropTypes.string,
  colors: React.PropTypes.array
};

export default ColorsSource;
