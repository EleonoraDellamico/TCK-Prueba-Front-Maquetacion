import '../assets/stylesheets/src/application.scss';

const test = () => {
	console.log('test');
};
test();

const navToggle = document.querySelector('.services__btn__dropDown');
const articleToggle = document.querySelectorAll('.container__dropDown__info');

function Toggle() {
	articleToggle.classList.toggle('show');
}

navToggle.addEventListener('click', Toggle);
