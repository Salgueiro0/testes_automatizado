// tempo em ms entre comandos

/// <reference types="cypress" />

import consultar_reiteracoes from "../../../support/pages/consultar_reiteracoes";

describe('consultar_reiteracoes', () => {

    it('consultar_reiteracoes', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Retorna false para evitar que o Cypress falhe o teste
            return false;
        });

        consultar_reiteracoes.irParaGLA()
        consultar_reiteracoes.login()
        // consultar_reiteracoes.irParaRequerimentos()
        // cy.get(':nth-child(7) > [href="#"]').click()
        // consultar_reiteracoes.irParaConsultarRequerimentos()
        // cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
        //
        // //CRIAR EMPREENDIMENTO PARA TESTE
        // consultar_reiteracoes.irParaEmpreendimento()
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()



        // cy.get('.btn-success').click()
        // cy.get('#select2-cd_regiao_admin-container').click()
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

        // //PESQUISAR EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.get('a[title="Visualizar"]').first().click();
        //
        //
        // //CRIAR PRIMEIRO REQUERIMENTO PARA TESTE
        // cy.wait(2000)
        // cy.get('.requerimentos-aba').should('contain.text', 'Requerimento').click()
        //
        // //Cadastro
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });
        //
        // cy.get('#nr_oficio').type('2000')
        //
        // cy.get('#aa_oficio').type('2025')
        //
        // cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });
        //
        // cy.get('#ds_observacao_doc_oficio').type('208')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })
        //
        // cy.get('#ds_requerimento').type('Fazenda Graça Esmeralda')
        //
        // cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ANATEL - AGÊNCIA NACIONAL DE TELECOMUNICAÇÕES').click({ force: true });
        //
        // cy.get('#dt_publicacao').type('2020-01-01')
        //
        // cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('Deferido').click({ force: true });
        //
        // cy.get('#cd_orgao_processo_sei').type('1')
        // cy.get('#nr_processo_sei').type('1')
        // cy.get('#aa_processo_sei').type('1')
        //
        // cy.get('#fl_reserva_orcamentaria').click()
        // cy.wait(1000)
        // cy.get('#nr_doc_sei_despacho').type('1111')
        //
        // cy.get('#submit').should('contain.text', 'Salvar').click()
        // cy.wait(1000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        // cy.wait(1000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(1000)
        //
        // //CRIAR SEGUNDO REQUERIMENTO PARA TESTE
        //
        // //PESQUISAR EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        // cy.wait(2000)
        // cy.get('a[title="Visualizar"]').first().click();
        //
        // cy.get('.requerimentos-aba').click()
        //
        // //Cadastro
        // cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()
        //
        // cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LP - Licença Prévia').click({ force: true });
        //
        // cy.get('#nr_oficio').type('2')
        //
        // cy.get('#aa_oficio').type('2024')
        //
        // cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ADHAR - ASSESSORIA DA DIRETORIA DE HABITAÇÃO E DE REGULARIZAÇÃO').click({ force: true });
        //
        // cy.get('#ds_observacao_doc_oficio').type('208')
        //
        // cy.get('#select2-cd_pessoa_titular-container').click()
        // cy.get('.select2-results').find('li').contains(' Camila da Fonseca Vieira ').click({ force: true })
        //
        // cy.get('#ds_requerimento').type('Fazenda')
        //
        // cy.get('[id^="select2-cd_orgao_requerimento-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('CAIXA - CAIXA ECONÔMICA FEDERAL').click({ force: true });
        //
        // cy.get('#dt_publicacao').type('2025-01-01')
        //
        // cy.get('[id^="select2-tp_status-"][id$="-container"]').click();
        // cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('A protocolar').click({ force: true });
        //
        // cy.get('#cd_orgao_processo_sei').type('2')
        // cy.get('#nr_processo_sei').type('2')
        // cy.get('#aa_processo_sei').type('2')
        //
        // cy.get('#fl_reserva_orcamentaria').click()
        // cy.wait(1000)
        // cy.get('#nr_doc_sei_despacho').type('2222')
        //
        // cy.get('#submit').click()
        // cy.wait(3000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Continuar').click()
        // cy.wait(3000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(3000)
        //
        // cy.reload()

        //CADASTRAR REITERAÇÃO
        consultar_reiteracoes.irParaRequerimentos()
        consultar_reiteracoes.irParaConsultarReiteracoes()
        consultar_reiteracoes.irParaCadastrarReiteracoes()

        //Validar campos de texto

        consultar_reiteracoes.validarLabelCadastrarRA()
        consultar_reiteracoes.validarLabelCadastrarEmpreendimento()
        consultar_reiteracoes.validarLabelCadastrarTipoRequerimento()
        consultar_reiteracoes.validarLabelCadastrarRequerimentos()
        consultar_reiteracoes.validarLabelCadastrarRequerimentosReiterados()

        //Adicionar primeiro requerimento

        consultar_reiteracoes.selecionarRegiaoAdm()
        consultar_reiteracoes.selecionarEmpreendimento()
        consultar_reiteracoes.selecionarTipoRequerimento()
        consultar_reiteracoes.selecionarRequerimento()
        consultar_reiteracoes.clicarBotaoAdicionar()
        consultar_reiteracoes.selecionarRequerimento()
        // cy.get('#select2-combo_requerimento-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').contains('LP - Licença Prévia - Ofício nº 2000/2025 - ACJUR p/ ANATEL').click({ force: true })
        consultar_reiteracoes.clicarBotaoAdicionar()
        consultar_reiteracoes.clicarBotaoSalvar()
        consultar_reiteracoes.clicarConfirmar()
        consultar_reiteracoes.clicarBotaoOk()


        // //Adicionar segundo requerimento
        //
        // cy.get('#select2-regiao_adm-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })
        // cy.wait(2000)
        //
        // cy.get('#select2-combo_empreendimento-container').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.wait(2000)
        // cy.get('#select2-combo_tipo_requerimento-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
        // cy.wait(2000)
        // cy.get('#select2-combo_requerimento-container').click()
        // cy.wait(2000)
        // cy.get('.select2-results').find('li').eq(1).click({ force: true })
        // cy.wait(2000)
        // cy.get('#btn_adicionar').click()
        // cy.wait(2000)
        // cy.get('#submit').should('contain.text', 'Salvar').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn-primary').should('contain.text', 'Salvar').click()
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn').should('contain.text', 'OK').click()
        // cy.wait(2000)

        //PESQUISAR REITERAÇÃO DE REQUERIMENTO

        //Validar Campos de texto
        consultar_reiteracoes.validarLabelPesquisarReiteracaoRA()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoEmpreendimento()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoTipoRequerimento()
        consultar_reiteracoes.validarLabelPesquisarReiteracaoCodigoReiteracao()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoEmpreendimento()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoTipoRequerimento()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoDataPubReq()
        consultar_reiteracoes.validarAriaLabelPesquisarReiteracaoAcao()

        consultar_reiteracoes.selecionarRegiaoAdmin()
        consultar_reiteracoes.selecionarTpRequerimento()
        consultar_reiteracoes.clicarBotaoPesquisar()
        consultar_reiteracoes.digitarFiltroReiteracao()
        consultar_reiteracoes.clicarPrimeiroBotaoVisualizar()

        //VISUALIZAR REITERAÇÃO:

        consultar_reiteracoes.validarWidthRequerimentosReiterados()
        consultar_reiteracoes.validarWidthDataPublicacao()
        consultar_reiteracoes.validarWidthAcaoRequerimento()

        //Editar Reiteração

        consultar_reiteracoes.clicarBotaoVoltar()
        consultar_reiteracoes.selecionarRegiaoAdmin()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        consultar_reiteracoes.selecionarTpRequerimento()
        // cy.get('#select2-tp_requerimento-container').click()
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        consultar_reiteracoes.clicarBotaoPesquisar()
        //cy.get('#pesquisar').click()

        consultar_reiteracoes.clicarPrimeiroBotaoEditar()

        //validando campos de texto
        consultar_reiteracoes.validarLabelEditarRA()
        consultar_reiteracoes.validarLabelEditarEmpreendimento()
        consultar_reiteracoes.validarLabelEditarTipoRequerimento()
        consultar_reiteracoes.validarLabelEditarRequerimentos()
        consultar_reiteracoes.validarLabelEditarRequerimentosReiterados()

        consultar_reiteracoes.selecionarPrimeiroRequerimento()

        //testando editar
        consultar_reiteracoes.selecionarRequerimentoEditar()
        consultar_reiteracoes.botaoEditar()
        consultar_reiteracoes.clicarBotaoAdicionar()
        // cy.get('#btn_adicionar').click()
        // cy.wait(2000)
        consultar_reiteracoes.clicarBotaoSalvar()
        //cy.get('#submit').click()
        cy.wait(2000)
        consultar_reiteracoes.clicarModalSalvar()
        consultar_reiteracoes.clicarModalOk()


        //Excluir reiteração

        consultar_reiteracoes.selecionarRegiaoAdmin()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        consultar_reiteracoes.selecionarTpRequerimento()
        // cy.get('#select2-tp_requerimento-container').click()
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })

        consultar_reiteracoes.clicarBotaoPesquisar()
        // cy.get('#pesquisar').click()
        cy.wait(1000)
        consultar_reiteracoes.clicarPrimeiroBotaoEditar()
        // cy.get('a[title="Editar"]').first().click()
        cy.wait(2000)
        consultar_reiteracoes.clicarPrimeiroBotaoExcluir()
        consultar_reiteracoes.clicarModalConfirmar()
        consultar_reiteracoes.clicarBotaoLimpar()
        consultar_reiteracoes.clicarBotaoVoltar()
        //cy.get('[onclick="window.history.back()"]').click()
        //Excluir

        consultar_reiteracoes.selecionarRegiaoAdmin()
        // cy.get('#select2-cd_regiao_admin-container').click()
        // cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({ force: true })

        consultar_reiteracoes.selecionarTpRequerimento()
        // cy.get('#select2-tp_requerimento-container').click()
        // cy.get('.select2-results').find('li').contains('Nova Permissão').click({ force: true })
        consultar_reiteracoes.clicarBotaoPesquisar()
        //cy.get('#pesquisar').click()
        consultar_reiteracoes.clicarPrimeiroBotaoExcluir()
        //cy.get('a[title="Excluir"]').first().click()
        consultar_reiteracoes.clicarModalConfirmar()
        //cy.get('.modal-footer > .btn-primary').should('contain.text', 'Confirmar').click()
        consultar_reiteracoes.clicarBotaoOk()
        //cy.contains('button','OK').click()

        // //APAGAR REQUERIMENTOS E EMPREENDIMENTO
        //
        // cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        //
        // cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        // cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        // cy.get('#pesquisar').click()
        //
        // cy.get('a[title="Visualizar"]').first().click();
        // cy.get('.requerimentos-aba').click()
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        // cy.get('a[title="Excluir"]').first().click();
        // cy.contains('button', 'Confirmar').click();
        // cy.contains('button', 'OK').click();
        //
        //
        // cy.get('.nav > :nth-child(6) > a').click()
        // cy.contains('button', 'Excluir').click();
        // cy.contains('button', 'Confirmar').click();

    })
})
