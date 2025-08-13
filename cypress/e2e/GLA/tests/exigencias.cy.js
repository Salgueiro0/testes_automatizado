
/// <reference types="cypress" />

describe('pagamento', () => {

    it('teste tela de exigências', () => {

        //LOGIN

        cy.visit('http://gla-homol.terracapnet.local')
        cy.viewport(2000, 1200)
        cy.get(':nth-child(2) > .form-control').type('C9020840')
        cy.get(':nth-child(3) > .form-control').type('welcome_1')
        cy.get('.btn').click()
        cy.get('h1').should('have.text', "Pendência")

        // //CRIAR EMPREENDIMENTO PARA TESTE
        // cy.visit('http://gla-homol.terracapnet.local')
        // cy.viewport(2000, 1200)
        // cy.get('h1').should('have.text', "Pendência")
        // cy.wait(2000)
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        // cy.get('.btn-success').click()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        // cy.get('#cd_orgao_processo_sei').type('11111')
        // cy.get('#nr_processo_sei').type('11111111')
        // cy.get('#aa_processo_sei').type('1111')
        // cy.get('#select2-tp_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        // cy.get('#ds_empreendimento').type('ambiental')
        // cy.get('#select2-tp_prioridade-container').click()
        // cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_pessoa_suplente-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
        // cy.get('#select2-cd_orgao_responsavel-container').click()
        // cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
        // cy.get('#submit').click()
        // cy.get('.modal-footer > .btn-primary').click()
        // cy.get('button.bootbox-accept').should('have.text', 'OK').click();
        // cy.wait(2000)


        // //CADASTRAR DEMANDA PARA TESTE
        // cy.get(':nth-child(3) > [href="#"]').click()
        //
        // cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()
        // cy.wait(1000)
        // cy.get('.btn-success').click()
        //
        // cy.get('#select2-regiao-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        //
        // cy.wait(2000)
        // cy.get('#select2-cd_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
        // cy.wait(2000)
        // cy.get('#add_empreendimento').click()
        //
        // cy.get(':nth-child(2) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        // cy.get('.select2-results').find('li').contains('LO - Licença de Operação').click({force: true})
        //
        // cy.get('#nr_demanda').type('100054350')
        //
        // cy.get('#aa_demanda').type(2022)
        //
        // cy.get(':nth-child(3) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        //
        // cy.get('.select2-results').find('li').contains('ABDI - AGENCIA BRASILEIRA DE DESENVOLVIMENTO INDUSTRIAL ').click({force: true})
        //
        // cy.get('div[style="display: block;"] > :nth-child(4) > :nth-child(1) > .form-group > .control-label').type('2025-07-10')
        // cy.get(':nth-child(4) > :nth-child(2) > .form-group > .control-label').type('6')
        //
        // cy.get(':nth-child(5) > .col-md-12 > .form-group > .control-label').type('teste12423423523')
        //
        // cy.get('#cd_orgao_processo_sei').type('111111')
        // cy.get('#nr_processo_sei').type('1')
        //
        // cy.get('#aa_processo_sei').type('2025')
        //
        // cy.get('#submit').click()
        //
        // cy.get('.modal-footer > .btn-primary').click()
        //
        // cy.get('.modal-footer > .btn-danger').click()

        //PESQUISAR DEMANDA

        cy.visit('http://gla-homol.terracapnet.local')

        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()

        cy.get('#form_geral > :nth-child(1) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        cy.wait(2000)
        cy.get('#form_geral > :nth-child(1) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        cy.get('#pesquisar').click()
        cy.get('#table-demanda_filter > label > .form-control').type('12345454')
        cy.get('a[title="Visualizar"]').first().click()



        //CADASTRAR EXIGÊNCIA

        cy.get('.exigencias-aba').click()

        cy.get(':nth-child(6) > .panel-footer > .btn-toolbar > a.btn').click()

        //validando campos de texto
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > label').should('contain', "Empreendimento ")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > label').should('contain', "Demanda ")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .control-label').should('contain', "Número")
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain', "Tema")
        cy.get('.col-md-10 > .form-check-label').should('contain', "Possui Prazo Expresso na Exigência")
        cy.get('.col-md-2 > .form-check-label').should('contain', "Dias")
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > .control-label').should('contain', "Previsão de Cumprimento")
        cy.get('.form-group > .form-check-label').should('contain', "Exige Contratação")
        cy.get(':nth-child(6) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição Exigência")
        cy.get(':nth-child(7) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição Providência")
        cy.get(':nth-child(8) > :nth-child(1) > .form-group > label').should('contain', "Titular ")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain', "Suplente ")
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > .control-label').should('contain', "Status")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > label').should('contain', "SEI Proc. de Acompanhamento")
        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .control-label').should('contain', "Unidade Interna")
        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-12 > :nth-child(1) > tbody > tr > th').should('contain', "Unidade Interna")
        cy.get(':nth-child(11) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .control-label').should('contain', "Unidade Externa")
        cy.get(':nth-child(11) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-12 > :nth-child(1) > tbody > tr > th').should('contain', "Unidade Externa")

        //ir para empreendimento
        cy.get(':nth-child(1) > .form-group > .text-block > a').click()
        //ir para demanda
        cy.get(':nth-child(2) > .form-group > .text-block > a').click()

        //testar limpar campos
        cy.get('#co_exigencia').type('3424324234343242434')
        cy.get('[onclick="limpaExigencia()"]').click()

        //novo cadastro

        cy.get('#co_exigencia').type('11232')

        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('Outros').click({force: true})

        cy.get('#qt_prazo_dias').type('10')

        function typeInCkeditor(selectorIframe, text) {
            cy.get(selectorIframe)
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then(cy.wrap)
                .clear()
                .type(text);
        }

        typeInCkeditor('#cke_1_contents > .cke_wysiwyg_frame', 'descrição');

        typeInCkeditor('#cke_2_contents > .cke_wysiwyg_frame', 'descrição2');


        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('Gabriel Tenorio Ramos').click({force: true})

        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('PAULO CESAR COSTA').click({force: true})

        cy.get(':nth-child(9) > :nth-child(1) > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('Cumprida').click({force: true})

        cy.get('#cd_orgao_processo_sei').type('1')
        cy.get('#nr_processo_sei').type('111')
        cy.get('#aa_processo_sei').type('2025')

        cy.get(':nth-child(10) > :nth-child(1) > .panel-border > .panel-body > .row > .col-md-10 > .form-group > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-results').find('li').contains('ADHAR - ASSESSORIA DA DIRETORIA DE HABITAÇÃO E DE REGULARIZAÇÃO ').click({force: true})

        cy.get('#add_unidade_interna').click()

        cy.get('#submit').click()

        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(2000)
        cy.contains('button', "Não").click()

        //PESQUISAR EXIGÊNCIA
        cy.get(':nth-child(6) > a > span').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.wait(1000)
        cy.get('#select2-cd_regiao-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.wait(2000)
        cy.get('#select2-cd_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({force: true})
        cy.get('#pesquisarExigencia').click()


        //testando filtro pesquisar
        cy.get('#table-exigencia_filter > label > .form-control').type('descrição')

        //VISUALIZAR EXIGÊNCIA
        cy.get('a[title="Visualizar"]').first().click()

        // //IR PARA DOCUMENTO
        // cy.get('.documentos-aba').click()
        // //IR PARA ESTUDOS
        // cy.get('.novo-estudo-aba').click()
        // //IR PARA DADOS DETALHADOS
        // cy.get('.active > a').click()

        //adicionar Dilações de Prazos
        cy.contains('button', "Adicionar").click()
        cy.contains('button', "Sim").click()

        //validar campos de texto de Dilações de Prazos
        cy.get(':nth-child(2) > .col-md-8 > .form-group > .control-label').should('contain', "SEI do Requerimento")
        cy.get(':nth-child(3) > .col-md-8 > .form-group > .control-label').should('contain', "SEI do Deferimento/ Indeferimento")
        cy.get(':nth-child(2) > .col-md-4 > .form-group > .control-label').should('contain', "Status")
        cy.get('.modal-body > :nth-child(3) > .col-md-4 > .form-group > .control-label').should('contain', "Data Limite Após Dilação de Prazo")

        cy.wait(1000)
        cy.get('#ds_observacao_sei_pedido').type('6512154')

        cy.contains('button', "Salvar").click()
        cy.wait(3000)

        //alterar Dilações de Prazos
        cy.get('[title="Editar"] > .fa').click()
        cy.get('#ds_observacao_sei_pedido').type('654')
        cy.contains('button', "Salvar").click()
        cy.wait(3000)

        cy.get('[title="Excluir"] > .fas').click()

        cy.contains('button', "Sim").click()

        //EDITAR EXIGÊNCIA

        cy.get('#exigencia-aba > .panel-footer > :nth-child(1) > a.btn').click()
        cy.get('#qt_prazo_dias').type('80')
        cy.get('#submit').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.contains('button', "OK").click()


        //EXCLUIR EXIGÊNCIA
        cy.get('#btn-delete-exigencia').click()
        cy.contains('button',"Confirmar").click()
        cy.contains('button',"OK").click()

        //Gerar relatório de acompanhamento

        //validando campos de texto de relatório de acompanhamento de exigências
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > :nth-child(1) > .form-group > .form-check-label').should('contain', "RA / EMPREENDIMENTO / DEMANDA")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > .form-check-label').should('contain', "Nº")
        cy.get(':nth-child(4) > :nth-child(4) > .form-group > .form-check-label').should('contain', "Unidades Responsáveis")
        cy.get(':nth-child(4) > :nth-child(7) > .form-group > .form-check-label').should('contain', "Data Limite")
        cy.get(':nth-child(6) > :nth-child(4) > .form-group > .form-check-label').should('contain', "Informativa")
        cy.get(':nth-child(6) > :nth-child(7) > .form-group > .form-check-label').should('contain', "Dispensada")
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > :nth-child(2) > .form-group > .form-check-label').should('contain', "SEI da Dilação em Analise")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > .form-check-label').should('contain', "Descrição Providência")
        cy.get(':nth-child(4) > :nth-child(5) > .form-group > .form-check-label').should('contain', "Descrição Exigência")
        cy.get(':nth-child(6) > :nth-child(5) > .form-group > .form-check-label').should('contain', "Cumprida")
        cy.get(':nth-child(6) > :nth-child(8) > .form-group > .form-check-label').should('contain', "Em Execução")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-check-label').should('contain', "Tema")
        cy.get(':nth-child(4) > :nth-child(6) > .form-group > .form-check-label').should('contain', "Estudos/Serv Relacionados")
        cy.get(':nth-child(6) > :nth-child(6) > .form-group > .form-check-label').should('contain', "Pendente")


        cy.get('#modalRelatorioPersonalizadoPDF').click()
        cy.wait(2000)
        cy.get('#gerarRelatorioPersonalizadoPDF').click()
        cy.wait(2000)
        cy.get('#modal-relatorio-pdf-personalizado > .modal-dialog > .modal-content > .modal-footer > .btn-form').click()

        // //EXCLUIR DEMANDA E EMPREENDIMENTO
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Excluir"]').first().click();

        // cy.get('a[title="Visualizar"]').first().click();
        // cy.get('.demandas-aba').click()
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        // cy.get('.nav > :nth-child(6) > a').click()
        // cy.contains('button', 'Excluir').click();
        // cy.contains('button', 'Confirmar').click();

    })
})









