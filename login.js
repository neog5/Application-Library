import { login } from './userAuth.js';

const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', async () => {
	const email = document.getElementsByName('email')[0].value;
	const password = document.getElementsByName('password')[0].value;

	if (!email || !password) {
		console.error('Email and password are required');
		return;
	}

	try {
		const response = await login(email, password);
		if (response?.user?.aud === 'authenticated') {
			console.log('User authenticated:', response.user);
			localStorage.setItem('userId', response.user.id); // Save user ID in local storage
			window.location.href = '/homepage'; // Redirect to homepage
		} else {
			console.error('Authentication failed. Please check your credentials.');
		}
	} catch (error) {
		console.error('An error occurred during login:', error);
	}
});
