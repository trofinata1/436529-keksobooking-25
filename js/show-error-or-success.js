import {showPopup} from './popup.js';
import {unblockSubmitButton, onFormReset} from './form.js';

// Создаем сообщение об ошибке, если данные с сервера не загрузились
export const showDataError = () => {
  const dataError = document.createElement('div');
  dataError.className = 'error-block';
  dataError.textContent = 'Не удалось загрузить данные, попробуйте перезагрузить страницу';
  document.body.append(dataError);
};

export const onSuccessSubmit = () => {
  showPopup('.success');
  unblockSubmitButton();
  onFormReset();
};

export const onErrorSubmit = () => {
  showPopup('.error');
  unblockSubmitButton();
};
