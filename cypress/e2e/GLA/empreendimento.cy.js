/// <reference types="cypress" />

describe('pendência', () => {
    beforeEach(() => {
        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
       
          
    })
    it('validação das telas no campo empreendimento', () => {
        
        cy.get(':nth-child(2) > .form-control').type('C9020840')

        cy.get(':nth-child(3) > .form-control').type('welcome_1')

        cy.get('.btn').click()

        cy.get('h1').should('have.text', "Pendência")

        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()

        cy.get('h1').should('have.text', "Empreendimento")

        cy.get('.box-title').should('have.text', "Pesquisar")
        //validação da escrita
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > label').should('have.text', "R.A. ")
        
        cy.get('.col-md-6 > .form-group > label').should('have.text', "Empreendimento ")

        cy.get(':nth-child(1) > :nth-child(3) > .form-group > label').should('have.text', "Tipo ")

        cy.get(':nth-child(2) > :nth-child(1) > .form-group > label').should('have.text', "Prioridade ")

        cy.get(':nth-child(2) > :nth-child(2) > .form-group > label').should('have.text', "Titular ")

        cy.get(':nth-child(2) > :nth-child(3) > .form-group > label').should('have.text', "Suplente ")

        cy.get('.col-md-8 > .form-group > label').should('have.text', "Empreendedor Responsável ")

        cy.get(':nth-child(3) > :nth-child(2) > .form-group > label').should('have.text', "Arquivado")

        cy.get(':nth-child(3) > :nth-child(3) > .form-group > label').should('have.text', "Concluído")

        cy.get('.col-md-5 > .form-group > label').should('have.text', "Possui Exigência a cumprir e próxima de expirar/expirada? ")

        cy.get(':nth-child(4) > .col-md-3 > .form-group > label').should('have.text', "Possui Requerimento em Análise? ")
        
        cy.get(':nth-child(4) > .col-md-4 > .form-group > label').should('have.text', "Possui Licença Vigente ou Renovada Tacitamente?")

        cy.get('.sorting_asc').should('have.text', "R.A")

        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento")

        cy.get('[aria-label="Tipo: Ordenar colunas de forma ascendente"]').should('have.text', "Tipo")

        cy.get('[aria-label="Empreendedor Responsável: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendedor Responsável")
        
        cy.get('[aria-label="Prioridade: Ordenar colunas de forma ascendente"]').should('have.text', "Prioridade")
        
        cy.get('[aria-label="Titular: Ordenar colunas de forma ascendente"]').should('have.text', "Titular")

        cy.get('[aria-label="Arquivado: Ordenar colunas de forma ascendente"]').should('have.text', "Arquivado")

        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('have.text', "Ação")

        // seleção de campos e validação dos botões
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click({force: true})

        cy.get('.select2-results').find('li').contains('RA-I BRASILIA ').click({force: true})

        cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        cy.get('.select2-results').find('li').contains('12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago ').click({force: true})

        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo ').click({force: true})

        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})

        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})

        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()

        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})

        cy.get('.col-md-8 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search').click()

        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})

        cy.get('#select2-fl_arquivado-container').click()

        cy.get('.select2-results').find('li').contains('Não').click({force: true})

        cy.get('#select2-fl_concluido-container').click()

        cy.get('.select2-results').find('li').contains('Não').click({force: true})

        cy.get('#select2-fl_exigencia_cumprir-container').click()

        cy.get('.select2-results').find('li').contains('Não').click({force: true})

        cy.get('.col-md-3 > .form-group > .select2-container > .selection > .select2-selection > #select2-fl_req_analise-container').click()

        cy.get('.select2-results').find('li').contains('Sim').click({force: true})

        cy.get('.col-md-4 > .form-group > .select2-container > .selection > .select2-selection > #select2-fl_req_analise-container').click()

        cy.get('.select2-results').find('li').contains('Sim').click({force: true})

        cy.get('[onclick="limpaPesquisa()"]').click({force: true})

          //validação novo cadastro

        cy.get('.btn-success').click()

        //validação da escrita na tela de novo cadastro

        cy.get('.box-title').should('have.text', 'Novo')
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > label').should('have.text', 'R.A. *')
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > label').should('have.text', 'Processo SEI Empreendimento *')
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > label').should('have.text', 'Tipo *')
        cy.get(':nth-child(6) > .col-md-8 > .form-group > label').should('have.text', 'Empreendimento *')
        cy.get(':nth-child(6) > .col-md-4 > .form-group > label').should('have.text', 'Prioridade *')
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('have.text', 'Número URB')
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('have.text', 'Número NGB')
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('have.text', 'Número MDE')
        cy.get(':nth-child(8) > .col-md-8 > .form-group > label').should('have.text', 'Titular *')
        cy.get('input[name="fl_arquivado"]').parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Arquivado');});
        cy.get('input[name="fl_concluido"]').parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Concluído');});
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('have.text', 'Suplente *')
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('have.text', 'Empreendedor Responsável *')
        cy.get(':nth-child(10) > :nth-child(1) > .form-group > label').should('have.text', 'Número de lotes')
        cy.get(':nth-child(10) > :nth-child(2) > .form-group > label').should('have.text', 'Área Total (ha)')
        cy.get('.control-label').should('have.text', 'Resumo do status')

        //validação do botão limpar  
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#reset').click()

        //validando o salvamento de empreencimento
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('1111')
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        cy.get('#ds_empreendimento').type('teste')
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


        //codigo para não contar a proteção do sistema como um erro
        Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


         // validação dos campos do empreendimento 

        cy.get(':nth-child(1) > [whidth="350px"] > b').should('have.text', 'RA:')
        cy.get(':nth-child(2) > [whidth="350px"] > b').should('have.text', 'Empreendimento:')
        cy.get(':nth-child(3) > [whidth="350px"] > b').should('have.text', 'Empreendedor Responsável:')
        cy.get(':nth-child(4) > [whidth="350px"] > b').should('have.text', 'Tipo:')
        cy.get(':nth-child(5) > [whidth="350px"] > b').should('have.text', 'SEI Empreendimento:')
        cy.get(':nth-child(6) > [whidth="350px"] > b').should('have.text', 'Prioridade:')
        cy.get(':nth-child(7) > [whidth="350px"] > b').should('have.text', 'Área Total (ha):')
        cy.get(':nth-child(8) > [whidth="350px"] > b').should('have.text', 'Número de lotes:')
        cy.get(':nth-child(9) > [whidth="350px"] > b').should('have.text', 'Número URB:')
        cy.get(':nth-child(10) > [whidth="350px"] > b').should('have.text', 'Número NGB:')
        cy.get(':nth-child(11) > [whidth="350px"] > b').should('have.text', 'Número MDE:')
        cy.get(':nth-child(12) > [whidth="350px"] > b').should('have.text', 'Titular:')
        cy.get(':nth-child(13) > [whidth="350px"] > b').should('have.text', 'Suplente:')
        cy.get(':nth-child(14) > [whidth="350px"] > b').should('have.text', 'Arquivado:')
        cy.get(':nth-child(15) > [whidth="350px"] > b').should('have.text', 'Concluído:')
        cy.get(':nth-child(16) > [whidth="350px"] > b').should('have.text', 'Resumo do Status:')
        cy.get(':nth-child(17) > [whidth="350px"] > b').should('have.text', 'Observação (processos):')
        
        // voltando para a tela de empreencimento, para a validação do salvamento
        cy.get('[onclick="window.history.back()"]').click()
        cy.get('[onclick="window.history.back()"]').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click({force: true})
        cy.get('.select2-results').find('li').contains('RA-I BRASILIA ').click({force: true})
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo ').click({force: true})
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        cy.get('.col-md-8 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search').click()
        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        cy.get('#pesquisar').click()

        //teste da tela de visualizar
        cy.get('[href="/empreendimentos/116"] > .fa').click()

        //teste da tela de edição
        cy.get('#emprendimento-aba > .panel-footer > :nth-child(1) > a.btn').click()
    })
});