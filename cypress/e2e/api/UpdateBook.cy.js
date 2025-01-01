import { adminAuthHeader, baseURL, userAuthHeader } from "../../support/data";

describe('Update Book', () => {
    let validBookId ;
    let bookTitle;
    let bookAuthor;

    // Create a book before tests to ensure a valid ID exists
    before(() => {
        bookTitle = `Book Title ${Date.now()}`;
        bookAuthor = `Author Name ${Date.now()}`;

        cy.request({
            method: 'POST',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
            body: {
                title: bookTitle,
                author: bookAuthor
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            validBookId = response.body.id; // Store valid ID for testing
        });
    });
    
    it('Forbidden Case: Update with insufficient permissions', () => {
        cy.request({
            method: 'PUT',
            url: `${baseURL}/api/books/${validBookId}`,
            headers: userAuthHeader,
            body: {
                id:validBookId,
                title: 'Forbidden Update',
                author: 'No Permissions'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            expect(response.body).to.eq('User is not permitted.');
        });
    });
});
