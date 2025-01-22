import { signUp } from './userAuth';

const signUpBtn = document.querySelector('#signup-btn');

signUpBtn.addEventListener('click', async () => {
	let email = document.getElementsByName('email')[0].value;
	let password = document.getElementsByName('password')[0].value;
	let confirmPass = document.getElementsByName('confirm-pass')[0].value;
	if (!checkPasswords(password, confirmPass)) {
		document.querySelector('.pass-match-warn').classList.add('active');
		return;
	}

	// signUp(email, password);
	// return;

	try {
		const response = await signUp(email, password);
		if (response.user?.aud === 'authenticated') {
			window.location.href = 'http://localhost:1234/'; // Navigate to homepage
		} else {
			console.error('Signup failed or user not authenticated');
		}
	} catch (error) {
		console.error('An error occurred during signup:', error);
	}
});

const checkPasswords = function (password, confirmPass) {
	if (!password) return false;
	return password === confirmPass;
};
