import {adminAuthHeader, userAuthHeader, baseURL} from "../../support/data";

describe('API_Create Books', () => {
    let bookTitle;
    let bookAuthor;

    const authHeaders = [
        {role: 'admin', header: adminAuthHeader},
        {role: 'user', header: userAuthHeader}
    ];

    before(() => {
        bookTitle = `Book Title ${Date.now()}`;
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
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
        });
    });

    authHeaders.forEach(({role, header}) => {
        it(`Valid Case: Create a book with mandatory parameters as ${role}`, () => {
            const newTitle = `New Book ${Date.now()}`;
            cy.request({
                method: 'POST',
                url: `${baseURL}/api/books`,
                headers: header,
                body: {
                    title: newTitle,
                    author: 'Author Test'
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');
                expect(response.body).to.have.property('title', newTitle);
                expect(response.body).to.have.property('author', 'Author Test');
            });
        });

        it(`Invalid Case: Send an empty request body as ${role}`, () => {
            cy.request({
                method: 'POST',
                url: `${baseURL}/api/books`,
                headers: header,
                body: {},
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body).to.eq('Mandatory parameters should not be null');
            });
        });

        it(`Duplicate ID Case: Attempt to create a book with existing title as ${role}`, () => {
            cy.request({
                method: 'POST',
                url: `${baseURL}/api/books`,
                headers: header,
                body: {
                    title: bookTitle,
                    author: bookAuthor
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(208);
                expect(response.body).to.eq('Book Already Exists');
            });
        });

        it(`Invalid Case: Missing mandatory fields as ${role}`, () => {
            const uniqueTitle = `Unique Title ${Date.now()}`;
            cy.request({
                method: 'POST',
                url: `${baseURL}/api/books`,
                headers: header,
                body: {
                    title: uniqueTitle
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body).to.eq('Invalid Input Parameters.');
            });
        });
    });

    // Authorization case remains outside the forEach as it tests without auth headers
    it('Authorization Case: Call the API without authorization headers', () => {
        cy.request({
            method: 'POST',
            url: `${baseURL}/api/books`,
            body: {
                title: 'Unauthorized Book',
                author: 'No Auth'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });
});