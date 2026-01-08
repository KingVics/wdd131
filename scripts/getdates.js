document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('currentyear');
  currentYearElement.innerHTML = new Date().getFullYear();

  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.innerHTML = 'Last Modified ' + document.lastModified;
});
