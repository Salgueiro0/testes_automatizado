const el = require('./elements').ELEMENTS
class empreendimento {

    irParaGLA() {
        cy.visit('/')
    }

    login() {
        cy.get(el.campoUsuario).type('C9020840');
        cy.get(el.campoSenha).type('welcome_1');
        cy.get(el.botaoLogin).click();
    }

    validarTituloPendencia(){
        cy.get('h1').should('have.text', "Pendência")
    }

    irParaEmpreendimento(){
        cy.get(el.abaEmpreendimento).click()
    }

    validarTituloEmpreendimento(){
        cy.get('h1').should('have.text', "Empreendimento")
    }

    validarTextoPesquisar(){
        cy.get(el.tituloPesquisar).should('have.text', "Pesquisar")
    }

    validarLabelRA(){
        cy.get(el.labelRA).should('have.text', "R.A. ")
    }

    validarLabelEmpreendimento(){
        cy.get(el.labelEmpreendimento).should('have.text', "Empreendimento ")
    }

    validarLabelTipo(){
        cy.get(el.labelTipo).should('have.text', "Tipo ")
    }

    validarLabelPrioridade(){
        cy.get(el.labelPrioridade).should('have.text', "Prioridade ")
    }

    validarLabelTitular(){
        cy.get(el.labelTitular).should('have.text', "Titular ")
    }
    validarLabelSuplente(){
        cy.get(el.labelSuplente).should('have.text', "Suplente ")
    }

    validarLabelEmpreendedorResponsavel(){
        cy.get(el.labelEmpreendedorResponsavel).should('have.text', "Empreendedor Responsável ")
    }

    validarLabelArquivado(){
        cy.get(el.labelArquivado).should('have.text', "Arquivado")
    }

    validarLabelConcluido(){
        cy.get(el.labelConcluido).should('have.text', "Concluído")
    }

    validarLabelPossuiExigencia(){
        cy.get(el.labelPossuiExigencia).should('have.text', "Possui Exigência a cumprir e próxima de expirar/expirada? ")
    }

    validarLabelPossuiRequerimento(){
        cy.get(el.labelPossuiRequerimento).should('have.text', "Possui Requerimento em Análise? ")
    }

    validarLabelPossuiLicenca(){
        cy.get(el.labelPossuiLicenca).should('have.text', "Possui Licença Vigente ou Renovada Tacitamente?")
    }

    validarAriaLabelRA(){
        cy.get(el.ariaLabelRA).should('have.text', "R.A")
    }

    validarAriaLabelEmpreendimento(){
        cy.get(el.ariaLabelEmpreendimento).should('have.text', "Empreendimento")
    }

    validarAriaLabelTipo(){
        cy.get(el.ariaLabelTipo).should('have.text', "Tipo")
    }

    validarAriaLabelEmpreendedorResponsavel(){
        cy.get(el.ariaLabelEmpreendedorResponsavel).should('have.text', "Empreendedor Responsável")
    }

    validarAriaLabelPrioridade(){
        cy.get(el.ariaLabelPrioridade).should('have.text', "Prioridade")
    }

    validarAriaLabelTitular(){
        cy.get(el.ariaLabelTitular).should('have.text', "Titular")
    }

    validarAriaLabelArquivado(){
        cy.get(el.ariaLabelArquivado).should('have.text', "Arquivado")
    }

    validarAriaLabelAcao(){
        cy.get(el.ariaLabelAcao).should('have.text', "Ação")
    }


    selecionarRA(){
        cy.get(el.seletorRA).click({force: true})
        cy.get(el.dropdownGLA).find('li').contains('RA-I BRASILIA ').click({force: true})
    }

    selecionarEmpreendimento(){
        cy.get(el.seletorEmpreendimento).click()
        cy.get(el.dropdownGLA).find('li').contains('12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago ').click({force: true})
    }

    selecionarTipo(){
        cy.get(el.seletorTipo).click()
        cy.get(el.dropdownGLA).find('li').contains('Parcelamento de Solo Urbano - Novo ').click({force: true})
    }

    selecionarPrioridade(){
        cy.get(el.seletorPrioridade).click()
        cy.get(el.dropdownGLA).find('li').contains('Planejamento Estratégico ').click({force: true})
    }

    selecionarTitular(){
        cy.get(el.seletorTitular).click()
        cy.get(el.dropdownGLA).find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }

    selecionarSuplente(){
        cy.get(el.seletorSuplente).click()
        cy.get(el.dropdownGLA).find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }

    selecionarEmpreendedorResponsavel(){
        cy.get(el.seletorEmpreendedorResponsavel).click()
        cy.get(el.dropdownGLA).find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
    }

