import tinycolor from 'tinycolor2';

export function getLightAndDark(hexColor) {
  const color = tinycolor(hexColor);
  const brightLevel = ~~(color.getBrightness() / 255 * 9);
  return new Array(10).fill(null).map((o, index) => {
    if (brightLevel < index) {
      return tinycolor(hexColor).lighten((index - brightLevel) * (index)).toString();
    }

    return tinycolor(hexColor).darken((brightLevel - index) * (brightLevel)).toString();
  });
}
