const indexList = [];

const getOrderedArray = (startNumber, path) => {
  const indexElement = indexList[indexList.length - 1] + 1;

  if (indexList.length < 1) {
    indexList.push(startNumber);
    return `${path}0${startNumber}.png`;

  } else if (indexList.length >= 9) {
    indexList.push(indexElement);
    return `${path}${indexElement}.png`;

  } else {
    indexList.push(indexElement);
    return `${path}0${indexList[indexList.length - 1]}.png`;
  }
};

export {getOrderedArray};
