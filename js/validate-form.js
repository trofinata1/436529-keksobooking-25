import './libs/noUiSlider-init.js';
import {pristine} from './libs/pristin-init.js';
import {form, range, capacityField, roomsField, roomsOption, guestsOption, valuesDivs, roomsGuestsErrorMessage,
  typeField, priceField, typesMinPrice, timeFieldset, formInputs} from './const.js';
import {blockSubmitButton, deleteErrors, setValue, unblockSubmitButton} from './utils.js';
import {sendData} from './api.js';

// Валидируем поля с помощью Пристин
export const setUserFormSubmit = (onSuccess, onFail) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();

    if(pristine.validate()) {

      blockSubmitButton();

      sendData(

        () => {
          onSuccess();
          unblockSubmitButton();
        },

        () => {
          onFail();
          unblockSubmitButton();
        },

        new FormData(evt.target)

      );
    }
  });
};

// Валидируем число комнат и гостей
const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const validateGuests = () => guestsOption[capacityField.value].includes(roomsField.value);

pristine.addValidator(roomsField, validateRooms, roomsGuestsErrorMessage);
pristine.addValidator(capacityField, validateGuests, roomsGuestsErrorMessage);

// Привязываем значения ползунка к инпуту и убираем сообщение об ошибке, когда оно не нужно
range.noUiSlider.on('update', (values, handle) => {
  const roller = range.querySelector('.noUi-touch-area');
  const rangeSliderElements = [roller, range];

  rangeSliderElements.forEach((rangeSliderElement) => {
    rangeSliderElement.addEventListener('click', () => {
      valuesDivs[handle].value = values[handle];
    });
  });

  if (isFinite(valuesDivs[handle].value) ) {
    pristine.reset();
  }
});

// Убираем сообщение об ошибке при отсутствии фокуса
formInputs.forEach((input) => {
  input.addEventListener('blur', deleteErrors);
});

// Меняем плейсхолдер в зависимости от типа жилья
typeField.addEventListener('change', () => {
  const typeValue = typeField.value;
  const attributeValue = typesMinPrice[typeValue];

  priceField.setAttribute('min', attributeValue);
  priceField.setAttribute('placeholder', attributeValue);

});

// Синхронизируем время заезда и выезда
timeFieldset.addEventListener('change', setValue);
