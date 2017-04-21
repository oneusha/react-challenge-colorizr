import tinycolor from 'tinycolor2';

const invertColor = color => (tinycolor(color).isDark() ? '#ffffff' : '#000000');
export default invertColor;
