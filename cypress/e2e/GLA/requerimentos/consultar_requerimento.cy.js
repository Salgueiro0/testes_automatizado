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

        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes("Cannot set properties of null")) {
                return false
            }
            return true
        })

        Cypress.on('uncaught:exception', (err) => {
            if (
                err.message.includes('Script error') ||
                err.message.includes('Identifier ')
            ) {
                return false
            }
            return true
        })

    //CRIAR EMPREENDIMENTO PARA TESTE

        cy.visit('http://gla-homol.terracapnet.local')
        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()
        cy.get('.btn-success').click()
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
        cy.get('#cd_orgao_processo_sei').type('11111')
        cy.get('#nr_processo_sei').type('11111111')
        cy.get('#aa_processo_sei').type('1111')
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains('Parcelamento de Solo Urbano - Novo').click({force: true})
        cy.get('#ds_empreendimento').type('teste-gla-requerimento')
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


    //TESTANDO OS CAMPOS DA PÁGINA DE REQUERIMENTO - NOVO CADASTRO

        //CRIAR REQUERIMENTO PARA TESTE

        cy.get('.requerimentos-aba').click()

        //Cadastro
        cy.get('#requerimento > .box > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()

        //testando os campos de texto da página REQUERIMENTO - NOVO CADASTRO
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Tipo Demanda Permissão")
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

        //Testando o botão limpar
        cy.get('#ds_requerimento').type('testetestetestetesteteste')
        cy.get('.btn-toolbar > [type="button"]').click()

        //testando ir para empreendimento e voltar
        cy.get('.text-block > a').click()
        cy.get('[onclick="window.history.back()"]').should('be.visible').and('contain.text', 'Voltar').click();

        cy.get('[id^="select2-tp_demanda_permissao-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('LO - Licença de Operação ').click({ force: true });

        cy.get('#nr_oficio').type('2000')

        cy.get('#aa_oficio').type('2025')

        cy.get('[id^="select2-cd_orgao_oficio-"][id$="-container"]').click();
        cy.get('.select2-results').should('be.visible').find('li.select2-results__option').should('have.length.gt', 0).contains('ACJUR - ADVOCACIA E CONSULTORIA JURIDICA').click({ force: true });

        cy.get('#ds_observacao_doc_oficio').type('208')

        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES').click({ force: true })

        cy.get('#ds_requerimento').type('teste')

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

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').should('be.visible').and('contain.text', 'Continuar').click()
        cy.get('.modal-footer > .btn').should('be.visible').and('contain.text', 'OK').click()

        // CONSULTAR REQUERIMENTO

        cy.get(':nth-child(7) > [href="#"]').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').should('be.visible').and('contain.text', 'Consultar - Requerimentos').click();

        //Testando preencher e Limpar todos os campos

        cy.get('#ds_requerimento').type('teste')

        cy.get('[onclick="resetFieldsRequerimento()"]').click()//limpar

        //Validação dos campos de texto
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('contain',"R.A")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain',"Empreendimento")
        cy.get(':nth-child(1) > :nth-child(3) > .form-group > .control-label').should('contain',"Demanda")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain',"Tipo Requerimento")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > label').should('contain',"Tipo Demanda Permissão")
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .control-label').should('contain',"Número Ofício")
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .control-label').should('contain',"Ano Ofício")
        cy.get(':nth-child(3) > :nth-child(3) > .form-group > .control-label').should('contain',"Emitente Ofício")
        cy.get(':nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Titular")
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
        cy.get('.col-md-12 > .form-group > .control-label').should('contain',"Descrição")
        cy.get(':nth-child(6) > :nth-child(1) > .form-group > .control-label').should('contain',"Órgão Requerimento")
        cy.get(':nth-child(2) > label').should('contain',"Período da Data de Publicação Requerimento")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label')
            .invoke('text')
            .then((text) => {
                const clean = text.replace(/\s+/g, ' ').trim();
                expect(clean).to.include('Status Requerimento');
            })
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain',"Empreendedor Responsável")
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('contain',"Possui Reiterações?")
        cy.get(':nth-child(8) > .col-md-6 > .form-group > .control-label').should('contain',"Reserva Orçamentária enviada à DIPLA")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain',"Status do Pagamento")
        cy.get(':nth-child(8) > :nth-child(3) > .form-group > label').should('contain',"Prazo Máximo de Análise")
        cy.get('.sorting_asc').should('contain',"RA")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain',"Empreendimento")
        cy.get('[aria-label="Requerimento: Ordenar colunas de forma ascendente"]').should('contain',"Requerimento")
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('contain',"Órgão")
        cy.get('[aria-label="Nº Ofício: Ordenar colunas de forma ascendente"]').should('contain',"Nº Ofício")
        cy.get('[aria-label="Ano: Ordenar colunas de forma ascendente"]').should('contain',"Ano")
        cy.get('[aria-label="Emitente: Ordenar colunas de forma ascendente"]').should('contain',"Emitente")
        cy.get('[aria-label="Data de Publicação: Ordenar colunas de forma ascendente"]').should('contain',"Data de Publicação")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain',"Ação")

        //Pesquisar um requerimento
        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.get('.select2-results__option')
            .should('have.length.gt', 0)
            .last()
            .scrollIntoView()
            .click({ force: true });
        cy.get('#pesquisarRequerimento').should('be.visible').click();

        //Relatório Excel e PDF
        cy.get('#gerarRelatorioPDF').should('be.visible').click();

        //Filtrar por texto
        cy.get('#table-requerimento_filter > label > .form-control').type('teste')

        //Filtro visualizar empreendimento
        cy.get('a[title="Visualizar"]').first().click();

        //VISUALIZAR REQUERIMENTO

        //Dados Detalhados

        //Validação de textos
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(1) > .form-group > label').should('contain',"Tipo Requerimento")
        cy.get('#requerimento-aba > :nth-child(3) > :nth-child(2) > .form-group > label').should('contain',"Demanda")
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(1) > .form-group > label').should('contain',"Número Ofício")
        cy.get('#requerimento-aba > :nth-child(4) > :nth-child(2) > .form-group > label').should('contain',"Ano Ofício")
        cy.get(':nth-child(4) > :nth-child(3) > .form-group > label').should('contain',"Emitente Ofício")
        cy.get(':nth-child(4) > label').should('contain',"Nº SEI Doc Requerimento")
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(1) > .form-group > label').should('contain',"Titular")
        cy.get('#requerimento-aba > :nth-child(5) > :nth-child(2) > .form-group > label').should('contain',"Suplente")
        cy.get(':nth-child(6) > .col-md-12 > .form-group > label').should('contain',"Descrição")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('contain',"Órgão Requerimento")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain',"Data Publicação Requerimento")
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('contain',"Status Requerimento")
        cy.get(':nth-child(4) > .form-group > label').should('contain',"SEI Processo Requerimento")
        cy.get(':nth-child(8) > :nth-child(1) > .form-group > label').should('contain',"Reserva Orçamentária enviada à DIPLA")
        cy.get(':nth-child(8) > :nth-child(2) > .form-group > label').should('contain',"Nº Doc SEI Despacho")
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('contain',"Status do Pagamento")
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('contain',"Prazo Máximo de Análise")
        cy.get(':nth-child(9) > :nth-child(3) > .form-group > label').should('contain',"Estudo/Serviço")
        cy.get(':nth-child(10) > :nth-child(1) > .form-group > label').should('contain',"Observação (SEI Documento Ofício)")
        cy.get(':nth-child(10) > :nth-child(2) > .form-group > label').should('contain',"Observação (Processo)")
        cy.get('.col-md-12 > label').should('contain',"Pagamentos de Preço Público de Análise (Requerimentos)")
        cy.get('#table-pagamento > thead > tr > .sorting_asc').should('contain',"SEI do Comprovante de Pagamento")
        cy.get('[aria-label="Data do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Data do Pagamento")
        cy.get('[aria-label="Valor do Pagamento (R$): Ordenar colunas de forma ascendente"]').should('contain',"Valor do Pagamento (R$)")
        cy.get('[aria-label="Status do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Status do Pagamento")
        cy.get('[aria-label="SEI da Certidão de Quitação: Ordenar colunas de forma ascendente"]').should('contain',"SEI da Certidão de Quitação")
        cy.get('[aria-label="Descrição do Pagamento: Ordenar colunas de forma ascendente"]').should('contain',"Descrição do Pagamento")
        cy.get('thead > tr > .text-center').should('contain',"Ação")

        //EDITAR REQUERIMENTO
        cy.get(':nth-child(7) > [href="#"]').click()

        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()

        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.get('.select2-results__option').should('have.length.gt', 0).last().scrollIntoView().click({ force: true });

        cy.get('#pesquisarRequerimento').click();
        cy.wait(2000);

        cy.get('[href^="/requerimentos/"][href$="/edit"]')
            .first()
            .click({ force: true });


        //Validar campos de texto
        cy.wait(2000)
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

        //editar

        cy.get('#ds_requerimento').clear().type('teste')

        cy.get('#submit').click()
        cy.get('.modal-footer > .btn-primary').should('have.text', 'Continuar').click();
        cy.get('.modal-footer > .btn').should('have.text', 'OK').click();

        //Limpar campos de texto
        cy.get(':nth-child(7) > [href="#"]').click()

        cy.get('.menu-open > .treeview-menu > :nth-child(1) > a > span').click()

        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.get('.select2-results__option')
            .should('have.length.gt', 0)
            .last()
            .scrollIntoView()
            .click({ force: true });

        cy.get('#pesquisarRequerimento').click()

        cy.get('a[title="Editar"]').first().click();

        cy.get('.btn-toolbar > [type="button"]').click() //limpar
        cy.get('[onclick="window.history.back()"]').click()

        //Excluir requerimento no filtro

        cy.get('#select2-cd_empreendimento-container').should('be.visible').click();
        cy.get('.select2-results__option')
            .should('have.length.gt', 0)
            .last()
            .scrollIntoView()
            .click({ force: true });

        cy.get('#pesquisarRequerimento').click()
        cy.get('a[title="Excluir"]').first().click();
        cy.get('.modal-footer > .btn-primary').should('have.text', ' Confirmar').click();
        cy.get('.modal-footer > .btn').should('have.text', 'OK').click();
    })
})
