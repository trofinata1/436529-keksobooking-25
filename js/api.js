import {FORM_ERROR_MESSAGE, GETTING_DATA_ADDRESS, SENDING_DATA_ADDRESS} from './preset-const.js';

export const getData = (onSuccess, onError) => {
  fetch(GETTING_DATA_ADDRESS,

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
  fetch(SENDING_DATA_ADDRESS,

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
