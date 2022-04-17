import {roomsCount, guestsCount} from './const.js';
import {COUNT_FOR_CORRECT_END} from './preset-const.js';

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

// Добавляет координаты в поле адреса
export const setAddressInput = (lat,lng) => {
  const addressInput = document.querySelector('#address');

  addressInput.value = `${lat}, ${lng}`;
};
