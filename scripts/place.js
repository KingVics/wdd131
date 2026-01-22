document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('currentyear');
  currentYearElement.innerHTML = new Date().getFullYear();

  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.innerHTML = 'Last Modified ' + document.lastModified;

  const calculateWindChill = (tempC, windKmh) =>
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16);

  const tempElement = document.getElementById('temperature');
  const speedElement = document.getElementById('windSpeed');
  const windChillElement = document.getElementById('windChill');
  const temperature = 50; // Example temperature value
  const windSpeed = 3; // Example wind speed value
  const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);

  windChillElement.textContent = windChill;
});
