export const setTextContent = (obj) => {
  Object.entries(obj).forEach(([, value]) => {
    Object.values(value)[0].textContent = Object.values(value)[1];
  });
};
