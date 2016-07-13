import React, { Component } from 'react';
import './style.scss';

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	let rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

const ColorsSource = ({color, addColor, colors}) => {
	function generateColors(color) {
		if (!color) {
			return [];
		}

		return Array(10).fill(color).map((color, index) => {
			return colorLuminance(color, 0.5 - 1 / index);
		});
	}
	let colorSet = generateColors(color);
  let items = colorSet.map((item, index) => {
    return <li key={index} 
               className={`color-circle${colors.indexOf(item) < 0 ? ' addable' : ''}`} 
               style={{ background: item }} 
               onClick={item ? addColor : () => false }></li>;
  });
 
  return (
    <div className="selected-colors container">
      <h2>Darker and Lighter</h2>
      <ul className="color-list">{items}</ul>
    </div>
  );
}

// Make ESLint happy again: add validation to props
ColorsSource.propTypes = {
  addColor: React.PropTypes.func,
  color: React.PropTypes.string,
};

export default ColorsSource;
