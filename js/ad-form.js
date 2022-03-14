import {form, pristine, range} from './library-initialization.js';

// Валидируем поля с помощью Пристин
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
});

// Валидируем число комнат и гостей
const capacity = document.getElementById('capacity');
const roomNumber = document.getElementById('room_number');

pristine.addValidator(capacity, () => {
  const roomNumberValue = document.getElementById('room_number').value;
  const capacityValue = document.getElementById('capacity').value;

  if (((roomNumberValue >= capacityValue) && ((roomNumberValue !== '100') && (capacityValue !== '0')) || (roomNumberValue === '100' && capacityValue === '0'))) {
    return true;
  } return false;
}, 'Выберите другое значение', 1, false);

pristine.addValidator(roomNumber, () => {
  const roomNumberValue = document.getElementById('room_number').value;
  const capacityValue = document.getElementById('capacity').value;

  if (((roomNumberValue >= capacityValue) && ((roomNumberValue !== '100') && (capacityValue !== '0')) || (roomNumberValue === '100' && capacityValue === '0'))) {
    return true;
  } return false;
}, 'Выберите другое значение', 1, false);

// Убираем подписи об ошибках, когда селект с числом гостей и с числом комнат не в фокусе
const capacityFieldset = document.getElementById('capacity_fieldset');
capacity.onblur = () => capacityFieldset.classList.remove('has-danger');

const roomNumberFieldset = document.getElementById('room_number_fieldset');
roomNumber.onblur = () => roomNumberFieldset.classList.remove('has-danger');

// Убираем подписи об ошибках, когда инпут с названием не в фокусе
const titleInput = document.getElementById('title');
const titleFieldset = document.getElementById('title_fieldset');
titleInput.onblur = () => titleFieldset.classList.remove('has-danger');

// Привязываем значения ползунка к инпуту и убираем сообщение об ошибке, когда оно не нужно
const valuesDivs = [
  document.getElementById('price')
];

range.noUiSlider.on('update', (values, handle) => {
  valuesDivs[handle].value = values[handle];

  if (isFinite(valuesDivs[handle].value) ) {
    const priceFieldset = document.getElementById('price_fieldset');
    priceFieldset.classList.remove('has-danger');
  }
});
