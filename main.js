const profile = document.querySelector('.profile');
const profilePos = profile.getBoundingClientRect();

window.addEventListener('scroll', () => {
	if (window.scrollY >= profilePos.top + window.innerHeight / 2) {
		profile.style.display = 'block';
		profile.style.animation = 'fadein 0.5s linear';
	}
});

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

submit.addEventListener('click', () => {
	name.style.background = 'white';
	email.style.background = 'white';
	message.style.background = 'white';

	name.placeholder = '  Name*';
	email.placeholder = '  Email*';
	message.placeholder = '  Message*';

	const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	function validateMail(mail) {
		if (mail.match(validation)) {
			return true;
		} else {
			return false;
		}
	}

	function sendEmail() {
		// Ajax call would go here
		message.value = '';
		message.style.background = '#f7f79c';
		message.placeholder = '  Sorry this is just a static website';
	}

	if (
		name.value.length > 0 &&
		validateMail(email.value) &&
		message.value.length > 0
	) {
		sendEmail();
	} else {
		if (name.value.length === 0) {
			name.style.background = '#e66e6e';
			name.placeholder = '  Must be filled out';
		}
		if (validateMail(email.value) === false) {
			email.style.background = '#e66e6e';
			email.value = '';
			email.placeholder = '  Email is Invalid';
		}
		if (message.value.length === 0) {
			message.style.background = '#e66e6e';
			message.placeholder = '  Must be filled out';
		}
	}
});

reset.addEventListener('click', () => {
	name.value = '';
	email.value = '';
	subject.value = '';
	message.value = '';

	name.style.background = 'white';
	email.style.background = 'white';
	message.style.background = 'white';

	name.placeholder = '  Name*';
	email.placeholder = '  Email*';
	message.placeholder = ' Message*';
});

if (window.location.href.includes('127.0.0.1')) {
	// Create devtools
	let devTools = document.createElement('div');
	devTools.classList.add('DevTools');

	// Create button
	let button = document.createElement('button');
	button.innerHTML = 'Fill out email form';
	button.addEventListener('click', () => {
		email.value = 'soggo@gmail.com';
		message.value = 'Test';
		name.value = 'M';
	});
	devTools.appendChild(button);

	// Inject devtools
	document.body.appendChild(devTools);
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

let menuToggle = true;

burger.addEventListener('click', () => {
	if (menuToggle === false) {
		menu.style.animation = 'menufadeout 0.2s linear';
		setTimeout(() => {
			menu.style.display = 'none';
		}, 199);
	} else {
		menu.style.display = 'flex';
		menu.style.animation = 'menufade 0.2s linear';
	}

	menuToggle = !menuToggle;
});
