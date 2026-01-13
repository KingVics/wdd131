document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('currentyear');
  currentYearElement.innerHTML = new Date().getFullYear();

  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.innerHTML = 'Last Modified ' + document.lastModified;

  const headingElement = document.querySelector('#heading');
  headingElement.textContent = 'Home';

  const menuElement = document.querySelector('#menu');

  const navigation = document.querySelector('#header-navigation');

  menuElement.addEventListener('click', (e) => {
    e.preventDefault();
    navigation.classList.toggle('show');
    menuElement.classList.toggle('show');
  });
});
