import {pristine} from './libs/pristin-init.js';
import {form, typeField, priceField, typesMinPrice, timeFieldset, range} from './const.js';
import {blockSubmitButton, setValue, resetPin} from './utils.js';
import {sendData} from './api.js';
import {onSuccessSubmit, onErrorSubmit,} from './show-error-or-success.js';

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
  const attributeValue = typesMinPrice[typeValue];

  priceField.setAttribute('min', attributeValue);
  priceField.setAttribute('placeholder', attributeValue);

});

// Синхронизируем время заезда и выезда
timeFieldset.addEventListener('change', setValue);
