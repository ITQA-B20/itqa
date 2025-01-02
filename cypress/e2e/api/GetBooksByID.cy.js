import { adminAuthHeader, baseURL } from "../../support/data";

describe('Get Books By ID', () => {
    let validId;

    before(() => {
        // Dynamically fetch a valid ID
        cy.request({
            method: 'GET',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
        }).then((response) => {
            if (response.body.length > 0) {
                validId = response.body[0].id; // Use the first available ID
            } else {
                validId = null; // No data available
            }
        });
    });
    
    it('Edge Case: Pass an invalid ID format', () => {
        const invalidId = 'invalid'; // String instead of an integer
        cy.request({
            method: 'GET',
            url: `${baseURL}/api/books/${invalidId}`,
            headers: adminAuthHeader,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400); // Check status code
            expect(response.body).to.eq('');   // Assert empty body
        });
    });

});
