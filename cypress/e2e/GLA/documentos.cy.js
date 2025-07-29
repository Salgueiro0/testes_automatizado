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
        cy.get('#ds_empreendimento').type('ambiental')
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


        cy.contains('a', 'Novo Documento').click({ force: true });


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

        cy.contains('button', 'OK').click()

        //PESQUISAR DOCUMENTO

        cy.get(':nth-child(5) > a > span').click()

        //validando campos de texto
        cy.get(':nth-child(1) > .col-md-6 > .form-group > .control-label').should('contain', "R.A")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain', "Empreendimento")
        cy.get(':nth-child(2) > :nth-child(3) > .form-group > .control-label').should('contain', "Exigência")
        cy.get(':nth-child(5) > .col-md-6 > .form-group > .control-label').should('contain', "Tipo")
        cy.get(':nth-child(6) > .col-md-6 > .form-group > .control-label').should('contain', "Órgão Documento")
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .control-label').should('contain', "Descrição")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('contain', "Demanda")
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain', "Requerimento")
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > .control-label').should('contain', "Número")
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > .control-label').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain', "Empreendedor Responsável")
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > .control-label').should('contain', "Data")
        cy.get(':nth-child(6) > :nth-child(2) > .form-group > .control-label').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(6) > :nth-child(3) > .form-group > .control-label').should('contain', "Arquivo Principal")
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('contain', "Empreendedor Responsável")

        cy.get('.sorting_asc').should('contain', "Origem")
        cy.get('[aria-label="RA: Ordenar colunas de forma ascendente"]').should('contain', "RA")
        cy.get('[aria-label="Empreendimento: Ordenar colunas de forma ascendente"]').should('contain', "Empreendimento")
        cy.get('[aria-label="Tipo: Ordenar colunas de forma ascendente"]').should('contain', "Tipo")
        cy.get('[aria-label="Número: Ordenar colunas de forma ascendente"]').should('contain', "Número")
        cy.get('[aria-label="Data: Ordenar colunas de forma ascendente"]').should('contain', "Data")
        cy.get('[aria-label="Órgão: Ordenar colunas de forma ascendente"]').should('contain', "Órgão")
        cy.get('[aria-label="Nº SEI Doc: Ordenar colunas de forma ascendente"]').should('contain', "Nº SEI Doc")
        cy.get('[aria-label="Descrição: Ordenar colunas de forma ascendente"]').should('contain', "Descrição")
        cy.get('[aria-label="Ação: Ordenar colunas de forma ascendente"]').should('contain', "Ação")

        //Testando limpar campos
        cy.get('#ds_documento').type('teste')

        cy.get('[onclick="resetFields()"]').click()

        //pesquisando documento

        cy.wait(3000)

        cy.get('#select2-combo_empreendimento-container').click()
        cy.wait(1000)
        cy.get('.select2-results').find('li').last().click()
        cy.get('#pesquisarDocumentos').click()

        //filtro de pesquisa
        cy.get('#table-documento_filter > label > .form-control').type('ambiental')

        //VISUALIZAR DOCUMENTO
        cy.get('a[title="Visualizar"]').first().click();

        //ir para dados detalhados
        cy.get('.col-md-12 > a').click()

        //validar campos de texto
        cy.get('[width="90"] > b').should('contain', "Tipo")
        cy.get(':nth-child(2) > :nth-child(1) > b').should('contain', "Número")
        cy.get(':nth-child(3) > :nth-child(1) > b').should('contain', "Data")
        cy.get(':nth-child(4) > :nth-child(1) > b').should('contain', "Órgão")
        cy.get(':nth-child(5) > :nth-child(1) > b').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(6) > :nth-child(1) > b').should('contain', "Descrição")

        //EDITAR DOCUMENTO
        cy.get('a.btn').click()

        //validar campos de texto
        cy.get(':nth-child(1) > .col-md-6 > .form-group > .control-label').should('contain', "Tipo")
        cy.get(':nth-child(2) > :nth-child(1) > .form-group > .control-label').should('contain', "Órgão Documento")
        cy.get(':nth-child(3) > .col-md-12 > .form-group > .control-label').should('contain', "Descrição")
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .control-label').should('contain', "Número")
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .control-label').should('contain', "Nº SEI Doc")
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain', "Data")


        cy.get('#ds_documento').type('testando editar documento')
        cy.get('[type="submit"]').click()
        cy.contains('button',"OK").click()

        //Excluir
        cy.contains('button', "Excluir").click()
        cy.contains('button', "Confirmar").click()
        cy.contains('button',"OK").click()

        //EXCLUIR EMPREENDIMENTO
        cy.get('.sidebar-menu > :nth-child(2) > a > span').click()

        cy.get('.col-md-6 > .form-group > .select2-container > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
        cy.get('.select2-results').find('li').contains('ambiental').click({ force: true })
        cy.get('#pesquisar').click()

        cy.get('a[title="Excluir"]').first().click();
        cy.contains('button', 'Confirmar').click();
        cy.contains('button', 'OK').click();






    })
})
