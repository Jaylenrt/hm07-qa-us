// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}

test('PUT /warehouses/:id: status should be 200 for successful update', async () => {
    try {
		await fetch(`${config.API_URL}/api/v1/warehouses/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'Updated Warehouse Name',
				location: '456 Updated Street',
				capacity: 1200
			}
			)
		});
	} catch (error) {
		console.error(error);
	}
	expect(response.status).toBe(200);
});



test('PUT /warehouses/:id: response should contain the updated warehouse', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'Updated Warehouse Name',
				location: '456 Updated Street',
				capacity: 1200
			}
			)
		});
		const data  = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data.id).toBe(1);
		expect(data.name).toBe('Updated Warehouse Name');
		expect(data.location).toBe('456 Updated Street');
		expect(data.capacity).toBe(1200);
});