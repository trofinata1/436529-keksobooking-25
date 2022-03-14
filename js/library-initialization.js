// Инициализируем pristine
const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text'
});

// Инициализируем noUiSlider
const range = document.getElementById('range');

noUiSlider.create(range, {

  range: {
    'min': 0,
    'max': 100000
  },

  step: 10000,

  start: [50000],

  orientation: 'horizontal',

  behaviour: 'tap-drag',

});

range.style.width = '220px';
range.style.margin = '10px auto 20px 0';

export {form, pristine, range};
