export const similarListElement = document.querySelector('.map__canvas');
export const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
export const form = document.querySelector('.ad-form');
export const range = document.querySelector('#range');
export const titleInput = document.querySelector('#title');
export const titleFieldset = document.querySelector('#title_fieldset');
export const roomsField = form.querySelector('[name="rooms"]');
export const capacityField = form.querySelector('[name="capacity"]');
export const capacityFieldset = document.querySelector('#capacity_fieldset');
export const roomsFieldset = document.querySelector('#room_number_fieldset');
export const priceField = document.querySelector('#price');
export const priceFieldset = document.querySelector('#price_fieldset');
export const formInputs = document.querySelectorAll('.ad-form__watch-focus');
export const timeFieldset = document.querySelector('#time-fieldset');
export const timeFields = timeFieldset.querySelectorAll('select');
export const typeField = document.querySelector('#type');

export const valuesDivs = [
  document.querySelector('#price')
];

export const typesObject = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

export const roomsCountObject = {
  'alone': 'комната',
  'some': 'комнаты',
  'many': 'комнат'
};

export const guestsCountObject = {
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

export const typeMinPriceObject = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

export const roomsGuestsErrorMessage = 'Выберите другое значение';
