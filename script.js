'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// To view All the modals at the same time to avoid single picking - need to use querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

// If need to display attributes for single element
//console.log(btnsOpenModal.textContent);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closedModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// To show for multiple elements.
for (let i = 0; i < btnsOpenModal.length; i++)

    //console.log(btnsOpenModal[i].textContent);
    btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closedModal);

overlay.addEventListener('click', closedModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closedModal();
        console.log(e.key);
    }
})