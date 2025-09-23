// Sombra no cabeçalho ao rolar a página
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

// Menu móvel
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('opacity-100');
  });

  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    mobileMenu.classList.remove('opacity-100');
  });
});

// Carrossel
const carousel = document.getElementById('carousel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;
const total = carousel.children.length;
const visible = 3;

function updateCarousel() {
  carousel.style.transform = `translateX(-${(index * 100) / visible}%)`;
}

next.addEventListener('click', () => {
  if (index < total - visible) {
    index++;
    updateCarousel();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
