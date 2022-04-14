// Создаем сообщение об ошибке, если данные с сервера не загрузились
export const showDataError = () => {
  const dataError = document.createElement('div');
  dataError.className = 'error-block';
  dataError.innerHTML = 'Не удалось загрузить данные, попробуйте перезагрузить страницу';
  document.body.append(dataError);
};
