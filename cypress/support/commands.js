Cypress.Commands.add('login', () => {
    // Recuperar o email do GitHub
    const email = Cypress.env('user_name') || 'USER_NAME'; // Se 'user_name' não estiver definido, use um valor padrão

    // Recuperar a senha do GitHub
    const password = Cypress.env('user_password') || 'USER_PASSWORD'; // Se 'user_password' não estiver definido, use um valor padrão

    cy.get('#user_login').type(email, { log: false });
    cy.get('#user_password').type(password, { log: false });
    cy.get('#new_user > .submit-container > .btn').click();
})

Cypress.Commands.add('logout', () => {
    cy.get('.header-user-dropdown-toggle').click();
    cy.get('.sign-out-link').click();
})
