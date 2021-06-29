import '../assets/stylesheets/src/application.scss';
//TAB 1
//SWITCH PAGE
// const btnRadio = document.getElementsByClassName('btn-radio');
// console.log(btnRadio);

// function SwitchPage() {
// 	for (let index = 0; index < btnRadio.length; index++) {
// 		const element = btnRadio[index];
// 		element.location.href = './services.html';
// 	}
// }

// btnRadio.addEventListener('click', SwitchPage);

//CREATE AN ALERT
// const disableBtn = document.querySelector('.tabs__button--disable');
// function Alert() {
// 	if (disableBtn.clicked) {
// 		alert('Tienes que elegir una opción');
// 	}
// }

// disableBtn.addEventListener('click', Alert);

//TOGGLE TAB 2 COLLAPSE "MEJORA TU EXPERIENCIA"
const navToggle = document.querySelector('.services__container__title');
const articleToggle = document.getElementsByClassName('container__dropDown__info');

function Toggle() {
	for (let index = 0; index < articleToggle.length; index++) {
		const element = articleToggle[index];
		element.classList.toggle('show');
	}
}

navToggle.addEventListener('click', Toggle);

//TOGGLE DETAILS TAB 2 "Olvidase de la rutina"
const linkToggle = document.querySelector('.link__moreInformation');
const detailsToggle = document.getElementById('container__moreDetailsCard1');

function ToggleMoreInformation() {
	detailsToggle.classList.toggle('show-details');
}

linkToggle.addEventListener('click', ToggleMoreInformation);

//TOGGLE DETAILS TAB2 "Experiencias y programas SPA con agua"

const linkToggleSecondCard = document.getElementById('dropDownCard2');
const detailsToggleSecondCard = document.getElementById('container__moreDetailsCard2');

function ToggleMoreInformationSecondCard() {
	detailsToggleSecondCard.classList.toggle('show-details');
}

linkToggleSecondCard.addEventListener('click', ToggleMoreInformationSecondCard);

// const toggleArrow = document.getElementsByClassName('container__dropDown__image');

// function RotateToggle() {
// 	for (let index = 0; index < toggleArrow.length; index++) {
// 		const element = toggleArrow[index];
// 		element.classList.toggle('rotation');
// 	}
// }

// toggleArrow.addEventListener('click', RotateToggle);
