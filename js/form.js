import {pristine} from './libs/pristin-init.js';

import {resetButton, form} from './const.js';
import {resetForm, blockSubmitButton, unblockSubmitButton} from './utils.js';
import {sendData} from './api.js';

// Отправляем данные из формы
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
          resetForm();
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

// Очищаем форму при нажатии на кнопку сброса
resetButton.addEventListener('click', resetForm);
