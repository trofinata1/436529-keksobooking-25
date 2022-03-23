import {form, range, priceFieldset} from './const.js';

// Инициализируем pristine для всей формы
export const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});

// Инициализируем pristine для поля с ценой (это нужно для того, чтобы делать потом reset для ошибки pristine только для этого поля, а не для всех)
export const pristinePrice = new Pristine(priceFieldset, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});

// Инициализируем noUiSlider
noUiSlider.create(range, {

  range: {
    'min': 0,
    'max': 100000
  },

  step: 10000,

  start: [5000],

  orientation: 'horizontal',

  behaviour: 'tap-drag',

});

range.style.width = '220px';
range.style.margin = '10px auto 20px 0';