    selecionarArquivado(){
        cy.get(el.seletorArquivado).click()
        cy.get(el.dropdownGLA).find('li').contains('Não').click({force: true})
    }

    selecionarConcluido(){
        cy.get(el.seletorConcluido).click()
        cy.get(el.dropdownGLA).find('li').contains('Não').click({force: true})
    }

    selecionarPossuiExigencia(){
        cy.get(el.seletorPossuiExigencia).click()
        cy.get(el.dropdownGLA).find('li').contains('Não').click({force: true})
    }

    selecionarPossuiRequerimento(){
        cy.get(el.seletorPossuiRequerimento).click()
        cy.get(el.dropdownGLA).find('li').contains('Sim').click({force: true})
    }

    selecionarPossuiLicenca(){
        cy.get(el.seletorPossuiLicenca).click()
        cy.get(el.dropdownGLA).find('li').contains('Sim').click({force: true})
    }

    clicarBotaoLimpar(){
        cy.get('[onclick="limpaPesquisa()"]').click({force: true})
    }

    clicarBotaoNovoCadastro(){
        cy.get('.btn-success').click()
    }

    validarLabelCadastroNovo(){
        cy.get('.box-title').should('have.text', 'Novo')
    }

    validarLabelCadastroRA(){
        cy.get(':nth-child(5) > :nth-child(1) > .form-group > label').should('have.text', 'R.A. *')
    }

    validarLabelCadastroProcessoSEIEmpreendimento(){
        cy.get(':nth-child(5) > :nth-child(2) > .form-group > label').should('have.text', 'Processo SEI Empreendimento *')
    }

    validarLabelCadastroTipo(){
        cy.get(':nth-child(5) > :nth-child(3) > .form-group > label').should('have.text', 'Tipo *')
    }

