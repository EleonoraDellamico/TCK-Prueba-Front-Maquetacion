import '../assets/stylesheets/src/application.scss';

const test = () => {
	console.log('test');
};
test();

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
const detailsToggle = document.getElementById('section__details__dropDown');

function ToggleMoreInformation() {
	detailsToggle.classList.toggle('display');
	console.log('hice click');
}

linkToggle.addEventListener('click', ToggleMoreInformation);
