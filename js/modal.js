import {ERROR_SHOW_TIME} from './preset-const.js';

export const showModalError = (error) => {

  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error-block');
  errorBlock.textContent = error;

  document.body.append(errorBlock);

  setTimeout(() => {

    errorBlock.remove();
  }, ERROR_SHOW_TIME);
  
};