    validarLabelCadastroEmpreendimento(){
        cy.get(':nth-child(6) > .col-md-8 > .form-group > label').should('have.text', 'Empreendimento *')
    }
    validarLabelCadastroPrioridade(){
        cy.get(':nth-child(6) > .col-md-4 > .form-group > label').should('have.text', 'Prioridade *')
    }
    validarLabelCadastroNumeroURB(){
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > label').should('have.text', 'Número URB')
    }
    validarLabelCadastroNumeroNGB(){
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > label').should('have.text', 'Número NGB')
    }
    validarLabelCadastroNumeroMDE(){
        cy.get(':nth-child(7) > :nth-child(3) > .form-group > label').should('have.text', 'Número MDE')
    }
    validarLabelCadastroTitular(){
        cy.get(':nth-child(8) > .col-md-8 > .form-group > label').should('have.text', 'Titular *')
    }
    validarLabelCadastroArquivado(){
        cy.get('input[name="fl_arquivado"]').parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Arquivado');});
    }
    validarLabelCadastroConcluido(){
        cy.get('input[name="fl_concluido"]').parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Concluído');})
    }
    validarLabelCadastroSuplente(){
        cy.get(':nth-child(9) > :nth-child(1) > .form-group > label').should('have.text', 'Suplente *')
    }
    validarLabelCadastroEmpreendedorResponsavel(){
        cy.get(':nth-child(9) > :nth-child(2) > .form-group > label').should('have.text', 'Empreendedor Responsável *')
    }
    validarLabelCadastroNLotes(){
        cy.get(':nth-child(10) > :nth-child(1) > .form-group > label').should('have.text', 'Número de lotes')
    }
    validarLabelCadastroAreaTotal(){
        cy.get(':nth-child(10) > :nth-child(2) > .form-group > label').should('have.text', 'Área Total (ha)')
    }
    validarLabelCadastroResumoStatus(){
        cy.get('.control-label').should('have.text', 'Resumo do status')
    }
    selecionarRegiaoAdminContainer(){
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-I - BRASILIA ').click({force: true})
    }
    botaoLimpar(){
        cy.get('#reset').click()
    }
    digitarOrgaoProcessoSei(){
        cy.get('#cd_orgao_processo_sei').type('11111')
    }
    digitarNumeroProcessoSei(){
        cy.get('#nr_processo_sei').type('11111111')
    }
    digitarAnoProcessoSei(){
        cy.get('#aa_processo_sei').type('1111')
    }
    selecionarTpEmpreendimento(empreendimento){
        cy.get('#select2-tp_empreendimento-container').click()
        cy.get('.select2-results').find('li').contains(empreendimento).click({force: true})
    }
    digitarDescricaoEmpreendimento(){
        cy.get('#ds_empreendimento').type('teste')
    }
    selecionarTpPrioridade(){
        cy.get('#select2-tp_prioridade-container').click()
        cy.get('.select2-results').find('li').contains('Planejamento Estratégico ').click({force: true})
    }
    selecionarPessoaTitular(){
        cy.get('#select2-cd_pessoa_titular-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }
    selecionarPessoaSuplente(){
        cy.get('#select2-cd_pessoa_suplente-container').click()
        cy.get('.select2-results').find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }
    selecionarOrgaoResponsavel(){
        cy.get('#select2-cd_orgao_responsavel-container').click()
        cy.get('.select2-results').find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
    }
    clicarBotaoSalvar(){
        cy.get('#submit').click()
    }
    clicarModalConfirmar(){
        cy.get('.modal-footer > .btn-primary').click()
    }
    clicarModalOk(){
        cy.get('button.bootbox-accept').should('have.text', 'OK').click()
    }

    validarCampoEmpreendimentoRA(){
        cy.get(':nth-child(1) > [whidth="350px"] > b').should('have.text', 'RA:')
    }
    validarCampoEmpreendimentoEmpreendimento(){
        cy.get(':nth-child(2) > [whidth="350px"] > b').should('have.text', 'Empreendimento:')
    }
    validarCampoEmpreendimentoEmpreendedorResponsavel(){
        cy.get(':nth-child(3) > [whidth="350px"] > b').should('have.text', 'Empreendedor Responsável:')
    }
    validarCampoEmpreendimentoTipo(){
        cy.get(':nth-child(4) > [whidth="350px"] > b').should('have.text', 'Tipo:')
    }
    validarCampoEmpreendimentoSEI(){
        cy.get(':nth-child(5) > [whidth="350px"] > b').should('have.text', 'SEI Empreendimento:')
    }
    validarCampoEmpreendimentoPrioridade(){
        cy.get(':nth-child(6) > [whidth="350px"] > b').should('have.text', 'Prioridade:')
    }
    validarCampoEmpreendimentoAreaTotal(){
        cy.get(':nth-child(7) > [whidth="350px"] > b').should('have.text', 'Área Total (ha):')
    }
    validarCampoEmpreendimentoNLotes(){
        cy.get(':nth-child(8) > [whidth="350px"] > b').should('have.text', 'Número de lotes:')
    }
    validarCampoEmpreendimentoNURB(){
        cy.get(':nth-child(9) > [whidth="350px"] > b').should('have.text', 'Número URB:')
    }
    validarCampoEmpreendimentoNNGB(){
        cy.get(':nth-child(10) > [whidth="350px"] > b').should('have.text', 'Número NGB:')
    }
    validarCampoEmpreendimentoNMDE(){
        cy.get(':nth-child(11) > [whidth="350px"] > b').should('have.text', 'Número MDE:')
    }
    validarCampoEmpreendimentoTitular(){
        cy.get(':nth-child(12) > [whidth="350px"] > b').should('have.text', 'Titular:')
    }
    validarCampoEmpreendimentoSuplente(){
        cy.get(':nth-child(13) > [whidth="350px"] > b').should('have.text', 'Suplente:')
    }
    validarCampoEmpreendimentoArquivado(){
        cy.get(':nth-child(14) > [whidth="350px"] > b').should('have.text', 'Arquivado:')
    }
    validarCampoEmpreendimentoConcluido(){
        cy.get(':nth-child(15) > [whidth="350px"] > b').should('have.text', 'Concluído:')
    }
    validarCampoEmpreendimentoResumoStatus(){
        cy.get(':nth-child(16) > [whidth="350px"] > b').should('have.text', 'Resumo do Status:')
    }
    validarCampoEmpreendimentoObservacao(){
        cy.get(':nth-child(17) > [whidth="350px"] > b').should('have.text', 'Observação (processos):')
    }
    clicarBotaoVoltar(){
        cy.get('[onclick="window.history.back()"]').click()
        cy.get('[onclick="window.history.back()"]').click()
    }
    clicarBotaoPesquisar(){
        cy.get('#pesquisar').click()
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get('a[title="Visualizar"]').first().click();
    }
    irAbaEmpreendimento(){
        cy.get('#emprendimento-aba > .panel-footer > :nth-child(1) > a.btn').click()
    }
    selecionarRegiaoAdmin(){
        cy.get('#select2-cd_regiao_admin-container').click()
        cy.get('.select2-results').find('li').contains('RA-III - TAGUATINGA ').click({force: true})
    }
    limparOrgaoProcessoSei(){
        cy.get('#cd_orgao_processo_sei').clear();
    }
    limparNrProcessoSei(){
        cy.get('#nr_processo_sei').clear();
    }
    limparProcessoSei(){
        cy.get('#aa_processo_sei').clear();
    }
    clicarBotaoDeleteEmpreendimento(){
        cy.get('#btn-delete-empreendimento').click()
    }
    confirmar(){
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }

}




export default new empreendimento()