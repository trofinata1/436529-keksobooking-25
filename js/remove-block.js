const removeBlock = (obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value[key] === '') {
      Object.values(value)[0].remove();
    }
  });
};

export {removeBlock};
