import {TITLES, TYPES, CHECKIN, CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, MAX_PRICE, MAX_ROOMS_COUNT, MAX_GUESTS_COUNT, MIN_LAT_POINT,
  MAX_LAT_POINT, MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS, AVATAR_PATH, SIMILAR_ADD_COUNT} from './preset-const.js';
import {getRandomFractionalNumber, getRandomElementFromArray,getRandomWholeNumber, getRandomArray, getRandomArrayWithNull} from './get-random-entity.js';
import {getOrderedPictures} from './get-ordered-pictures.js';

// Генерировать итоговый объект с объектами
function createAdds() {
  const locationLat = getRandomFractionalNumber(MIN_LAT_POINT, MAX_LAT_POINT, COORDINATE_FRACTIONAL_DIGITS);
  const locationLng = getRandomFractionalNumber(MIN_LNG_POINT, MAX_LNG_POINT, COORDINATE_FRACTIONAL_DIGITS);

  return ({

    author: {
      avatar: getOrderedPictures(1, AVATAR_PATH, SIMILAR_ADD_COUNT),
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
      guests: getRandomWholeNumber(1, MAX_GUESTS_COUNT),
      checkin: getRandomElementFromArray(CHECKIN),
      checkout: getRandomElementFromArray(CHECKOUT),
      features: getRandomArrayWithNull(FEATURES),
      description: getRandomElementFromArray(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    }

  });
}

export {createAdds};
