import {pinIcon, map} from './libs/leaflet-init.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';
import {setAdd} from './set-similar-adds.js';

// Размещение меток объявлений на карте
export const renderAdds = (array) => {
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


