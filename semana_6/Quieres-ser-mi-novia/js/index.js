'use strict';

const documentReady = () => {
  const heroTitle = document.getElementById('heroTitle');
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  const getPartner = () => {
    alert(' Quieres ser mi novia ');
    alert('Dame una esperanza');
    alert(' boda mañana');
    location.href = 'https://www.youtube.com/watch?v=3mXACZQn9_Y';
  };

  const brokenHeart = () => {
    noButton.style.top = Math.random() * innerHeight + 'px';
    noButton.style.left = Math.random() * innerWidth + 'px';
  };

  const partner = prompt('Dime tu nombre');
  heroTitle.innerText += ` ${partner || 'Anonimo'}? ♥`;

  yesButton.addEventListener('click', getPartner);
  noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);