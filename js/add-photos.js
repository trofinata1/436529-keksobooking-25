const addPhotos = (array, blockPhoto, blockPhotos) => {
  array.forEach((photo) => {
    blockPhoto.src = photo;
    const addPhoto = blockPhoto.cloneNode(true);
    blockPhotos.insertAdjacentElement('beforeend', addPhoto);
  });
};

export {addPhotos};
