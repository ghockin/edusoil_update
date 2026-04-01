const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});