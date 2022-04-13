import {pristine} from './libs/pristin-init.js';
import {resetButton, form, typeField, priceField, typesMinPrice, timeFieldset,} from './const.js';
import {blockSubmitButton, isSuccessSubmit, isErrorSubmit,setValue} from './utils.js';
import {sendData} from './api.js';

function onSubmitButton (onSuccess, onError) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {

      blockSubmitButton();

      sendData(

        () => {
          onSuccess();
        },

        () => {
          onError();
        },

        new FormData(evt.target)
      );
    }

  });
}

// Отправляем данные из формы
export const setUserFormSubmit = () => {
  onSubmitButton(isSuccessSubmit, isErrorSubmit);
};

// Очищаем форму при нажатии на кнопку сброса
export const onClickResetButton = (cb) => {
  resetButton.addEventListener('click', cb);
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
