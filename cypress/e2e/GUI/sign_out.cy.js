describe('Teste de logout', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.login()
      });
      
  it('Deve fazer logout com sucesso', () => {
    cy.logout();
    cy.get('[data-qa-selector="sign_in_button"]').should('be.visible');
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)

  });
});