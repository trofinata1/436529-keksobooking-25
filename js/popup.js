const isEscapeKey = (evt) => evt.key === 'Escape';

// Удалять попап по клику на кнопку
export function closePopupByButton (errorButton) {

  errorButton.addEventListener('click', () => {
    const error = document.querySelector('.error');
    error.remove();
  });
}

// Удалять попап по нажатию на escape
export function closePopupByEscape (popup) {

  document.addEventListener('keydown', (evt) => {

    if (isEscapeKey(evt)) {
      evt.preventDefault();
      popup.remove();
    }
  });
}

// Удалять попап при клике на произвольную область экрана
export function closePopupByClick (popup) {
  window.addEventListener('click', () => {
    popup.remove();
  });
}

// Показываем попап при ошибке
let message;

export const showErrorPopup = () => {

  message = document.querySelector('#error').content.cloneNode(true);
  document.body.append(message);

  const errorButton = document.querySelector('.error__button');
  const error = document.querySelector('.error');

  closePopupByButton(errorButton);
  closePopupByEscape(error);
  closePopupByClick(error);
};

// Показываем попап при успешной отправке
export const showSuccessPopup = () => {

  message = document.querySelector('#success').content.cloneNode(true);
  document.body.append(message);

  const success = document.querySelector('.success');

  closePopupByEscape(success);
  closePopupByClick(success);
};
