export const similarListElement = document.querySelector('.map__canvas');
export const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
export const form = document.querySelector('.ad-form');
export const range = document.getElementById('range');
export const titleInput = document.getElementById('title');
export const titleFieldset = document.getElementById('title_fieldset');
export const roomsField = form.querySelector('[name="rooms"]');
export const capacityField = form.querySelector('[name="capacity"]');
export const capacityFieldset = document.getElementById('capacity_fieldset');
export const roomsFieldset = document.getElementById('room_number_fieldset');
export const priceFieldset = document.getElementById('price_fieldset');
export const formInputs = document.querySelectorAll('.ad-form__before-error');

export const valuesDivs = [
  document.getElementById('price')
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

export const roomsGuestsErrorMessage = 'Выберите другое значение';
