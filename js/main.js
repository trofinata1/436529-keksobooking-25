import './validate-form.js';

import {getData} from './api.js';
import {renderAdds} from './libs/leaflet-init.js';
import {setUserFormSubmit} from './form.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';


getData((adds) => {
  renderAdds(adds.slice(0, SIMILAR_ADD_COUNT));
});

setUserFormSubmit(showSuccessPopup, showErrorPopup);
