const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Abidjan Ivory Coast',
    location: 'Cocody Abidjan, Ivory Coast',
    dedicated: '2025, May, 25',
    area: 17362,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/bal80d1i45vz2eluh67xvxs09ep6p2m1lfv69t0q/full/3840%2C/0/default',
  },
  {
    templeName: 'Accra Ghana',
    location: 'Accra, Ghana',
    dedicated: '2004, January, 11',
    area: 17500,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/fac2f821c9895e1acd1325cbdb3fa447c4bb4e19/full/1920%2C/0/default',
  },
  {
    templeName: 'Belém Brazil',
    location: 'Belém, Brazil',
    dedicated: '2022, November, 20',
    area: 28675,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/1920%2C/0/default',
  },
];

let templeList = temples; // Initialize with all temples

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

  const navigationLinks = document.querySelectorAll('#navigation a');
  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (link.textContent === 'Home') {
        templeList = temples;
      } else if (link.textContent === 'Old') {
        templeList = temples.filter((temple) => {
          const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
          return dedicatedYear < 1900;
        });
      } else if (link.textContent === 'New') {
        templeList = temples.filter((temple) => {
          const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
          return dedicatedYear > 2000;
        });
      } else if (link.textContent === 'Large') {
        templeList = temples.filter((temple) => temple.area > 90000);
      } else if (link.textContent === 'Small') {
        templeList = temples.filter((temple) => temple.area < 10000);
      }

      displayTemples(templeList);
    });
  });

  function displayTemples(templesToDisplay) {
    const templeContainer = document.getElementById('temple-container');
    templeContainer.innerHTML = '';

    templesToDisplay.forEach((temple) => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';

      templeCard.innerHTML = `
      <div class="temple-content">
        <h2 class="temple-name">${temple.templeName}</h2>
        <p class="temple-location"><strong>Location:</strong> ${temple.location}</p>
        <p class="temple-dedicated"><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p class="temple-area"><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName} Image" 
           class="temple-image" 
           width="400" 
           height="250" />
    `;

      templeContainer.appendChild(templeCard);
    });
  }

  displayTemples(templeList);
});
