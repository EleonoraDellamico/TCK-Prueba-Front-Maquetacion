import '../assets/stylesheets/src/application.scss';

const navToggle = document.querySelector('.services__container__title');
const articleToggle = document.getElementsByClassName('container__dropDown__info');

function Toggle() {
	for (let index = 0; index < articleToggle.length; index++) {
		const element = articleToggle[index];
		element.classList.toggle('show');
	}
}

navToggle.addEventListener('click', Toggle);

//TOGGLE DETAILS
const linkToggle = document.querySelector('.link__moreInformation');
const detailsToggle = document.getElementById('container__moreDetails');

function ToggleMoreInformation() {
	detailsToggle.classList.toggle('show-details');
}

linkToggle.addEventListener('click', ToggleMoreInformation);
