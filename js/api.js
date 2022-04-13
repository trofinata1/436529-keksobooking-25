export const getData = (onSuccess, onError) => {
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

    .catch(onError);

};

export const sendData = (onSuccess, onError, body) => {
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

        onError('Не удалось отправить форму. Попробуйте ещё раз');

      }
    })

    .catch(() => {

      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
