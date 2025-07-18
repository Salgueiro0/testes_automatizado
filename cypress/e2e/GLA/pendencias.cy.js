
/// <reference types="cypress" />

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
    it('teste cadastrar pendência no empreendimento', () => {
        
        cy.get(':nth-child(2) > .form-control').type('C9020840')

        cy.get(':nth-child(3) > .form-control').type('welcome_1')

        cy.get('.btn').click()

        cy.get('h1').should('have.text', "Pendência")

        cy.get('.sidebar-menu > :nth-child(1) > a > span').click()

        cy.get(':nth-child(1) > :nth-child(1) > .form-group > label').should('have.text', "Empreendedor Responsável ")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > label').should('have.text', "Empreendimento ")
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > label').should('have.text', "Prioridade ")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > label').should('have.text', "Lista de Pendências ")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > label').should('have.text', "Categoria ")
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text', "Resumo")
        cy.get(':nth-child(4) > .form-group > label').should('have.text', "Unidade Interna ")
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > label').should('have.text', "Status da Pendência")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('have.text', "Providências")
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > label').should('have.text', "Exige Contratação?")
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Previsão de Cumprimento")
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Data Limite")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > label').should('have.text', "Titular ")
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Período Dias Restantes (data limite)")
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Período Dias Restantes (previsão de cumprimento)")
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > label').should('have.text', "Suplente ")
        cy.get('.sorting_asc').should('have.text', "Empreendedor Responsável")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento")
        cy.get('[aria-label="Prioridade: Ordenar colunas de forma ascendente"]').should('have.text', "Prioridade")
        cy.get('[aria-label="Lista de Pendências: Ordenar colunas de forma ascendente"]').should('have.text', "Lista de Pendências")
        cy.get('[aria-label="Categoria: Ordenar colunas de forma ascendente"]').should('have.text', "Categoria")
        cy.get('[aria-label="Resumo: Ordenar colunas de forma ascendente"]').should('have.text', "Resumo")
        cy.get('[aria-label="Exigência Vinculada: Ordenar colunas de forma ascendente"]').should('have.text', "Exigência Vinculada")
        cy.get('[aria-label="Unidade Interna: Ordenar colunas de forma ascendente"]').should('have.text', "Unidade Interna")
        cy.get('[aria-label="Proc Sei de Acompanhamento: Ordenar colunas de forma ascendente"]').should('have.text', "Proc Sei de Acompanhamento")
        cy.get('[aria-label="Status da Pendência: Ordenar colunas de forma ascendente"]').should('have.text', "Status da Pendência")
        cy.get('[aria-label="Providência: Ordenar colunas de forma ascendente"]').should('have.text', "Providência")
        cy.get('[aria-label="Exige Contratação?: Ordenar colunas de forma ascendente"]').should('have.text', "Exige Contratação?")
        cy.get('[aria-label="Previsão de Cumprimento: Ordenar colunas de forma ascendente"]').should('have.text', "Previsão de Cumprimento")
        cy.get('[aria-label="Dias Restantes (Previsão de Cumprimento): Ordenar colunas de forma ascendente"]').should('have.text', "Dias Restantes (Previsão de Cumprimento)")
        cy.get('[aria-label="Data Limite: Ordenar colunas de forma ascendente"]').should('have.text', "Data Limite")
        cy.get('[aria-label="Dias Restantes (Data Limite): Ordenar colunas de forma ascendente"]').should('have.text', "Dias Restantes (Data Limite)")

        cy.get('.btn-success').click()
        
        cy.get('#select2-cd_empreendimento-container').click()

        cy.get('.select2-results').find('li').contains('4 - Empreendimento XPTO 5 ').click({ force: true});

        cy.get('#pesquisarPendencias').click()

        cy.get('h1').should('have.text', "Pendência")
        cy.get('#pendencia > .box > .box-header > .box-title').should('have.text', "Cadastrar/Editar")
        cy.get('.panel-body > .panel-footer > .btn-toolbar > .btn-success').should('have.text', "Adicionar Lista de Pendências")

        cy.get('.content > :nth-child(3) > .box-header > .box-tools > .btn > .fa').click()

        
        for(var i = 0; i < 14; i++){
            cy.get('#pendenciaTodas3283 > .panel-footer > .btn-toolbar > .btn-primary').click()
            cy.wait(1000)
        }

        cy.get(':nth-child(1) > :nth-child(2) > div > a > .fa').click()
        cy.wait(2000)
        cy.get('#cke_1_contents iframe').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('p').click().type('teste');
        cy.get('#modal-alteracao-resumo > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()
       
        cy.get(':nth-child(2) > :nth-child(3) > a > .fa').click()
        cy.wait(2000)
        cy.get('#select2-cd_demanda-container').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click()
        cy.get('.select2-results').find('li').contains('Informativo').click({force: true})

        cy.get(':nth-child(2) > #botao-editar').click()
        cy.get('.exigencia').click()

        cy.get(':nth-child(4) > #botao-editar').click()
        
        cy.get(':nth-child(3) > :nth-child(4) > a').click()
        cy.get('#select2-cd_orgao_unidade_interna_pendencia-container').click()
        cy.get('.select2-results').find('li').contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA ').click({force: true})
        cy.get('#add_unidade_interna_pendencia').click()
        cy.wait(1000)
        cy.get('.col-md-12 > .btn-primary').click()
        cy.wait(1000)

        cy.get(':nth-child(4) > :nth-child(5) > a > .fa').click()
        cy.wait(1000)
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.wait(1000)
        cy.get('#nr_processo_sei').type('11111111')
        cy.wait(1000)
        cy.get('#aa_processo_sei').type('1111')
        cy.wait(2000)
        cy.get('#modal-alteracao-sei > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(6) > select').select('2911')

        cy.get(':nth-child(6) > :nth-child(7) > div > a > .fa').click()
        cy.get('#cke_2_contents > .cke_wysiwyg_frame').its('0.contentDocument.body').should('not.be.empty').then(cy.wrap).find('p').click().type('teste')
        cy.get('#modal-alteracao-providencia > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()

        cy.get(':nth-child(7) > :nth-child(8) > select').select('1')
        const dataBrasileira = '01/01/2024'; // Exemplo de data no formato brasileiro
        const [dia, mes, ano] = dataBrasileira.split('/'); // Divide a string por "/"
        const dataFormatoCypress = `${ano}-${mes}-${dia}`; // Monta no formato esperado

        cy.get(':nth-child(8) > :nth-child(9) > a > .fa').click()
        cy.get('#dt_previsao_cumprimento').type(dataFormatoCypress)// Digita no campo
        cy.get('#modal-alteracao-cumprimento > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()

        cy.on('uncaught:exception', (err, runnable) => {
            return false; // Ignora o erro para que o teste continue
          });
        const DataBrasileira = '01/01/2026'; // Exemplo de data no formato brasileiro
        const [Dia, Mes, Ano] = DataBrasileira.split('/'); // Divide a string por "/"
        const DataFormatoCypress = `${Ano}-${Mes}-${Dia}`;

        cy.get(':nth-child(9) > :nth-child(11) > a > .fa').click()
        cy.get('#dt_limite').type(DataFormatoCypress)
        cy.get('#modal-alteracao-limite > .modal-dialog > .modal-content > .modal-footer > #botao-editar').click()
        
        cy.on('uncaught:exception', (err, runnable) => {
            return true; // Ignora o erro para que o teste continue
          });      

        cy.get('.sidebar-menu > :nth-child(1) > a > span').click()
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('4 - Empreendimento XPTO 5 ').click({force: true})
        cy.get('#pesquisar').click()

        cy.wait(6000)
        cy.get('[onclick="limpaPesquisa()"]').click({force: true})

        
        cy.get('.sidebar-toggle').click()
        cy.get(':nth-child(1) > :nth-child(20) > .btn > .fas').click()
        cy.contains('button', 'Confirmar').click();
        cy.get('button.bootbox-accept').should('be.visible').and('contain.text', 'OK').click();
        cy.get('#gerarRelatorioPDF').click({force: true})
      



       

    })
    


    
});
