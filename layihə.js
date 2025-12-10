const images = document.querySelectorAll('.open-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

images.forEach(image => {
  image.addEventListener('click', function() {
    lightboxImg.src = this.getAttribute('data-img');
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
  if(event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
