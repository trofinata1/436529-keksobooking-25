import {FORM_ERROR_MESSAGE} from './const.js';

export const getData = (url, onSuccess, onError) => {
  fetch(url,

    {
      method: 'GET',
      credentials: 'same-origin',
    },

  )
    .then((response) => response.json())

    .then((data) =>  {

      onSuccess(data);

    })

    .catch((error) => {

      onError(error);
    });

};

export const sendData = (url, onSuccess, onError, body) => {
  fetch(url,

    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {

      if (response.ok) {

        onSuccess();

      } else {

        onError(FORM_ERROR_MESSAGE);

      }
    })

    .catch(() => {

      onError(FORM_ERROR_MESSAGE);
    });
};
