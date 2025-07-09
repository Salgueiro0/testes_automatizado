describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local');
        cy.viewport(1980, 1200);
    });

    it('teste cadastrar pendência no empreendimento', () => {
        // Login
        cy.get(':nth-child(2) > .form-control').type('C9020840');
        cy.get(':nth-child(3) > .form-control').type('welcome_1');
        cy.get('.btn').click();

        // Verificar se está na página de Pendência
        cy.get('h1').should('include.text', "Pendência");

        // Navegar pelo menu
        cy.get('.sidebar-menu > :nth-child(1) > a > span').click();

        // Verificações de labels
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > label').should('include.text', "Empreendedor Responsável");
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > label').should('include.text', "Empreendimento");
        // ...

        // Adicionar uma pendência
        cy.get('.btn-success').click();
        cy.get('#select2-cd_empreendimento-container').click();
        cy.get('.select2-results').find('li').contains('4 - Empreendimento XPTO 5').click({ force: true });
        cy.get('#pesquisarPendencias').click();

        // Verificar se o formulário está aberto
        cy.get('h1').should('include.text', "Pendência");
        cy.get('#pendencia > .box > .box-header > .box-title').should('include.text', "Cadastrar/Editar");

        // Verificar botão de adicionar
        cy.get('.panel-body > .panel-footer > .btn-toolbar > .btn-success').should('include.text', "Adicionar Lista de Pendências");
    });
});
