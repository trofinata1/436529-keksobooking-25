import {disableInterface, enableInterface} from './activation-interface.js';
import './validate-form.js';
import {setUserFormSubmit, onClickResetButton} from './form.js';
import {getData} from './api.js';
import {showDataError, resetForm} from './utils.js';
import {getNewCoords, renderAdds, activateInterfaceByMap} from './map.js';

// Деактивировали интерфейс
disableInterface();

// Инициализировали карту
activateInterfaceByMap(enableInterface());

// Получаем данные с сервера, отрисовываем метки и обрабатываем ошибку загрузки
getData(renderAdds, showDataError);

// Взаимодействуем с метками
getNewCoords();

// Отслеживание отправки данных
setUserFormSubmit();

// Сброс формы на кнопку
onClickResetButton(resetForm);
