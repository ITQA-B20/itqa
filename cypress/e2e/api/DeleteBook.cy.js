import { adminAuthHeader, baseURL } from "../../support/data";

describe('Delete Books', () => {
    let validBookId;

    // Create a book before tests to ensure a valid ID exists
    before(() => {
        const bookTitle = `Book Title ${Date.now()}`;
        const bookAuthor = `Author Name ${Date.now()}`;

        cy.request({
            method: 'POST',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
            body: {
                id: validBookId,
                title: bookTitle,
                author: bookAuthor
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            validBookId = response.body.id; // Store valid ID for testing
        });
    });

});
