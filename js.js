// swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});

const hideButton = document.querySelector('.btn');

const hiddenSlides = document.querySelector('.brend-list');

const hideIcon = document.querySelector('.more');

let isHidden = true;

let showList = () => {
  console.log(hiddenSlides);
  hiddenSlides.classList.add('visible');
  isHidden = false;
  hideButton.innerHTML = 'Скрыть';
  hideIcon.style = 'transform: rotate(180deg)'
}

let hideList = () => {
  hiddenSlides.classList.remove('visible');
  isHidden = true;
  hideButton.innerHTML = 'Показать все';
  hideIcon.style = 'transform: rotate(0deg)'
}

hideButton.addEventListener('click', () => {
  if (isHidden) {
      showList();
  } else {
      hideList();
  }
})
