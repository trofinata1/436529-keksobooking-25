import {createAdds} from './data.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';

const similarAdds = Array.from({length: SIMILAR_ADD_COUNT}, createAdds);

export {similarAdds};
