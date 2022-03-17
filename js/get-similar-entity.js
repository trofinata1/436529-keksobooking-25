import {createAdds} from './data.js';
import {SIMILAR_ADD_COUNT} from './preset-const.js';
import {removeBlockBySrc, removeBlockByTextContent} from './remove-block.js';
import {addPhotos} from './add-photos.js';

const similarListElement = document.querySelector('.map__canvas');
const similarAddTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdds = Array.from({length: SIMILAR_ADD_COUNT}, createAdds);

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

  // Добавляем тип жилища
  const typesObject = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель'
  };

  const popupType = addElement.querySelector('.popup__type');
  popupType.textContent = typesObject[type];

  // Добавляем сообщение с кол-вом комнат и гостей
  const roomsCountObject = {
    1: 'комната',
    2: 'комнаты',
    3: 'комнаты',
    4: 'комнаты',
    5: 'комнат',
    6: 'комнат',
    7: 'комнат',
    8: 'комнат',
    9: 'комнат',
    10: 'комнат'
  };

  const guestsCountObject = {
    1: 'гостя',
    2: 'гостей',
    3: 'гостей',
    4: 'гостей',
    5: 'гостей',
    6: 'гостей',
    7: 'гостей',
    8: 'гостей',
    9: 'гостей',
    10: 'гостей',
  };

  const popupCapacity = addElement.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${rooms } ${roomsCountObject[rooms] } для ${guests } ${guestsCountObject[guests] }`;

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
  popupPhotos.removeChild(popupPhoto);

  addPhotos(photos, popupPhoto, popupPhotos);

  // Добавляем аватар
  const popupAvatar = addElement.querySelector('.popup__avatar');
  popupAvatar.src = avatar;

  // Удаляем блоки при отсутствии данных
  const blocksArray = [popupTitle, popupAddress, popupPrice, popupCapacity, popupType, popupTime, popupFeatures, popupDescription];
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
