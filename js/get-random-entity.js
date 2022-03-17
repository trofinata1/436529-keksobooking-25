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

// Собрать случайный массив из элементов другого массива (может быть пустым)
const getRandomArrayWithNull = (array) => {

  const randomArray = [];
  const maxNumber = getRandomWholeNumber(0, array.length - 1) - 1;

  for (let i = 0; i <= maxNumber; i++) {
    randomArray.push(array[i]);
  }

  return randomArray;
};

// Собрать случайный массив из элементов другого массива (не может быть пустым)
const getRandomArray = (array) => {

  const randomArray = [];
  const maxNumber = getRandomWholeNumber(0, array.length - 1);

  for (let i = 0; i <= maxNumber; i++) {
    randomArray.push(array[i]);
  }

  return randomArray;
};

export {getRandomFractionalNumber, getRandomElementFromArray, getRandomWholeNumber, getRandomArray, getRandomArrayWithNull};
