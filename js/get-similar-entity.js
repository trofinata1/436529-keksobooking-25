import {TITLES} from './preset-const.js';

import {getAdds} from './data.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';

const similarListElement = document.querySelector('.map');
const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdds = Array.from({length: SIMILAR_ADD_COUNT}, getAdds);

similarAdds.forEach((offer) => {
  const addElement = similarAddTemplate.cloneNode(true);
  addElement.querySelector('.popup__title').textContent = offer.title;
  similarListElement.insertBefore(addElement, document.querySelector('.map__canvas'));
});
