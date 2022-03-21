const addPhotos = (array, blockPhoto, blockPhotos) => {
  blockPhotos.innerHTML = '';

  array.forEach((photo) => {
    blockPhoto.src = photo;
    const addPhoto = blockPhoto.cloneNode(true);
    blockPhotos.insertAdjacentElement('beforeend', addPhoto);
  });
};

export {addPhotos};
