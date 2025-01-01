import { adminAuthHeader, baseURL } from "../../support/data";

describe('Get Books By ID', () => {
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
