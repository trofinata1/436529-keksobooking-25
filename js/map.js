import {pinIcon, map, mainPin, BASE_COORDS} from './libs/leaflet-init.js';
import {setAdd} from './set-similar-adds.js';
import {setAddressInput} from './utils.js';

const COORDINATE_FRACTIONAL_DIGITS = 5;
const SIMILAR_ADD_COUNT = 10;

// Размещение меток объявлений на карте
export const placeAddsLabels = (array) => {
  array
    .slice()
    .slice(0, SIMILAR_ADD_COUNT)
    .forEach((similarAdd) => {

      const addLat = similarAdd.location.lat;
      const addLng = similarAdd.location.lng;

      const pin = L.marker(
        {
          lat: addLat,
          lng: addLng,
        },
        {
          icon: pinIcon,
        }
      );

      const balloon = setAdd(similarAdd);

      pin
        .addTo(map)
        .bindPopup(balloon);
    });
};

// Сбрасываем маркер в начальное состояние
export const resetPin = () => {
  mainPin.setLatLng(
    BASE_COORDS
  );
};

export const onMainPinMoveend = (evt) => {

  const newCoords = evt.target.getLatLng();

  const lat = newCoords.lat.toFixed(COORDINATE_FRACTIONAL_DIGITS);
  const lng = newCoords.lng.toFixed(COORDINATE_FRACTIONAL_DIGITS);

  setAddressInput(lat, lng);
};
