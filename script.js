import * as data from '/getData.js';
import { getUserId } from './userStorage.js';

data.fetchData();

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('.tab-content-item');

const userId = getUserId();
console.log('User ID: script.js', userId);

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active');
		});
		tab.classList.add('active');
		target.classList.add('active');
	});
});

if (userId) {
	console.log('Logged-in User ID: script.js', userId);
} else {
	console.error('User ID not found. Please log in again.');
	// window.location.href = '/login'; // Redirect to login if no user ID is found
}

//Parcel

if (module.hot) {
	module.hot.accept();
}
