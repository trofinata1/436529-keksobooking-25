function getWholeNumber(startNumber, endNumber) {
  return (startNumber < 0 || endNumber < 0) ? false :
    (startNumber === endNumber) ? 0 :
      (startNumber > endNumber) ?
        (minWholeNumber = Math.floor(endNumber),
          maxWholeNumber = Math.ceil(startNumber),
          randomNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber,
          randomNumber) :
        (minWholeNumber = Math.ceil(startNumber),
          maxWholeNumber = Math.floor(endNumber),
          randomNumber = Math.floor(Math.random() * (maxWholeNumber - minWholeNumber + 1)) + minWholeNumber,
          randomNumber);
}
