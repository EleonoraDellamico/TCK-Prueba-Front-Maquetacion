import '../assets/stylesheets/src/application.scss';

// START UTILS

function httpGet(theUrl) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', theUrl, false); // false for synchronous request
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

// END UTILS

// START CREATE PAGE
window.onload = function loadpage() {
	createTabs('../assets/copys/tabs/tabs.json');
	createHotelPage('../assets/copys/tab1/index.json');
};

// START CREATE PAGE

// START HEADER
function createTabs(url) {
	const arrTabs = JSON.parse(httpGet(url)).header;

	let main = document.getElementById('section__tabs');
	let header = document.createElement('div');
	header.setAttribute('id', 'tabs');
	let tabs_container = document.createElement('div');
	tabs_container.setAttribute('id', 'tabs__container__button');

	main.append(header);
	header.append(tabs_container);

	//Los links son provisionales hasta que se cargue sobre la misma página
	arrTabs.forEach((element, index) => {
		let tab = document.createElement('button');
		if (index === 0) {
			tab.setAttribute('class', 'tabs__button--active');
			tab.setAttribute('id', element);
			tab.appendChild(document.createTextNode(element));
		} else {
			tab.setAttribute('class', 'tabs__button--disable');
			tab.setAttribute('id', element);
			let a = document.createElement('a');
			a.setAttribute('href', './services.html');
			a.appendChild(document.createTextNode(element));

			tab.append(a);
		}

		tabs_container.append(tab);
	});
}

// END HEADER
function createHotelPage(url) {
	const hotel = JSON.parse(httpGet(url));
	const title = hotel.title;
	const arrItems = hotel.items;
	/**
 * <div class="main__container__title">
                <h2 class="main__title__hotel">HOTEL </h2><span>Mieres del Camín Apartamentos
                    <img class="main__title__hotel__rating" src="./assets/images/Valoración.png"
                        alt="Valoración"></span>
            </div>
 */
	let hotel__container = document.getElementById('section__hotel');

	let hotel_title_container = document.createElement('div');
	hotel_title_container.setAttribute('id', 'main__container__title');

	let hotel_title = document.createElement('h2');
	hotel_title.setAttribute('id', 'main__title__hotel');
	hotel_title.appendChild(document.createTextNode(title));

	let hotel_score = document.createElement('img');
	hotel_score.setAttribute('id', 'main__title__hotel__rating');
	hotel_score.setAttribute('src', './assets/images/Valoración.png');
	hotel_score.setAttribute('alt', 'Valoración');

	hotel__container.append(hotel_title_container);
	hotel_title_container.append(hotel_title);
	hotel_title.append(hotel_score);

	/**
 * <!--CARD 1 DETAILS HOTEL-->
                <div class="card__container" id="card__one">
                    <div class="card__info">
                        <h3 class="card__title">Solo Alojamiento</h3>
                        <hr />
                        <ul>
                            <li class="card__list"> Sin régimen</li>
                            <li class="card__list">Botella de agua de bienvenida</li>
                        </ul>
                    </div>
                    <form class="card__form">
                        <input type="radio" id="option1" name="option" value="choose1">
                        <label for="option1" class="card__label__button--active"> Elegir régimen</label>    
                    </form>
                </div>
 */
	let hotel_container_card = document.createElement('div');
	hotel_container_card.setAttribute('id', 'container__general__card');
	hotel__container.append(hotel_container_card);

	arrItems.forEach((item, index) => {
		let button = item.button;
		console.log(button);

		let hotel_items_container = document.createElement('div');
		hotel_items_container.setAttribute('class', 'card__container');
		hotel_items_container.setAttribute('class', 'card__' + index);

		let hotel_card__info = document.createElement('div');
		hotel_card__info.setAttribute('class', 'card__info');
		hotel_items_container.append(hotel_card__info);

		let hotel_item_title = document.createElement('h3');
		hotel_item_title.appendChild(document.createTextNode(item.header));

		let hr = document.createElement('hr');

		let ul = document.createElement('ul');
		item.list_item.forEach((element) => {
			let li = document.createElement('li');
			li.setAttribute('class', 'card__list');
			li.appendChild(document.createTextNode(element));
			ul.append(li);
		});

		hotel_container_card.append(hotel_items_container);
		hotel_items_container.append(hotel_card__info);
		hotel_card__info.append(hotel_item_title);
		hotel_card__info.append(hr);
		hotel_card__info.append(ul);

		let form = document.createElement('form');
		form.setAttribute('class', 'card__form');

		let input = document.createElement('input');
		input.setAttribute('type', 'radio');
		input.setAttribute('id', 'options_' + button.value);
		input.setAttribute('name', 'options_' + button.value);
		input.setAttribute('value', 'options_' + button.value);

		let label = document.createElement('label');
		label.setAttribute('class', 'card__label__button--active');
		label.setAttribute('for', 'options_' + button.value);
		label.appendChild(document.createTextNode(button.tittle));

		hotel_items_container.append(form);
		form.append(input);
		form.append(label);
	});

	console.log(arrItems);
}

// START HOTEL

// END HOTEL

/*
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
*/
