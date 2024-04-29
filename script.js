// Diaporama de la galerie d'images
const gallery = document.querySelector('.gallery');
let currentImageIndex = 0;

function showImage(index) {
  const images = gallery.querySelectorAll('img');
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % gallery.querySelectorAll('img').length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + gallery.querySelectorAll('img').length) % gallery.querySelectorAll('img').length;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);

setInterval(nextImage, 5000);

// Validation du formulaire de contact
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateForm() {
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Veuillez remplir tous les champs.');
    return false;
  }
  return true;
}

form.addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});
