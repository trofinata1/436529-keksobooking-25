import {map} from './libs/leaflet-init.js';
import {BASE_COORDS} from './preset-const.js';
import {setAddressInput} from './utils.js';
import {similarAdds} from './get-similar-adds.js';
import {setAdd} from './set-similar-adds.js';

// Создаем иконку для метки для добавления адреса в форму
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Создаем метку для добавления адреса в форму
const marker = L.marker(
  BASE_COORDS,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

// Добавляем метку на карту
marker
  .addTo(map);

// Получаем координаты при перемещении метки и передаем эти координаты в соответствующий инпут
marker.on('moveend', (evt) => {
  const newCoords = evt.target.getLatLng();

  const lat = newCoords.lat;
  const lng = newCoords.lng;

  setAddressInput({lat, lng});
});

// Создаем метки объявлений

// Внешний вид метки
const addIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Размещение меток объявлений на карте
export const getAddsMarkers = similarAdds.forEach((similarAdd) => {
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

  const baloon = setAdd(similarAdd);

  addMarker
    .addTo(map)
    .bindPopup(baloon);
});


