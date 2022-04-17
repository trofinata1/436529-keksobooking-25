import {pristine} from './libs/pristin-init.js';
import {form, typeField, priceField, timeFieldset, range, submitButton,timeFields} from './const.js';
import {TYPES_NIN_PRICE} from './preset-const.js';
import {sendData} from './api.js';
import {onSuccessSubmit, onErrorSubmit,} from './show-error-or-success.js';
import {resetPin} from './map.js';

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

    sendData(onSuccessSubmit, onErrorSubmit, formData);

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
export const setValue = (evt) => {

  timeFields.forEach((timeField) => {
    timeField.value = evt.target.value;
  });

};

// Синхронизируем время заезда и выезда
timeFieldset.addEventListener('change', setValue);
