import './libs/noUiSlider-init.js';
import {pristine} from './libs/pristin-init.js';
import {range, capacityField, roomsField, roomsOption, guestsOption, valuesDivs, roomsGuestsErrorMessage,
  formInputs} from './const.js';
import {deleteErrors} from './utils.js';

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
