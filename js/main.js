import './validate-form.js';

import {loadMap} from './libs/leaflet-init.js';
import {setUserFormSubmit} from './form.js';
import {showSuccessPopup, showErrorPopup} from './popup.js';

loadMap();

setUserFormSubmit(showSuccessPopup, showErrorPopup);
