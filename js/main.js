import {disableInterface, enableInterface} from './activation-interface.js';
import {mapLoaded, mainPin} from './libs/leaflet-init.js';
import './validate-form.js';
import {watchFormDataSubmit} from './form.js';
import {getData} from './api.js';
import {markerMoveend} from './utils.js';
import {renderAdds} from './fill-map.js';
import {showDataError} from './show-error.js';

// Деактивировали интерфейс
disableInterface();

// Инициализировали карту
if (mapLoaded) {
  enableInterface();
}

// Получаем данные с сервера, отрисовываем метки и обрабатываем ошибку загрузки
getData(renderAdds, showDataError);

// Взаимодействуем с главным пином
mainPin.on('moveend', markerMoveend);

// Отслеживание отправки данных
watchFormDataSubmit();
