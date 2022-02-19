const getWholeNumber = (startNumber, endNumber) => {
  if (startNumber < 0 || endNumber < 0) {
    return false;
  } if (startNumber === endNumber) {
    return 0;
  } const maxWholeNumber = Math.floor(Math.max(startNumber, endNumber));
  const minWholeNumber = Math.ceil(Math.min(startNumber, endNumber));
  const randomWholeNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;
  return randomWholeNumber;
};

getWholeNumber(-25, 25);

const getFractionalNumber = (startNumber, endNumber, numberOfCharacters) => {
  if (startNumber < 0 || endNumber < 0) {
    return false;
  } if (startNumber === endNumber) {
    return 0;
  } const maxNumber = Math.max(startNumber, endNumber);
  const minNumber = Math.min(startNumber, endNumber);
  const randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return randomNumber.toFixed(numberOfCharacters);
};

getFractionalNumber(-5, 5, 2);
