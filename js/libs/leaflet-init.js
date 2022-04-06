import {BASE_COORDS} from '../preset-const.js';
import {enableInterface} from '../utils.js';

// Добавляем карту
export const map = L.map('map')

  .on('load', () => enableInterface())

  .setView(BASE_COORDS, 12);

// Добавляем слой с нужной картой
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


