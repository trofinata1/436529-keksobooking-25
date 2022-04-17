export const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
export const range = document.querySelector('#range');
export const form = document.querySelector('.ad-form');
export const roomsField = form.querySelector('[name="rooms"]');
export const capacityField = form.querySelector('[name="capacity"]');
export const priceField = document.querySelector('#price');
export const formInputs = document.querySelectorAll('.ad-form__watch-focus');
export const timeFieldset = document.querySelector('#time-fieldset');
export const timeFields = timeFieldset.querySelectorAll('select');
export const typeField = document.querySelector('#type');
export const mapFilter = document.querySelector('.map__filters');
const formChildren = form.querySelectorAll('fieldset');
const filterChildrenSelect = mapFilter.querySelectorAll('select');
const filterChildrenFieldset = mapFilter.querySelectorAll('fieldset');
export const allFormAndFilterChildren = [...formChildren, ...filterChildrenSelect, ...filterChildrenFieldset];
export const submitButton = document.querySelector('.ad-form__submit');
export const isEscapeKey = (evt) => evt.key === 'Escape';

export const valuesDivs = [
  document.querySelector('#price')
];

export const roomsCount = {
  'alone': 'комната',
  'some': 'комнаты',
  'many': 'комнат'
};

export const guestsCount = {
  'alone': 'гостя',
  'many': 'гостей',
};

export const roomsOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

export const guestsOption = {
  '1': ['1', '2', '3'],
  '2': ['2', '3'],
  '3': ['3'],
  '0': ['100']
};
