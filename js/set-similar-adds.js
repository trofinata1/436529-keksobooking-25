import {similarListElement, similarAddTemplate, typesMinPrice} from './const.js';
import {getCorrectKeyForRooms, getCorrectKeyForGuests, addPhotos, removeBlock, setTextContent} from './utils.js';
import {similarAdds} from './get-similar-adds.js';

const setAdd = () => {

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

    // Определяем переменные
    const popupTitle = addElement.querySelector('.popup__title');
    const popupAddress = addElement.querySelector('.popup__text--address');
    const popupPrice = addElement.querySelector('.popup__text--price');
    const popupType = addElement.querySelector('.popup__type');
    const popupCapacity = addElement.querySelector('.popup__text--capacity');
    const popupTime = addElement.querySelector('.popup__text--time');
    const popupFeatures = addElement.querySelector('.popup__features');
    const popupList = popupFeatures.querySelectorAll('.popup__feature');
    const popupDescription = addElement.querySelector('.popup__description');
    const popupPhoto = addElement.querySelector('.popup__photo');
    const popupPhotos = addElement.querySelector('.popup__photos');
    const popupAvatar = addElement.querySelector('.popup__avatar');
    const popupAvatars = addElement.querySelectorAll('.popup__avatar');

    // Удаляем пустые блоки
    const blockObjectsForRemoveBlock = {
      title: {popupTitle, title},
      address: {popupAddress, address},
      price: {popupPrice, price},
      type: {popupType, type},
      rooms: {popupCapacity, rooms},
      guests: {popupCapacity, guests},
      checkin: {popupTime, checkin},
      checkout: {popupTime, checkout},
      features: {popupFeatures, features},
      photos: {popupPhotos, photos},
      description: {popupDescription, description},
      avatar: {popupAvatar, avatar}
    };

    removeBlock(blockObjectsForRemoveBlock);

    // Подставляем данные в текст контент
    const blockObjectsForSetByTextContent = {
      title: {popupTitle, title},
      address: {popupAddress, address},
      type: {popupType, type},
      description: {popupDescription, description}
    };

    setTextContent(blockObjectsForSetByTextContent);

    // Добавляем цену
    popupPrice.textContent = `${price  } ₽/ночь`;

    // Добавляем тип жилища
    popupType.textContent = typesMinPrice[type];

    // Добавляем сообщение с кол-вом комнат и гостей
    popupCapacity.textContent = `${rooms } ${getCorrectKeyForRooms(rooms) } для ${guests } ${getCorrectKeyForGuests(guests) }`;

    // Добавляем сообщение с датами заезда и выезда
    popupTime.textContent = `Заезд после ${checkin }, выезд до ${checkout }`;

    // Добавляем характеристики
    if (features !== '') {

      popupList.forEach((popupListItem) => {
        const isNecessary = features.some(
          (feature) => popupListItem.classList.contains(`popup__feature--${  feature}`),
        );

        if (!isNecessary) {
          popupListItem.remove();
        }

      });
    }

    // Добавляем фото
    if (photos !== '') {

      popupPhotos.removeChild(popupPhoto);
      addPhotos(photos, popupPhoto, popupPhotos);

    }

    // Добавляем аватар
    popupAvatars.forEach(() => {

      popupAvatar.src = avatar;

    });

    // Добавляем все объявление на страницу
    similarListElement.insertBefore(addElement, null);

  });
};

setAdd();
