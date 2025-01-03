import {adminAuthHeader, baseURL, userAuthHeader} from "../../support/data";

describe('API_Get Books By ID', () => {
    let validId;

    const authHeaders = [
        {role: 'admin', header: adminAuthHeader},
        {role: 'user', header: userAuthHeader}
    ];

    before(() => {
        cy.request({
            method: 'GET',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
        }).then((response) => {
            if (response.body.length > 0) {
                validId = response.body[0].id;
            } else {
                validId = null;
            }
        });
    });

    authHeaders.forEach(({role, header}) => {
        it(`Invalid Case: Pass a non-existent ID as ${role}`, () => {
            const nonExistentId = 9999;
            cy.request({
                method: 'GET',
                url: `${baseURL}/api/books/${nonExistentId}`,
                headers: header,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.eq('Book not found');
            });
        });

        it(`Valid Case: Get book details for a valid ID as ${role}`, () => {
            if (!validId) {
                cy.log('No valid ID available for testing.');
                return;
            }
            cy.request({
                method: 'GET',
                url: `${baseURL}/api/books/${validId}`,
                headers: header,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', validId);
                expect(response.body).to.have.property('title');
                expect(response.body).to.have.property('author');
            });
        });

        it(`Edge Case: Pass an invalid ID format as ${role}`, () => {
            const invalidId = 'invalid';
            cy.request({
                method: 'GET',
                url: `${baseURL}/api/books/${invalidId}`,
                headers: header,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            });
        });
    });
});