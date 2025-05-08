'use strict';

const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnshowModal = document.querySelectorAll('.show-modal');
console.log(btnshowModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', openModal);
  overlay.addEventListener('click', openModal);

  btnClosemodal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape') {
      if (!modal.classList.contains('hidden')) closeModal();
    }
  });
}
