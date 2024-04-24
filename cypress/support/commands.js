Cypress.Commands.add('login', () => { 
    const email = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    cy.get('#user_login').type(email, {log: false})
    cy.get('#user_password').type(password, {log: false});
    cy.get('#new_user > .submit-container > .btn').click();
 })

 Cypress.Commands.add('logout', () => {
    cy.get('.header-user-dropdown-toggle').click();
    cy.get('.sign-out-link').click();

 })