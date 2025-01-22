import { supabase } from '/connectClient.js';
// import * as userAuth from '/userAuth.js';
import { getUserId } from './userStorage.js';

console.log(supabase);
const userId = String(getUserId());
console.log(userId, 'getdata.js');
// console.log(userAuth.user, 'user');

export const fetchData = async function () {
	let { data: application_records, error } = await supabase
		.from('application_records')
		.select('*')
		.eq('user_id', userId);

	if (error) {
		console.log(error);
	} else {
		console.log(application_records);
		createTableFromQueryResult(application_records);
	}
	return application_records;
};

//Create a table
function createTableFromQueryResult(queryResult) {
	// Assuming queryResult is an array of objects
	if (queryResult.length === 0) {
		console.log('No Data to display');
		return; // No data to display
	}

	// Get the table container element
	const tableContainer = document.getElementById('my-app');

	// Find the existing table, if any
	const existingTable = tableContainer.querySelector('table');

	// Remove the table if it exists
	if (existingTable) {
		existingTable.remove();
	}

	// Create the table element
	const table = document.createElement('table');

	// Create the table header
	const thead = table.createTHead();
	const headerRow = thead.insertRow();
	for (const key in queryResult[0]) {
		const th = document.createElement('th');
		th.textContent = key;
		headerRow.appendChild(th);
	}

	// Create table rows and cells
	const tbody = table.createTBody();
	for (const rowData of queryResult) {
		const row = tbody.insertRow();
		for (const key in rowData) {
			const cell = row.insertCell();
			cell.textContent = rowData[key];
		}
	}

	// Add the table to the container
	tableContainer.appendChild(table);
}
