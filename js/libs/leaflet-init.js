<<<<<<< HEAD
import {BASE_COORDS, ZOOM} from '../preset-const.js';
import {enableInterface} from '../utils.js';
=======
import {setAddressInput} from '../utils.js';
import {BASE_COORDS} from '../preset-const.js';
import {setAdd} from '../set-similar-adds.js';
import {enableInterface} from '../activation-interface.js';
>>>>>>> 64cbf6e (Выполняет 11-1)

// Добавляем карту
const map = L.map('map')

  .on('load', () => enableInterface())

  .setView(BASE_COORDS, ZOOM);

// Добавляем слой с нужной картой
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Создаем иконку для метки для добавления адреса в форму
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Создаем метку для добавления адреса в форму
export const marker = L.marker(
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
export const renderAdds = (array) => {

  array.forEach((similarAdd) => {
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

};
