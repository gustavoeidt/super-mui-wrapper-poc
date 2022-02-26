const baseUnit = 8;
const minSize = 1;
const maxSize = 8;

export const getScale = ({ size = 1 }) => {
  if (size >= maxSize) {
    return maxSize * baseUnit;
  }
  if (size <= minSize) {
    return minSize * baseUnit;
  }
  return size * baseUnit;
};
