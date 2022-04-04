const navButtons = document.querySelectorAll('.menu-link');
const cards = document.querySelectorAll('.card');
const contacts = document.querySelector('.contacts');
navButtons.forEach((button) => button.addEventListener('click', changeShadow));

function changeShadow(event) {
    let card = document.querySelector(`.${event.target.dataset.card}`);
    cards.forEach(item => item.classList.remove('card-active'));
    contacts.classList.remove('card-active');
    card.classList.add('card-active');
}