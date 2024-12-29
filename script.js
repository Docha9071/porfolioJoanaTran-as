const menuMobileBtn = document.querySelector('.menu-mobile-btn');
const menuLateral = document.querySelector('.menu-lateral');
const closeBtn = document.querySelector('.menu-lateral .close-btn');
const menuButtons = menuLateral.querySelectorAll('button');
const menuLinks = menuLateral.querySelectorAll('a'); 

menuMobileBtn.addEventListener('click', () => {
  menuLateral.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  menuLateral.classList.remove('open');
});

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    menuLateral.classList.remove('open');
  });
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLateral.classList.remove('open');
  });
});

window.addEventListener('click', (event) => {
  if (!menuLateral.contains(event.target) && !menuMobileBtn.contains(event.target)) {
    menuLateral.classList.remove('open');
  }
});
