/// <reference types="cypress" />

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
    it('teste Associação-consultar', () => {
        //abrindo a aba de consultar Associação
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")
        cy.get(':nth-child(3) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()

        //validando os campos da aba da associação
        cy.get('h1').should('have.text', "Associação de Demanda")
        cy.get('.box-title').should('have.text', "Pesquisar")
        cy.get('.col-md-4 > .form-group > .control-label').should('have.text', "Tipo de Associação")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")

        //teste do botão limpar da aba da associação
        cy.get('.col-md-4 > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('Geral').click({force: true})
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção').click({force: true})
        cy.get('[onclick="limparFormularioPesquisa()"]').click()

        //validação de novo cadastro
        cy.get('.btn-success').click()
        cy.get('.box-title').should('have.text', "Novo Cadastro")
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > label').should('have.text', "Tipo de Associação *")
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get(':nth-child(4) > .form-group > label').should('have.text', "Demandas *")
        cy.get('tr > :nth-child(1)').should('have.text', "R.A")
        cy.get('tr > :nth-child(2)').should('have.text', "Empreendimento")
        cy.get('tr > :nth-child(3)').should('have.text', "Demandas")
        cy.get('tr > :nth-child(4)').should('have.text', "Arquivada")
        cy.get('.text-center').should('have.text', "Ação")

        //validação de novo cadastro
        cy.get('#select2-tp_associacao-container').click()
        cy.get('.select2-results').find('li').contains('Geral').click({force: true})
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção').click({force: true})
        cy.get('#select2-cd_demanda-container').click()
        cy.get('.select2-results').find('li').contains('LOC - Licença de Operação Corretiva nº 07/04/2025').click({force: true})
        cy.get('#btnAdicionar').click()

        //validação da exclução de novo cadastro
        cy.get('.text-center > .fas').click()


        //validação do botão voltar
        cy.get('[onclick="window.history.back()"]').click()

        //salvamento de novo cadastro
        cy.get('.btn-success').click()
        cy.get('#select2-tp_associacao-container').click()
        cy.get('.select2-results').find('li').contains('Geral').click({force: true})
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção').click({force: true})
        cy.get('#select2-cd_demanda-container').click()
        cy.get('.select2-results').find('li').contains('LOC - Licença de Operação Corretiva nº 07/04/2025').click({force: true})
        cy.get('#btnAdicionar').click()
        cy.get('#btnSalvar').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click();
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-II - GAMA').click({force: true})
        cy.get('#select2-cd_empreendimento-container > .select2-selection__clear').click()
        cy.get('.select2-results').find('li').contains('8 - FAZENDA VINICIUS').click({force: true})
        cy.get('#select2-cd_demanda-container').click()
        cy.get('.select2-results').find('li').contains('MP - Manifestação de Pendências nº 1/2024').click({force: true})
        cy.get('#btnAdicionar').click()
        cy.get('#btnSalvar').click()
        cy.get('.modal-footer > .btn-primary').click()

        //validação de salvamento
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção').click({force: true})
        cy.get('#pesquisar').click()

        //validação da edição
        cy.get('a[title="Editar"]').first().click();
        cy.get(':nth-child(2) > .text-center > .fas').click()
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-III - TAGUATINGA').click({force: true})
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('7 - wwww').click({force: true})
        cy.get('#select2-cd_demanda-container').click()
        cy.get('.select2-results').find('li').contains('AA - Autorização Ambiental nº 91/2022').click({force: true})
        cy.get('#btnAdicionar').click()
        cy.get('#btnSalvar').click()
        cy.get('.modal-footer > .btn-primary').click()

        //validação de visualização 
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA').click({force: true})
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('103 - Estagio de produção').click({force: true})
        cy.get('#pesquisar').click()
        cy.get('a[title="Visualizar"]').first().click();

        //validação para excluir a associação
        cy.get('#btn-delete-associacao-demanda').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click()




   })
    


    
})