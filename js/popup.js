import {isEscapeKey} from './const.js';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    removePopupAndListeners();
  }
};

function removePopupAndListeners() {
  document.removeEventListener('keydown', onDocumentKeydown);
  window.removeEventListener('click', onDocumentClick);
  const popup = document.querySelector('.popup');
  popup.remove();
}

// Удалять попап и обработчики при клике на произвольную область экрана
function onDocumentClick() {
  removePopupAndListeners();
}

// Показываем попап

export const showPopup = (querySelector) => {

  const template = document.querySelector(querySelector);
  const popup = template.content.cloneNode(true);
  document.body.append(popup);

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);

};
