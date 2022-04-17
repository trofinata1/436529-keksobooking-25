import {FORM_ERROR_MESSAGE, GETTING_DATA_URL, SENDING_DATA_URL} from './preset-const.js';

export const getData = (onSuccess, onError) => {
  fetch(GETTING_DATA_URL,

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

export const sendData = (onSuccess, onError, body) => {
  fetch(SENDING_DATA_URL,

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
