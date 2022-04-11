import {range, timeFields, roomsCount, guestsCount, form, submitButton} from './const.js';
import {AVATAR_ARRAY, AVATAR_PATH, COUNT_FOR_CORRECT_END, BASE_COORDS} from './preset-const.js';
import {pristine} from './libs/pristin-init.js';
import {marker} from './libs/leaflet-init.js';

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
    if (value[key] === undefined || value[key].length === 0) {
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

// Сбрасываем маркер в начальное состояние
export const resetMarker = () => {
  marker.setLatLng(
    BASE_COORDS
  );
};

// Очищаем форму
export const resetForm = () => {
  form.reset();
  resetMarker();
  range.noUiSlider.reset();

  const addPopupList = document.querySelector('.leaflet-popup-pane');
  const addPopup = document.querySelector('.leaflet-popup');

  if (addPopup) {
    addPopupList.removeChild(addPopup);
  }

};

// Добавляет координаты в поле адреса
export const setAddressInput = ({lat, lng}) => {
  const addressInput = document.querySelector('#address');

  const latValue = lat.toFixed(5);
  const lngValue = lng.toFixed(5);

  addressInput.value = `${latValue}, ${lngValue}`;

  return addressInput;
};

export const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

export const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

// Создаем сообщение об ошибке, если данные с сервера не загрузились
export const showDataError = () => {
  const dataError = document.createElement('div');
  dataError.className = 'error-block';
  dataError.innerHTML = 'Не удалось загрузить данные, попробуйте перезагрузить страницу';
  document.body.append(dataError);
};
