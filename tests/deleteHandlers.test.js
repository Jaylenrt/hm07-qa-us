// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE /warehouses/:id: status should be 204 for successful deletion', async () => {
    try {
		 await fetch(`${config.API_URL}/api/v1/warehouses/1`, {
			method: 'DELETE',
		});
		expect(response.status).toBe(204)
	} catch (error) {
		console.error(error);
	}
});

test('DELETE /warehouses/:id: warehouse should no longer exist', async () => {
    try {
		 await fetch(`${config.API_URL}/api/v1/warehouses/1`, {
			method: 'DELETE',
		});
		const response = await fetch('${config.API_URL}/api/v1/warehouses/1',{
			method: 'GET'
		}
		);
		expect(response.status).toBe(404)
	} catch (error) {
		console.error(error);
	}
});
