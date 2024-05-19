// Theme toggler
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Check if there's a saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeBtn.innerHTML = savedTheme === 'dark-mode' ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
  themeBtn.innerHTML = currentTheme === 'dark-mode' ? '<i class="fas fa-sun"></i> Light' : '<i class="fas fa-moon"></i> Dark';
});

// Modal image preview
const modal = document.getElementById('screenshotModal');
const modalImage = document.getElementById('modalImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const screenshotGrid = document.getElementById('screenshotGrid');
const screenshots = screenshotGrid.getElementsByTagName('img');
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = 'flex'; // Changed to 'flex' to ensure modal is centered
  modalImage.src = screenshots[currentIndex].src;
}

function closeModal() {
  modal.style.display = 'none';
}

function prevImage() {
  currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
  modalImage.src = screenshots[currentIndex].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % screenshots.length;
  modalImage.src = screenshots[currentIndex].src;
}

for (let i = 0; i < screenshots.length; i++) {
  screenshots[i].addEventListener('click', () => openModal(i));
}

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', closeModal);

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
