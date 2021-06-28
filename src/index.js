import '../assets/stylesheets/src/application.scss';
//TAB1
// const btn = document.querySelectorAll('.btn-radio');

// btn.onclick = function() {
// 	const selections = document.querySelectorAll('input[name="option"]');
// 	let userSelection;
// 	for (const selection of selections) {
// 		if (selection.checked) {
// 			window.location.replace('./services.html');
// 			break;
// 		}
// 	}
// };

//TOGGLE TAB 2 COLLAPSE "MEJORA TU EXPERIENCIA"
const navToggle = document.querySelector('.image-drop-down');
const articleToggle = document.getElementsByClassName('container__dropDown__info');
function rotate() {
	if (navToggle === clicked) {
		navToggle.style.msTransform = 'rotate(360deg)';
	}
}
function Toggle() {
	for (let index = 0; index < articleToggle.length; index++) {
		const element = articleToggle[index];
		element.classList.toggle('show');
	}
}

navToggle.addEventListener('click', Toggle);
rotate();
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
