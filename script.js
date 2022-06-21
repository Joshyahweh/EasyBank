'use strict';
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  const link = e.target;
  if (link.classList.contains('nav__link-centre')) {
    const siblings = link.closest('.nav').querySelectorAll('.nav__link-centre');
    const logo = link.closest('.nav').querySelector('img');
    const button = link.closest('.nav').querySelector('.nav__button');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    button.style.opacity = this
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
