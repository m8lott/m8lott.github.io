let hamburger = document.querySelector('.burger-menu');
let close = document.querySelector('.close');
let menu = document.querySelector('.header__mobile-menu');
let menuItems = document.querySelectorAll('.mobile-menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  })

close.addEventListener('click', () => {
    menu.classList.remove('active');
  })
  
  for (let item of menuItems) {
    item.addEventListener('click', () => {
      menu.classList.remove('active');
    })
  }
