// eslint-disable-next-line no-undef
const config = require('../config');

test('GET /warehouses: status should be 200', async () => {
    try {
        // Make request
          await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
        });
        // Check status code
    } catch (error) {
        console.error(error);
    }
    expect(response.status).toBe(200)
});

test('GET /warehouses: response should contain a non-empty array of warehouses', async () => {
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
        });
        const data = await response.json();
        // Check that the response is an array and not empty
    } catch (error) {
        console.error(error);
    }
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
});
