import {pinIcon, map, mainPin} from './libs/leaflet-init.js';
import {SIMILAR_ADD_COUNT, BASE_COORDS} from './preset-const.js';
import {setAdd} from './set-similar-adds.js';
import {setAddressInput} from './utils.js';

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

  const lat = newCoords.lat.toFixed(5);
  const lng = newCoords.lng.toFixed(5);

  setAddressInput(lat, lng);
};
