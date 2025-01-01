import { adminAuthHeader, baseURL } from "../../support/data";

describe('Create Books', () => {
    let bookTitle;
    let bookAuthor;

    // Use `before` hook to create a book before running tests
    before(() => {
        bookTitle = `Book Title ${Date.now()}`; // Generate unique title
        bookAuthor = 'Author Name';

        cy.request({
            method: 'POST',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
            body: {
                title: bookTitle,
                author: bookAuthor
            }
        }).then((response) => {
            expect(response.status).to.eq(201); // Expect successful creation
            expect(response.body).to.have.property('id');
        });
    });
    // Duplicate ID Case
    it('Duplicate ID Case: Attempt to create a book with an existing ID', () => {
        cy.request({
            method: 'POST',
            url: `${baseURL}/api/books`,
            headers: adminAuthHeader,
            body: {
                title: bookTitle,
                author: bookAuthor
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(208); // Expect duplicate error
            expect(response.body).to.eq('Book Already Exists'); // Validate string response
        });
    });
});
