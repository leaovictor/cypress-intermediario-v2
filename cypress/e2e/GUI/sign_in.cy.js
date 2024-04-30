
describe('Teste de login', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('[data-qa-selector="welcome_title_content"]')
    .should('be.visible')
    .and('contain', 'Welcome to GitLab');
  })

})
