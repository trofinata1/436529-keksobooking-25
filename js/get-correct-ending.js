import {roomsCountObject, guestsCountObject} from './const.js';

export const getCorrectKeyForRooms = (count) => {
  if (count === 1) {
    return roomsCountObject.alone;
  } else if (count > 1 && count <= 4) {
    return roomsCountObject.some;
  } return roomsCountObject.many;
};

export const getCorrectKeyForGuests = (count) => {
  if (count === 1) {
    return guestsCountObject.alone;
  } return guestsCountObject.many;
};


