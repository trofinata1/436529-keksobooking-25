import {pristine} from './libs/pristin-init.js';
import {form, typeField, priceField, timeFieldset, range, timeFields} from './dom-nodes.js';
import {sendData} from './api.js';
import {resetPin} from './map.js';
import {onSuccessSubmit, onErrorSubmit,} from './show-error-or-success.js';
import {SENDING_DATA_URL} from './const.js';

const TYPES_NIN_PRICE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const submitButton = document.querySelector('.ad-form__submit');

export const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю';
};

export const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  const formData = new FormData(evt.target);

  if (isValid) {

    blockSubmitButton();

    sendData(SENDING_DATA_URL, onSuccessSubmit, onErrorSubmit, formData);

  }
};

// Очищаем форму
export const onFormReset = () => {
  form.reset();
  resetPin();
  range.noUiSlider.reset();

  const addPopupList = document.querySelector('.leaflet-popup-pane');
  const addPopup = document.querySelector('.leaflet-popup');

  if (addPopup) {
    addPopupList.removeChild(addPopup);
  }

};

// Взаимодействие с формой
export const interactionWithForm = () => {
  form.addEventListener('submit', onFormSubmit);
  form.addEventListener('reset', onFormReset);
};

// Меняем плейсхолдер в зависимости от типа жилья
typeField.addEventListener('change', () => {
  const typeValue = typeField.value;
  const attributeValue = TYPES_NIN_PRICE[typeValue];

  priceField.setAttribute('min', attributeValue);
  priceField.setAttribute('placeholder', attributeValue);

});

// Синхронизация значений селектов
const onTimeFieldsetChange = (evt) => {

  timeFields.forEach((timeField) => {
    timeField.value = evt.target.value;
  });

};

// Синхронизируем время заезда и выезда
timeFieldset.addEventListener('change', onTimeFieldsetChange);
