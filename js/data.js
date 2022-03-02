import {getRandomFractionalNumber, getRandomElementFromArray,getRandomWholeNumber, getRandomArray} from './get-random-article.js';
import {getOrderedArray} from './get-ordered-article.js';

// Константы
const TITLES = [
  'Апартаменты-студия, 19 м²',
  'Квартира, 111 м²',
  'Квартира, 350 м²'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Рядом большое количество магазинов',
  'До метро 1 мин пешком, или 2 остановки на трамвае, остановка у дома',
  'Проблем с парковкой нет, идеальная транспортная доступность, до 3го кольца 10 мин на машине'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_ADD_COUNT = 10;
const MAX_PRICE = 1e9;
const MAX_ROOMS_COUNT = 50;
const MAX_GUESTS_NUMBER = 30;
const MIN_LAT_POINT = 35.65000;
const MAX_LAT_POINT = 35.70000;
const MIN_LNG_POINT = 139.70000;
const MAX_LNG_POINT = 139.80000;
const COORDINATE_FRACTIONAL_DIGITS = 5;
const AVATAR_PATH = 'img/avatars/user';

// Генерировать итоговый объект с объектами
function getAdd() {
  const locationLat = getRandomFractionalNumber(MIN_LAT_POINT, MAX_LAT_POINT, COORDINATE_FRACTIONAL_DIGITS);
  const locationLng = getRandomFractionalNumber(MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS);

  return ({

    author: {
      avatar: getOrderedArray(1, AVATAR_PATH),
    },

    location: {
      lat: locationLat,
      lng: locationLng
    },

    offer: {
      title: getRandomElementFromArray(TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomWholeNumber(1, MAX_PRICE),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomWholeNumber(1, MAX_ROOMS_COUNT),
      guests: getRandomWholeNumber(1, MAX_GUESTS_NUMBER),
      checkin: getRandomElementFromArray(CHECKIN),
      checkout: getRandomElementFromArray(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    }

  });
}

export {SIMILAR_ADD_COUNT, getAdd};
