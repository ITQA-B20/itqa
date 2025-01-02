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

        // Valid Case
        it('Valid Case: Update a book with valid parameters', () => {
            const updatedTitle = `Updated Title ${Date.now()}`;
            const updatedAuthor = `Updated Author ${Date.now()}`;
    
            cy.request({
                method: 'PUT',
                url: `${baseURL}/api/books/${validBookId}`,
                headers: adminAuthHeader,
                body: {
                    id: validBookId,
                    title: updatedTitle,
                    author: updatedAuthor
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', validBookId);
                expect(response.body).to.have.property('title', updatedTitle);
                expect(response.body).to.have.property('author', updatedAuthor);
            });
        });

});
