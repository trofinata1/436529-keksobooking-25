import {getAdds} from './data.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';
import {removeBlockBySrc, removeBlockByTextContent} from './remove-block.js';

const similarListElement = document.querySelector('.map__canvas');
const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdds = Array.from({length: SIMILAR_ADD_COUNT}, getAdds);

similarAdds.forEach(({author, offer}) => {
  // Деструктурируем
  const [
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    photos,
    description,
    avatar
  ] = [
    offer.title,
    offer.address,
    offer.price,
    offer.type,
    offer.rooms,
    offer.guests,
    offer.checkin,
    offer.checkout,
    offer.features,
    offer.photos,
    offer.description,
    author.avatar
  ];

  // Копируем шаблон
  const addElement = similarAddTemplate.cloneNode(true);

  // Добавляем заголовок
  const popupTitle = addElement.querySelector('.popup__title');
  popupTitle.textContent = title;

  // Добавляем адрес
  const popupAddress = addElement.querySelector('.popup__text--address');
  popupAddress.textContent = address;

  // Добавляем цену
  const popupPrice = addElement.querySelector('.popup__text--price');
  popupPrice.textContent = `${price  } ₽/ночь`;

  // Добавляем/удаляем тип
  const popupType = addElement.querySelector('.popup__type');
  switch (type) {
    case 'flat':
      popupType.textContent = 'Квартира';
      break;
    case 'bungalow':
      popupType.textContent = 'Бунгало';
      break;
    case 'house':
      popupType.textContent = 'Дом';
      break;
    case 'palace':
      popupType.textContent = 'Дворец';
      break;
    case 'hotel':
      popupType.textContent = 'Отель';
      break;
    default :
      popupType.remove();
  }

  // Добавляем сообщение с кол-вом комнат и гостей
  let writeRoom = 'комнат';
  let writeGuest = 'гостей';

  switch (rooms) {
    case 1:
      writeRoom = 'комната';
      break;
    case 2:
    case 3:
    case 4:
      writeRoom = 'комнаты';
  }

  switch (guests) {
    case 1:
      writeGuest = 'гостя';
      break;
  }

  const popupCapacity = addElement.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${rooms } ${writeRoom} для ${guests } ${writeGuest}`;

  // Добавляем сообщение с датами заезда и выезда
  const popupTime = addElement.querySelector('.popup__text--time');
  popupTime.textContent = `Заезд после ${checkin }, выезд до ${checkout }`;

  // Добавляем характеристики
  const popupFeatures = addElement.querySelector('.popup__features');
  const popupList = popupFeatures.querySelectorAll('.popup__feature');

  popupList.forEach((popupListItem) => {
    const isNecessary = features.some(
      (feature) => popupListItem.classList.contains(`popup__feature--${  feature}`),
    );

    if (!isNecessary) {
      popupListItem.remove();
    }
  });

  // Добавляем описание
  const popupDescription = addElement.querySelector('.popup__description');
  popupDescription.textContent = description;

  // Добавляем/удаляем фото
  const popupPhoto = addElement.querySelector('.popup__photo');
  const popupPhotos = addElement.querySelector('.popup__photos');
  const photoArray = photos;

  photoArray.forEach((photo) => {
    popupPhoto.src = photo;
    const addPhoto = popupPhoto.cloneNode(true);
    popupPhotos.insertAdjacentElement('beforeend', addPhoto);
  });

  const photoCollection = addElement.querySelectorAll('.popup__photo');
  photoCollection[photoCollection.length - 1].remove();

  // Добавляем аватар
  const popupAvatar = addElement.querySelector('.popup__avatar');
  popupAvatar.src = avatar;
  removeBlockBySrc(popupAvatar);

  // Удаляем блоки при отсутствии данных
  const blocksArray = [popupTitle, popupAddress, popupPrice, popupType, popupCapacity, popupTime, popupFeatures, popupDescription];
  blocksArray.forEach ((blocksArrayElement) => {
    removeBlockByTextContent(blocksArrayElement);
  });

  const blocksWithSrcArray = [popupPhoto, popupAvatar];
  blocksWithSrcArray.forEach ((blocksWithSrcArrayElement) => {
    removeBlockBySrc(blocksWithSrcArrayElement);
  });

  // Добавляем все объявление на страницу
  similarListElement.insertBefore(addElement, null);
});
