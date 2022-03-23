import './library-initialization.js';
import {form, range, capacityField, roomsField, roomsOption, guestsOption, capacityFieldset, roomsFieldset, valuesDivs} from './const.js';
import {pristine, pristinePrice} from './library-initialization.js';
import {deleteValidateError} from './utils.js';

// Валидируем поля с помощью Пристин
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

// Валидируем число комнат и гостей
const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const validateGuests = () => guestsOption[capacityField.value].includes(roomsField.value);

pristine.addValidator(roomsField, validateRooms, 'выберите другое значение');
pristine.addValidator(capacityField, validateGuests, 'выберите другое значение');

// Убираем подписи об ошибках, когда инпуты не в фокусе
deleteValidateError(capacityField, capacityFieldset);
deleteValidateError(roomsField, roomsFieldset);

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
    pristinePrice.reset();
  }
});
