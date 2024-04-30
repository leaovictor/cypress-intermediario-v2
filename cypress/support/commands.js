Cypress.Commands.add('login', () => {
    // Recuperar o email do GitHub
    const email = Cypress.env('user_name') || process.env.USER_LOGIN; // Se 'user_name' não estiver definido, use um valor padrão

    // Recuperar a senha do GitHub
    const password = Cypress.env('user_password') || process.env.USER_PASSWORD; // Se 'user_password' não estiver definido, use um valor padrão

    cy.get('#user_login').type(email, { log: false });
    cy.get('#user_password').type(password, { log: false });
    cy.get('#new_user > .submit-container > .btn').click();
})


Cypress.Commands.add('logout', () => {
    cy.visit('/');
    cy.get('.header-user-dropdown-toggle').click();
    cy.get('.sign-out-link').click();
})

Cypress.Commands.add('loginWithLastRegisteredUser', () => {
    cy.readFile('usuario.json').then(usuario => {
      cy.visit('/login');
      cy.get('#user_login').type(usuario.username.toLowerCase());
      cy.get('#user_password').type(usuario.password);
      cy.get('#new_user > .submit-container > .btn').click();
    });
  });
  