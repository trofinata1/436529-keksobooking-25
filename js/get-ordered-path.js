import {AVATAR_ARRAY, AVATAR_PATH} from './preset-const.js';

// Получить массив из путей до картинок
const arrayAvatarPath = [];

const getOrderedPictures = (array, path) => {
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

// Получать один элемент из массива по-порядку при каждом вызове функции setAdd()
let i = 0;

const getOrderedElementFromArray = (array) => {
  const arrayElement = array[i];
  i++;
  return arrayElement;
};

export {arrayAvatarPath, getOrderedElementFromArray};
