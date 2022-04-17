import {range} from '../dom-nodes.js';

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
range.style.height = '5px';
range.style.margin = '10px auto 20px 0';
