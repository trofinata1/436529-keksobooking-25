import {disableInterface, enableInterface} from './activation-interface.js';
import {mapLoaded, mainPin} from './libs/leaflet-init.js';
import './validate-form.js';
import {interactionWithForm} from './form.js';
import {getData} from './api.js';
import {onMainPinMoveend} from './utils.js';
import {placeAddsLabels} from './fill-map.js';
import {showDataError} from './show-error-or-success.js';

// Деактивировали интерфейс
disableInterface();

// Инициализировали карту
if (mapLoaded) {
  enableInterface();
}

// Получаем данные с сервера, отрисовываем метки и обрабатываем ошибку загрузки
getData(placeAddsLabels, showDataError);

// Взаимодействуем с главным пином
mainPin.on('moveend', onMainPinMoveend);

// Отслеживание отправки данных
interactionWithForm();
