import {adminAuthHeader, userAuthHeader, baseURL} from "../../support/data";

describe('API_Get All Books', () => {
    const authHeaders = [
        {role: 'admin', header: adminAuthHeader},
        {role: 'user', header: userAuthHeader}
    ];

    authHeaders.forEach(({role, header}) => {
        it(`Valid Case: Get All Books as ${role}`, () => {
            cy.request({
                method: 'GET',
                url: `${baseURL}/api/books`,
                headers: header,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                if (response.body.length > 0) {
                    response.body.forEach((book) => {
                        expect(book).to.have.property('id');
                        expect(book).to.have.property('title');
                        expect(book).to.have.property('author');
                    });
                }
            });
        });

        it(`Edge Case: When no books exist as ${role}`, () => {
            cy.request({
                method: 'GET',
                url: `${baseURL}/api/books`,
                headers: header,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                if (response.body.length === 0) {
                    expect(response.body.length).to.eq(0);
                }
            });
        });
    });
});