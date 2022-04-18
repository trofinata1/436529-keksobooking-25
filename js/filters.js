import {markerGroup, placeAddsLabels} from './map.js';
import {debounce} from './debounce.js';

export const mapFilter = document.querySelector('.map__filters');
const filterRoomsField = document.querySelector('#housing-rooms');
const filterTypeField = document.querySelector('#housing-type');
const filterPriceField = document.querySelector('#housing-price');
const filterGuestsField = document.querySelector('#housing-guests');

const priceLevels = {
  'low': {
    min: 0,
    max: 10000
  },
  'high': {
    min: 50000,
    max: 100000
  },
  'middle': {
    min: 10000,
    max: 50000
  },
  'any': {
    min: 0,
    max: 100000
  },
};

export const filterType = ({offer}) => filterTypeField.value === 'any' || offer.type === filterTypeField.value;

export const filterPrice = ({offer}) => offer.price >= priceLevels[filterPriceField.value].min && offer.price <= priceLevels[filterPriceField.value].max;

export const filterRooms = ({offer}) => (filterRoomsField.value === 'any') ? true : offer.rooms === Number(filterRoomsField.value);

export const filterGuests = ({offer}) => (filterGuestsField.value === 'any') ? true : offer.guests === Number(filterGuestsField.value);

export const filterFeatures = ({offer}) => {
  const features = [];
  const checkedFeatures = document.querySelector('.map__features').querySelectorAll('input:checked');

  checkedFeatures.forEach((checkFeature) => features.push(checkFeature.value));

  if (offer.features){

    return features.every((feature) => offer.features.includes(feature));
  }
  return false;
};

const filterAdds = (adds) => adds.filter((add) => (filterType(add) && filterPrice(add) && filterRooms(add) && filterGuests(add) && filterFeatures(add)));

export const setFilters = (cb) => {

  mapFilter.addEventListener('change', () => {
    cb();
    markerGroup.clearLayers();

  });

};

// Заполняем карту фильтрованными метками
export const fillMapFilteredAdds = (data) => {
  placeAddsLabels(data);

  setFilters(debounce(
    () => placeAddsLabels(filterAdds(data)),
  ));

};
