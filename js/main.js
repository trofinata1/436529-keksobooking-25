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

// ИСПОЛЬЗУЕМЫЕ ФУНКЦИИ

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

// Получать ссылки на аватарки
const indexList = [];

const getAvatar = (a) => {
  const indexAvatar = indexList[indexList.length - 1] + 1;

  if (indexList.length < 1) {
    indexList.push(a);
    return `img/avatars/user0${a}.png`;

  } else if (indexList.length >= 9) {
    indexList.push(indexAvatar);
    return `img/avatars/user${indexAvatar}.png`;

  } else {
    indexList.push(indexAvatar);
    return `img/avatars/user0${indexList[indexList.length - 1]}.png`;
  }
};

// Генерировать итоговый объект с объектами
function getAdd() {
  const locationLat = getRandomFractionalNumber(MIN_LAT_POINT, MAX_LAT_POINT, COORDINATE_FRACTIONAL_DIGITS);
  const locationLng = getRandomFractionalNumber(MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS);

  return ({

    author: {
      avatar: getAvatar(1, SIMILAR_ADD_COUNT),
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

// Генерировать итоговый массив с 10-ю объектами
const similarAdd = Array.from({length: SIMILAR_ADD_COUNT}, getAdd);
// eslint-disable-next-line no-console
console.log(similarAdd);
