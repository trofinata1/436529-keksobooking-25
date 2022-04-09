import {showDataError} from './utils.js';

export const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data',

    {
      method: 'GET',
      credentials: 'same-origin',
    },

  )
    .then((response) => response.json())

    .then((adds) =>  {

      onSuccess(adds);

    })

    .catch(() => {

      showDataError();

    });
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    ' https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {

      if (response.ok) {

        onSuccess();

      } else {

        onFail('Не удалось отправить форму. Попробуйте ещё раз');

      }
    })

    .catch(() => {

      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
