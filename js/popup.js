import {isEscapeKey} from './const.js';

const onEscapeClick = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    removePopupAndListeners();
  }
};

function removePopupAndListeners() {
  document.removeEventListener('keydown', onEscapeClick);
  window.removeEventListener('click', onWindowClick);
  const popup = document.querySelector('.popup');
  popup.remove();
}

// Удалять попап и обработчики при клике на произвольную область экрана
function onWindowClick() {
  removePopupAndListeners();
}

// Показываем попап

export const showPopup = (result) => {

  const template = document.querySelector(result);
  const message = template.content.cloneNode(true);
  document.body.append(message);

  window.addEventListener('click', onWindowClick);
  document.addEventListener('keydown', onEscapeClick);

};
