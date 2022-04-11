import {form, mapFilter, allFormAndFilterChildren} from './const.js';

// Инактивация элементов
export const disableInterface = () => {

  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  allFormAndFilterChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
};

disableInterface();

// Активация элементов
export const enableInterface = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  allFormAndFilterChildren.forEach((child) => {
    child.removeAttribute('disabled', 'disabled');
  });
};
