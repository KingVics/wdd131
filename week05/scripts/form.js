const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    averagerating: 4.5,
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    averagerating: 4.7,
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    averagerating: 3.5,
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    averagerating: 3.9,
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    averagerating: 5.0,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('currentyear');
  currentYearElement.innerHTML = new Date().getFullYear();

  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.innerHTML = 'Last Modified ' + document.lastModified;

  const productSelectElement = document.querySelector('#product');

  products.forEach((item) => {
    const productOption = document.createElement('option');
    productOption.value = item.id;
    productOption.id = item.id;
    productOption.textContent = item.name;
    productSelectElement.appendChild(productOption);
  });
});
