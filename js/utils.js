import {roomsCountObject, guestsCountObject, countForCorrectEnd} from './const.js';
import {AVATAR_ARRAY, AVATAR_PATH} from './preset-const.js';
import {pristine} from './libs/pristin-init.js';

// Случайное целое положительное число
export const getRandomWholeNumber = (startNumber, endNumber) => {

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
export const getRandomFractionalNumber = (startNumber, endNumber, fractionalDigits = 2) => {

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

// Случайный элемент массива, может повторяться
export const getRandomElementFromArray = (elements) => elements[getRandomWholeNumber(0, elements.length - 1)];

// Собрать случайный массив из элементов другого массива (может быть пустым)
export const getRandomArrayWithNull = (array) => {

  const randomArray = [];
  const maxNumber = getRandomWholeNumber(0, array.length - 1) - 1;

  for (let j = 0; j <= maxNumber; j++) {
    randomArray.push(array[j]);
  }

  return randomArray;
};

// Собрать случайный массив из элементов другого массива (не может быть пустым)
export const getRandomArray = (array) => {

  const randomArray = [];
  const maxNumber = getRandomWholeNumber(0, array.length - 1);

  for (let j = 0; j <= maxNumber; j++) {
    randomArray.push(array[j]);
  }

  return randomArray;
};

// Добавляем фотографии
export const addPhotos = (array, blockPhoto, blockPhotos) => {
  blockPhotos.innerHTML = '';

  array.forEach((photo) => {
    blockPhoto.src = photo;
    const addPhoto = blockPhoto.cloneNode(true);
    blockPhotos.insertAdjacentElement('beforeend', addPhoto);
  });
};

// Генерируем разные окончания в текстовом блоке
export const getCorrectKeyForRooms = (count) => {
  if (count === 1) {
    return roomsCountObject.alone;
  } else if (count > 1 && count <= countForCorrectEnd) {
    return roomsCountObject.some;
  } return roomsCountObject.many;
};

export const getCorrectKeyForGuests = (count) => {
  if (count === 1) {
    return guestsCountObject.alone;
  } return guestsCountObject.many;
};

// Получить массив из путей до картинок
export const arrayAvatarPath = [];

export const getOrderedPictures = (array, path) => {
  array.forEach((item) => {
    if (item >= 10) {
      arrayAvatarPath.push(`${path}${item}.png`);
    } else {
      arrayAvatarPath.push(`${path}0${item}.png`);
    }
  });
  return arrayAvatarPath;
};

getOrderedPictures(AVATAR_ARRAY, AVATAR_PATH);

// Подставляем текстовый контент
export const setTextContent = (obj) => {
  Object.entries(obj).forEach(([, value]) => {
    Object.values(value)[0].textContent = Object.values(value)[1];
  });
};

// Удаляем блок
export const removeBlock = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value[key] === '') {
      Object.values(value)[0].remove();
    }
  });
};

// Функция для удаления ошибок пристины
export const deleteErrors = (evt) => {

  const errorMessage = evt.target.nextElementSibling;

  if (errorMessage.matches('.pristine-error')) {

    pristine.reset();

  }
};
