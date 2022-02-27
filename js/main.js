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

// ИСПОЛЬЗУЕМЫЕ ФУНКЦИИ

// Случайное целое положительное число
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Случайное целое положительное число с плавающей точкой
const getRandomPositiveFloat = (a, b, digits = 5) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
};

// Случайный элемент массива
const getRandomElementFromArray = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Собрать случайный массив из элементов другого массива
const getRandomArray = (array) => {

  const randomArray = [];

  for (let i = 0; i <= getRandomPositiveInteger(0, array.length - 1); i++) {
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
  const locationLat = getRandomPositiveFloat(35.65000, 35.70000);
  const locationLng = getRandomPositiveFloat(139.70000, 139.80000);

  return ({

    author: {
      avatar: getAvatar(1, 10),
    },

    location: {
      lat: locationLat,
      lng: locationLng
    },

    offer: {
      title: getRandomElementFromArray(TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomPositiveInteger(1, 1e9),
      type: getRandomElementFromArray(TYPES),
      rooms: getRandomPositiveInteger(1, 50),
      guests: getRandomPositiveInteger(1, 10),
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
