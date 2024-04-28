Cypress.Commands.add('login', () => {
    const email = Cypress.env('user_name') || 'user_name'; // Se 'USER_NAME' não estiver definido, use um valor padrão
    const password = Cypress.env('user_password') || 'user_password'; // Se 'USER_PASSWORD' não estiver definido, use um valor padrão
    cy.get('#user_login').type(email, { log: false });
    cy.get('#user_password').type(password, { log: false });
    cy.get('#new_user > .submit-container > .btn').click();
})


Cypress.Commands.add('logout', () => {
    cy.get('.header-user-dropdown-toggle').click();
    cy.get('.sign-out-link').click();

})