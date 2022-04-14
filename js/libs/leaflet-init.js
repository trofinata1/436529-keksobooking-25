import {BASE_COORDS, ZOOM} from '../preset-const.js';

// Добавляем карту
export const map = L.map('map')
  .setView(BASE_COORDS, ZOOM);

export const mapLoaded = map._loaded;

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

// Создаем главную метку
export const mainPin = L.marker(
  BASE_COORDS,
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

// Добавляем метку на карту
mainPin
  .addTo(map);

// Внешний вид маленькой метки
export const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
