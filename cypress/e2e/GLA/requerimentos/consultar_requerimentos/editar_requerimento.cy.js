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
    it('Editar um requerimento', () => {


    //VALIDAR CAMPOS DE TEXTO

        cy.visit('http://gla-homol.terracapnet.local')
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#pesquisarRequerimento').click()
        cy.wait(1000)
        cy.get('.sidebar-toggle').click()
        cy.get('a[title="Editar"]').first().click();
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Demanda")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain',"Nº SEI Doc Requerimento")
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
        cy.get(':nth-child(6) > .col-md-12 > .form-group > .control-label').should('contain',"Descrição")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > .control-label').should('contain',"Data Publicação Requerimento")
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > .control-label').should('contain',"Status Requerimento")
        cy.get(':nth-child(7) > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"SEI Processo Requerimento")
        cy.get(':nth-child(8) > .col-md-12 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
        cy.get('.col-md-4 > .form-group > .control-label').should('contain',"Nº Doc SEI Despacho")




        //IR PARA EMPREENDIMENTO DO REQUERIMENTO

        cy.visit('http://gla-homol.terracapnet.local')
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#pesquisarRequerimento').click()

        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Identifier 'todasPendencias' has already been declared")) {
                // Ignora esse erro específico
                return false;
            }
            // Outros erros continuarão falhando normalmente
            return true;
        });

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignora qualquer erro cross‑origin
            return false;
        });

        //LIMPAR REQUERIMENTO
        cy.visit('http://gla-homol.terracapnet.local')
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#pesquisarRequerimento').click()

        cy.get('.sidebar-toggle').click()
        cy.get('a[title="Editar"]').first().click();

        //Limpar
        cy.get('.btn-toolbar > [type="button"]').click()

        //MOSTRAR MENSAGENS DE QUE É NECESSÁRIO MARCAR OS CAMPOS OBRIGATÓRIOS
         cy.get('#submit').click();
        cy.get('.modal-footer > .btn')
             .eq(1)
            .click();

         cy.get('.modal-footer > .btn')
             .eq(0)
             .click();

         cy.get('[onclick="window.history.back()"]').click()

        //EDITAR REQUERIMENTO
        cy.visit('http://gla-homol.terracapnet.local')
        cy.get(':nth-child(7) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        cy.get('#pesquisarRequerimento').click()

        cy.get('.sidebar-toggle').click()
        cy.get('a[title="Editar"]').first().click();

        //Número ofício
        cy.get('#nr_oficio').type('1111')
        //Ano ofício
        cy.get('#aa_oficio').clear().type('2000')

        //Emitente ofício
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(1)
            .click({force:true})

        //N SEI Doc Requerimento
        cy.get('#ds_observacao_doc_oficio').clear().type('1111')

        //Titular
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(1)
            .click({force:true})

        //Suplente
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results')
            .find('li')
            .eq(1)
            .click({force:true})

        //Descrição
        cy.get('#ds_requerimento').clear().type('teste')

        //Órgão requerimento
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(1)
            .click({force:true})

        //Data Publicação Requerimento
        cy.get('#dt_publicacao').clear().type('2020-01-01')

        //Status Requerimento
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > .select2-container > .selection').click()
        cy.get('.select2-results')
            .find('li')
            .eq(1)
            .click({force:true})

        // SEI Processo Requerimento
        cy.get('#cd_orgao_processo_sei').clear().type('1')
        cy.get('#nr_processo_sei').clear().type('2')
        cy.get('#aa_processo_sei').clear().type('3')

        //Reserva Orçamentária enviada à DIPLA Nº Doc SEI Despacho

        cy.get('#fl_reserva_orcamentaria')
            .uncheck({ force: true })   // garante que fique desmarcado
            .should('not.be.checked')   // confirma que está limpo

        cy.get('#fl_reserva_orcamentaria')
            .check({ force: true })     // marca o checkbox
            .should('be.checked')       // confirma que foi marcado
        cy.get('#nr_doc_sei_despacho').type('1')


        //Salvar e confirmar
        cy.get('#submit').click();

        // Para clicar no segundo botão
        cy.get('.modal-footer > .btn')
            .eq(1)
            .click();

        // Para clicar no primeiro
        cy.get('.modal-footer > .btn')
            .eq(0)
            .click();
    })
})
