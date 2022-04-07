import {BASE_COORDS, ZOOM} from '../preset-const.js';
import {enableInterface} from '../utils.js';

// Добавляем карту
export const map = L.map('map')

  .on('load', () => enableInterface())

  .setView(BASE_COORDS, ZOOM);

// Добавляем слой с нужной картой
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


