import {marker, map} from './libs/leaflet-init.js';
import {setAddressInput} from './utils.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';
import {setAdd} from './set-similar-adds.js';

export const getNewCoords = () => {

  marker.on('moveend', (evt) => {

    const newCoords = evt.target.getLatLng();

    const lat = newCoords.lat.toFixed(5);
    const lng = newCoords.lng.toFixed(5);

    setAddressInput(lat, lng);
  });

};

// Создаем метки объявлений

// Внешний вид метки
const addIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


// Размещение меток объявлений на карте
export const renderAdds = (array) => {array
  .slice()
  .slice(0, SIMILAR_ADD_COUNT)
  .forEach((similarAdd) => {

    const addLat = similarAdd.location.lat;
    const addLng = similarAdd.location.lng;

    const addMarker = L.marker(
      {
        lat: addLat,
        lng: addLng,
      },
      {
        icon: addIcon,
      }
    );

    const balloon = setAdd(similarAdd);

    addMarker
      .addTo(map)
      .bindPopup(balloon);
  });
};

export function activateInterfaceByMap(cb) {
  map.on('load', cb);
}
