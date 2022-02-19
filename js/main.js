/* eslint-disable no-shadow */

const getWholeNumber = (startNumber, endNumber) => {
  if (startNumber < 0 || endNumber < 0) {
    return false;
  } if (startNumber === endNumber) {
    return 0;
  } if (startNumber > endNumber) {
    const minWholeNumber = Math.floor(endNumber);
    const maxWholeNumber = Math.ceil(startNumber);
    const randomNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;
    return randomNumber;
  }
  const minWholeNumber = Math.ceil(startNumber);
  const maxWholeNumber = Math.floor(endNumber);
  const randomNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;
  return randomNumber;
};

getWholeNumber(25, 25);

const getFractionalNumber = (startNumber, endNumber, numberOfCharacters) => {
  if (startNumber < 0 || endNumber < 0) {
    return false;
  } if (startNumber === endNumber) {
    return 0;
  } if (startNumber > endNumber) {
    const minWholeNumber = endNumber;
    const maxWholeNumber = startNumber;
    const randomNumber = (Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;
    return randomNumber.toFixed(numberOfCharacters);
  }
  const minWholeNumber = startNumber;
  const maxWholeNumber = endNumber;
  const randomNumber = (Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;
  return randomNumber.toFixed(numberOfCharacters);
};

getFractionalNumber(1.2, 5.5, 3);
