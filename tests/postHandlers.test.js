// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
}

test('POST /warehouses: status should be 201 for succesful creation', async () => {
    try {
		await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'New Warehouse',
				location: '123 Warehouse Street',
				capacity: 1000
			})
		});
	} catch (error) {
		console.error(error);
	} 
});

test('POST /warehouses: response should contain the newly created warehouses', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'New Warehouse',
				location: '123 Warehouse Street',
				capacity: 1000
			})
		});
		const data = await response.json();
	} catch (error) {
		console.error(error);
	}
});