
/// <reference types="cypress" />

describe('pagamento', () => {

    it('teste tela de pagamentos', () => {

        //LOGIN

        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(1980, 1200)
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")

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
        cy.get('#ds_empreendimento').type('engesoftware-teste-pagamentos')
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


        //CRIAR REQUERIMENTO PARA TESTE

        cy.wait(2000)
        cy.get('.requerimentos-aba').should('contain.text', 'Requerimento').click()

        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()

        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });

        cy.get('#nr_oficio').type('2000')

        cy.get('#aa_oficio').type('2025')

        cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });

        cy.get('#ds_observacao_doc_oficio').type('208')

        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })

        cy.get('#ds_requerimento').type('Fazenda Graça Esmeralda')

        cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });

        cy.get('#dt_publicacao').type('2020-01-01')

        cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });

        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('1')
        cy.get('#aa_processo_sei').type('1')

        cy.get('#fl_reserva_orcamentaria').click()
        cy.wait(1000)
        cy.get('#nr_doc_sei_despacho').type('1111')

        cy.get('#submit').should('contain.text', 'Salvar').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        cy.wait(1000)
        cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        cy.wait(1000)

        //ADICIONAR PAGAMENTO AO REQUERIMENTO
        cy.get('a[title="Visualizar"]').first().click();

        cy.wait(2000)

        cy.contains("button","Adicionar").click()

        cy.wait(2000)

        cy.get('#dt_pagamento').type('2025-01-01')

        cy.get('#vl_pagamento').type('1')

        cy.contains("button","Salvar").click()

        cy.contains("button","OK").click()

        cy.wait(1000)

        //PESQUISAR PAGAMENTO
        cy.get('.sidebar-menu > :nth-child(8) > a > span').click()

        //validando campos de texto
        cy.get('h1').should('have.text', "Pagamento")
        cy.get(':nth-child(1) > .box-header > .box-title').should('have.text', "Pesquisar")
        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > .form-group > .control-label').should('have.text', "R.A")
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > .form-group > .control-label').should('have.text', "Empreendimento")
        cy.get('.panel-body > :nth-child(2) > .col-md-4 > .form-group > .control-label').should('have.text', "Origem")
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .control-label').should('have.text', "Data do Pagamento")
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .control-label').should('have.text', "Valor do Pagamento (R$, ha, mudas)")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('have.text', "Status do Pagamento")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').should('have.text', "Descrição do Pagamento")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .control-label').should('have.text', "Empreendedor Responsável")
        cy.get(':nth-child(2) > .box-header > .box-title').should('have.text', "Adicione Campos na Tabela de Resultados")
        cy.get('.panel-body > :nth-child(1) > :nth-child(1) > label').invoke('text').then((text) => {expect(text.trim()).to.equal('Descrição do Pagamento');});
        cy.get('.form-group > .row > :nth-child(1) > label') .invoke('text').then((text) => {expect(text.trim()).to.equal('SEI do Comprovante de Pagamento');});
        cy.get('.panel-body > :nth-child(1) > :nth-child(2) > label').invoke('text').then((text) => {expect(text.trim()).to.equal('SEI do Envio do Comprovante de Pagamento');});
        cy.get('.form-group > .row > :nth-child(2) > label').invoke('text').then((text) => {expect(text.trim()).to.equal('Data do Pagamento');});
        cy.get('.panel-body > :nth-child(1) > :nth-child(3) > label').invoke('text').then((text) => {expect(text.trim()).to.equal('SEI da Certidão de Quitação');});
        cy.get('.form-group > .row > :nth-child(3) > label').invoke('text').then((text) => {expect(text.trim()).to.equal('Status do Pagamento');});
        cy.get('.sorting_asc').should('have.text', "R.A")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('have.text', "Empreendimento")
        cy.get('[aria-label="Origem: Ordenar colunas de forma ascendente"]').should('have.text', "Origem")
        cy.get('[aria-label="Valor do Pagamento (R$, ha, mudas): Ordenar colunas de forma ascendente"]').should('have.text', "Valor do Pagamento (R$, ha, mudas)")
        cy.get('tr > .text-center').should('have.text', "Ação")

        //testando limpar campos
        cy.get('#ds_pagamento').type('testando limpar todos os campos')
        cy.contains('button',"Limpar").click()

        //pesquisando pagamento
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.wait(2000)
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').last().click()

        cy.contains('button',"Pesquisar").click()

        cy.get('a[title="Visualizar"]').first().click()
        cy.wait(1000)

        //filtro pesquisar pagamento em requerimento

        cy.get('#table-pagamento_filter > label > .form-control').type('1')

        //EDITAR PAGAMENTO
        cy.get('.btn-edit-pagamento > .fa').click()
        cy.wait(1000)
        cy.get('#ds_pagamento').type('descrição')
        cy.wait(1000)
        cy.contains('button', "Editar").click()
        cy.contains('button', "OK").click()
        cy.wait(2000)

        //EXCLUIR PAGAMENTO
        cy.get('.btn-delete-pagamento > .fas').click()
        cy.wait(1000)
        cy.contains('button', "Confirmar").click()
        cy.contains('button', "OK").click()
     })
})







