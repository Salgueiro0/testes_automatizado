describe('consultar_requerimentos', () => {

    beforeEach(() => {

        cy.session('loginSession', () => {
            cy.visit('http://gla-homol.terracapnet.local')
            cy.viewport(2000, 1200)
            cy.get(':nth-child(2) > .form-control').type('C9020840')
            cy.get(':nth-child(3) > .form-control').type('welcome_1')
            cy.get('.btn').click()
            cy.get('h1').should('have.text', "Pendência")
        })
    })
    it('Documentos', () => {

        //CRIAR EMPREENDIMENTO PARA TESTE
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(2000, 1200)
        cy.get('h1').should('have.text', "Pendência")
        cy.wait(2000)
        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        cy.get('.btn-success').click()
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('1111')
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        cy.get('#ds_empreendimento').type('engesoftware')
        cy.get('#select2-tp_prioridade-container').click()
        cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get('#select2-cd_orgao_responsavel-container').click()
        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('button.bootbox-accept').should('have.text', 'OK').click();
        cy.wait(2000)


        //CRIAR NOVO DOCUMENTO


        cy.contains('button', 'Novo Documento').click();

        //testar botão limpar
        cy.get('#ds_documento').type('teste')
        cy.contains('button', 'Limpar').click();

        //Cadastrar documento
        cy.get('[id^="select2-tp_documento-"][id$="-container"]').click();
        cy.get('.select2-results').find('li').contains('Outros').click({force: true})

        cy.get('#nr_documento').type('1245')

        cy.get('#dt_documento').type('2025-01-01')

        cy.get('[id^="select2-cd_orgao_documento-"][id$="-container"]').click();
        cy.get('.select2-results').find('li').contains('ADETUR - AGÊNCIA DE DESENVOLVIMENTO DO TURISMO DO DISTRITO FEDERAL').click({force: true})

        cy.get('#nr_documento_sei').type('435456')

        cy.get('#ds_documento').type('teste')

        cy.get('[type="submit"]').click()

    })
})
