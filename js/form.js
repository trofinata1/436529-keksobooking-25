import {pristine} from './libs/pristin-init.js';
import {form, typeField, priceField, typesMinPrice, timeFieldset, range} from './const.js';
import {blockSubmitButton, setValue, isSuccessSubmit, isErrorSubmit, resetMarker} from './utils.js';
import {sendData} from './api.js';

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {

    blockSubmitButton();

    sendData(

      () => {
        isSuccessSubmit();
      },

      () => {
        isErrorSubmit();
      },

      new FormData(evt.target)
    );
  }
};

// Очищаем форму
export const onFormReset = () => {
  form.reset();
  resetMarker();
  range.noUiSlider.reset();

  const addPopupList = document.querySelector('.leaflet-popup-pane');
  const addPopup = document.querySelector('.leaflet-popup');

  if (addPopup) {
    addPopupList.removeChild(addPopup);
  }

};

// Отправляем данные из формы
export const watchFormDataSubmit = () => {
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
