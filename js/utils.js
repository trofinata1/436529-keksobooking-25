// Добавляет координаты в поле адреса
export const setAddressInput = (lat,lng) => {
  const addressInput = document.querySelector('#address');

  addressInput.value = `${lat}, ${lng}`;
};

export const isEscapeKey = (evt) => evt.key === 'Escape';
