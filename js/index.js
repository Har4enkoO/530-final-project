let europa = document.querySelector('#europa');
let thailand = document.querySelector('#thailand');
let europaPhotos = document.querySelector('.europa-photos');
let thailandPhotos = document.querySelector('.thailand-photos');
europa.addEventListener('click', showEuropaPhotos);
function showEuropaPhotos() {
  thailandPhotos.style.display = 'none';
  europaPhotos.style.display = 'flex';
};
thailand.addEventListener('click', showThailandPhotos);
function showThailandPhotos() {
  europaPhotos.style.display = 'none';
  thailandPhotos.style.display = 'flex';
};
