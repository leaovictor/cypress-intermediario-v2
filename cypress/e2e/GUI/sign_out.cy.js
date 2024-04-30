

describe('Teste de logout', () => {
  beforeEach(() => {
      cy.visit('/');
      cy.loginWithLastRegisteredUser();
  });

  it('Deve fazer logout com sucesso', () => {
      cy.logout();
      // Garantir que a URL após o logout seja a correta
      cy.url().should('eq', `${Cypress.config('baseUrl')}/users/sign_in`); 
      // Verificar se o botão de login está visível após o logout
      cy.get('[data-qa-selector="sign_in_button"]').should('be.visible');
  });
});
