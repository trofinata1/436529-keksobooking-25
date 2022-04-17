import {disableInterface, enableInterface} from './activation-interface.js';
import {mapLoaded, mainPin} from './libs/leaflet-init.js';
import './validate-form.js';
import {interactionWithForm} from './form.js';
import {getData} from './api.js';
import {onMainPinMoveend} from './map.js';
import {showDataError} from './show-error-or-success.js';
import {GETTING_DATA_URL} from './const.js';
import {fillMapFilteredAdds} from './filters.js';

// Деактивировали интерфейс
disableInterface();

// Инициализировали карту
if (mapLoaded) {
  enableInterface();
}

// Получили данные и разместили метки на карте (с возможностью фильтрации)
getData(GETTING_DATA_URL, fillMapFilteredAdds, showDataError);

// Взаимодействуем с главным пином
mainPin.on('moveend', onMainPinMoveend);

// Отслеживание отправки данных
interactionWithForm();
