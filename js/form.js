import {pristine} from './libs/pristin-init.js';
import {form, typeField, priceField, timeFieldset, range, timeFields} from './dom-nodes.js';
import {sendData} from './api.js';
import {resetPin} from './map.js';
import {onSuccessSubmit, onErrorSubmit,} from './show-error-or-success.js';
import {SENDING_DATA_URL} from './const.js';
import {mapFilter} from './filters.js';

const TYPES_NIN_PRICE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const submitButton = document.querySelector('.ad-form__submit');
const photoField = document.querySelector('.ad-form__photo');
const fileAvatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const filePhotoChooser = document.querySelector('.ad-form__upload input[type=file]');

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
  mapFilter.reset();

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

// Загружаем аватар
export const loadAvatar = () => {
  fileAvatarChooser.addEventListener('change', () => {

    const file = fileAvatarChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  });
};

// Загружаем фото
export const loadPhoto = () => {
  filePhotoChooser.addEventListener('change', () => {

    const file = filePhotoChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const photo = document.createElement('img');
      photoField.appendChild(photo);

      const photoPreview = document.querySelector('.ad-form__photo img');
      photoPreview.classList.add('photo');

      photoPreview.src = URL.createObjectURL(file);
    }
  });
};
