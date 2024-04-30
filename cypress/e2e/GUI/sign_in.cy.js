describe('Login de usuário', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginWithLastRegisteredUser();
    // cy.url().then(url => {
    //   if (url.includes('/login')) {
    //     cy.visit('/');
    //   }
    // });
  });

  it('Deve fazer login com sucesso', () => {
    // Agora, você pode prosseguir com suas asserções para validar o login bem-sucedido
    cy.get('[data-qa-selector="welcome_title_content"]')
      .should('be.visible')
      .and('contain', 'Welcome to GitLab');
  });
});
