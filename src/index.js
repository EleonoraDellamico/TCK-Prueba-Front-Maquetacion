import '../assets/stylesheets/src/application.scss';
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

const linkToggleSecondCard = document.getElementById('dropDonCard2');
const detailsToggleSecondCard = document.getElementById('container__moreDetailsCard2');

function ToggleMoreInformationSecondCard() {
	detailsToggleSecondCard.classList.toggle('show-details');
}

linkToggleSecondCard.addEventListener('click', ToggleMoreInformationSecondCard);
