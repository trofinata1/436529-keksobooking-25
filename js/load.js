import {form, range} from './library-initialization.js';

// Пока так, чтобы проверить, работает ли снятие неактивности при загрузке. Потом это переделать под загрузку карты
const scriptLeaflet = document.createElement('script');
scriptLeaflet.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
document.body.append(scriptLeaflet);


const mapFilter = document.querySelector('.map__filters');

const formChildren = form.children;
const formChildrenArray = Array.from(formChildren);
const mapFilterChildren = mapFilter.children;
const mapFilterChildrenArray = Array.from(mapFilterChildren);

const childrenArray = [formChildrenArray, mapFilterChildrenArray];

// При загрузке страницы фильтр и форма неактивны
document.addEventListener('DOMContentLoaded', () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  range.setAttribute('disabled', 'disabled');

  childrenArray.forEach((children) => {
    children.forEach((child) => {
      child.setAttribute('disabled', 'disabled');
    });
  });
});

// При загрузке карты фильтр и форма активны
scriptLeaflet.onload = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');

  range.removeAttribute('disabled');

  childrenArray.forEach((children) => {
    children.forEach((child) => {
      child.removeAttribute('disabled');
    });
  });
};
