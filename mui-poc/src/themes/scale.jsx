const baseUnit = 0.8;
const minSize = 1;
const maxSize = 8;

export const getScale = (size) => {
  if (size >= maxSize) {
    return `${maxSize * baseUnit}rem`;
  }
  if (size < minSize) {
    return `0.01rem`;
  }
  return `${size * baseUnit}rem`;
};
