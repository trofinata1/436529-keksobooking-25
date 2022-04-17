import './libs/noUiSlider-init.js';
import {pristine} from './libs/pristin-init.js';
import {range, capacityField, roomsField, formInputs, priceField} from './dom-nodes.js';
import {ROOMS_GUESTS_ERROR_MESSAGE} from './const.js';

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

// Валидируем число комнат и гостей
const validateRooms = () => roomsOption[roomsField.value].includes(capacityField.value);
const validateGuests = () => guestsOption[capacityField.value].includes(roomsField.value);

pristine.addValidator(roomsField, validateRooms, ROOMS_GUESTS_ERROR_MESSAGE);
pristine.addValidator(capacityField, validateGuests, ROOMS_GUESTS_ERROR_MESSAGE);

// Привязываем значения ползунка к инпуту и убираем сообщение об ошибке, когда оно не нужно
range.noUiSlider.on('update', (values, handle) => {
  priceField.value = values[handle];

  if (isFinite(priceField.value) ) {
    pristine.reset();
  }
});

// Функция для удаления ошибок пристины
export const onInputBlur = (evt) => {

  const errorMessage = evt.target.nextElementSibling;

  if (errorMessage.matches('.pristine-error')) {

    pristine.reset();

  }
};

// Убираем сообщение об ошибке при отсутствии фокуса
formInputs.forEach((input) => {
  input.addEventListener('blur', onInputBlur);
});
