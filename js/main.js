import './get-ordered-article.js';
import './get-random-article.js';
import './data.js';

import {SIMILAR_ADD_COUNT} from './data.js';
import {getAdd} from './data.js';

// Генерировать итоговый массив с 10-ю объектами
const similarAdd = Array.from({length: SIMILAR_ADD_COUNT}, getAdd);
// eslint-disable-next-line no-console
console.log(similarAdd);
