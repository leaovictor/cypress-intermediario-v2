import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Esta suite testa a criação de novos projetos', () => {
    const randomName = faker.random.words(); 

    beforeEach(() => {
        cy.visit('/');
        cy.login();
    });

    it('Deve criar um projeto com sucesso', () => {
        cy.get('.blank-state-row > [href="/projects/new"]').click();
        cy.get('#blank-project-name > .project-name > #project_name').type(randomName);
    });
});
