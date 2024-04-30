import { faker } from "@faker-js/faker";

describe('Esta suite testa a funcionalidade de cadastro', () => {
    it('Deve cadastrar um usuário com sucesso e armazenar os detalhes', () => {

        const fullName = faker.name.fullName();
        const userName = faker.internet.userName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        // Cadastro do usuário
        cy.visit('/');
        cy.get('[data-qa-selector="register_tab"]').click();
        cy.get('#new_user_name').type(fullName);
        cy.get('#new_user_username').type(userName);
        cy.get('#new_user_email').type(email);
        cy.get('#new_user_email_confirmation').type(email);
        cy.get('#new_user_password').type(password);
        cy.get('.btn-register').click();

        // Armazenar os detalhes do usuário em um arquivo JSON
        const usuario = {
            username: userName,
            password: password
        };
        cy.writeFile('usuario.json', usuario);
    });
});
