// export const createUserAddBook = (username, password) =>
//     cy.request({
//         method: 'POST',
//         url: `${Cypress.env('apiUrl')}${Cypress.env('apiUser')}`,
//         body: {
//             userName: username,
//             password,
//         },
//     })
//         .then((response) => {
//             cy.setCookie('userID', response.body.userID);
//             cy.setCookie('UserName', response.body.username);
//         });

// cy.request({
//     method: 'POST',
//     url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
//     body: {
//         userId: userId,
//         isbn,
//     },
// })
//     .then((response) => {
//         cy.setCookie('userID', response.body.userID);
//         cy.setCookie('UserName', response.body.username);
//     });


// export const deleteBook = (userId, isbn) => {
//     cy.request({
//         method: 'POST',
//         url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,
//         body: {
//             userId: userId,
//             isbn,
//         },
//     }).then((response) => {
//         cy.request({
//             method: 'DELETE',
//             headers: {
//                 authorization: `Bearer ${response.body.token}`,
//             },
//             url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}/${response.body.userId}`,
//         });
//     });
// };

