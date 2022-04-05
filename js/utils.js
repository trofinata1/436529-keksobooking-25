import {timeFields, roomsCount, guestsCount, allFormFilterChildren, form, mapFilter, range} from './const.js';
import {AVATAR_ARRAY, AVATAR_PATH, COUNT_FOR_CORRECT_END} from './preset-const.js';
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
    return roomsCount.alone;
  } else if (count > 1 && count <= COUNT_FOR_CORRECT_END) {
    return roomsCount.some;
  } return roomsCount.many;
};

export const getCorrectKeyForGuests = (count) => {
  if (count === 1) {
    return guestsCount.alone;
  } return guestsCount.many;
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

// Синхронизация значений селектов
export const setValue = (evt) => {

  timeFields.forEach((timeField) => {
    timeField.value = evt.target.value;
  });

};

// Инактивация элементов
export const disableInterface = () => {

  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  allFormFilterChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
};

// Активация элементов

//Следующие три строчки пока только чтобы проверить, работает ли снятие неактивности при загрузке. В след. ДЗ уберу это и сделаю уже под нормальную загрузку карты с методом LeafLet 'load'
const scriptLeaflet = document.createElement('script');
scriptLeaflet.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
document.body.append(scriptLeaflet);

export const enableInterface = () => {
  scriptLeaflet.onload = () => {
    form.classList.remove('ad-form--disabled');
    mapFilter.classList.remove('map__filters--disabled');

    allFormFilterChildren.forEach((child) => {
      child.removeAttribute('disabled', 'disabled');
    });
  };
};
