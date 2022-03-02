// Случайное целое положительное число
const getRandomWholeNumber = (startNumber, endNumber) => {

  if (startNumber < 0 || endNumber < 0) {
    return false;
  }

  if (startNumber === endNumber) {
    return startNumber;
  }

  const maxWholeNumber = Math.floor(Math.max(startNumber, endNumber));
  const minWholeNumber = Math.ceil(Math.min(startNumber, endNumber));
  const randomWholeNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber;

  return randomWholeNumber;

};

// Случайное целое положительное число с плавающей точкой
const getRandomFractionalNumber = (startNumber, endNumber, fractionalDigits = 2) => {

  if (startNumber < 0 || endNumber < 0) {
    return false;
  }

  if (startNumber === endNumber) {
    return startNumber;
  }

  const maxNumber = Math.max(startNumber, endNumber);
  const minNumber = Math.min(startNumber, endNumber);
  const randomNumber = Math.random() * (maxNumber - minNumber) + minNumber;

  return randomNumber.toFixed(fractionalDigits);

};

// Случайный элемент массива
const getRandomElementFromArray = (elements) => elements[getRandomWholeNumber(0, elements.length - 1)];

// Собрать случайный массив из элементов другого массива
const getRandomArray = (array) => {

  const randomArray = [];

  for (let i = 0; i <= getRandomWholeNumber(0, array.length - 1); i++) {
    randomArray.push(array[i]);
  }

  return randomArray;
};

export {getRandomFractionalNumber};
export {getRandomElementFromArray};
export {getRandomWholeNumber};
export {getRandomArray};
