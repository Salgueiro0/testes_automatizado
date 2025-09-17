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
        cy.get(el.botaoLimpar).click({force: true})
    }

    clicarBotaoNovoCadastro(){
        cy.get(el.botaoNovoCadastro).click()
    }

    validarLabelCadastroNovo(){
        cy.get(el.labelCadastroNovo).should('have.text', 'Novo')
    }

    validarLabelCadastroRA(){
        cy.get(el.labelCadastroRA).should('have.text', 'R.A. *')
    }

    validarLabelCadastroProcessoSEIEmpreendimento(){
        cy.get(el.labelCadastroProcesSEIEmpreend).should('have.text', 'Processo SEI Empreendimento *')
    }

    validarLabelCadastroTipo(){
        cy.get(el.labelCadastroTipo).should('have.text', 'Tipo *')
    }

    validarLabelCadastroEmpreendimento(){
        cy.get(el.labelCadastroEmpreend).should('have.text', 'Empreendimento *')
    }
    validarLabelCadastroPrioridade(){
        cy.get(el.labelCadastroPrioridade).should('have.text', 'Prioridade *')
    }
    validarLabelCadastroNumeroURB(){
        cy.get(el.labelCadastroNumeroURB).should('have.text', 'Número URB')
    }
    validarLabelCadastroNumeroNGB(){
        cy.get(el.labelCadastroNumeroNGB).should('have.text', 'Número NGB')
    }
    validarLabelCadastroNumeroMDE(){
        cy.get(el.labelCadastroNumeroMDE).should('have.text', 'Número MDE')
    }
    validarLabelCadastroTitular(){
        cy.get(el.labelCadastroTitular).should('have.text', 'Titular *')
    }
    validarLabelCadastroArquivado(){
        cy.get(el.labelCadastroArquivado).parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Arquivado');});
    }
    validarLabelCadastroConcluido(){
        cy.get(el.labelCadastroConcluido).parent('label').invoke('text').then((text) => {expect(text.trim()).to.eq('Concluído');})
    }
    validarLabelCadastroSuplente(){
        cy.get(el.labelCadastroSuplente).should('have.text', 'Suplente *')
    }
    validarLabelCadastroEmpreendedorResponsavel(){
        cy.get(el.labelCadastroEmpreendedorResponsavel).should('have.text', 'Empreendedor Responsável *')
    }
    validarLabelCadastroNLotes(){
        cy.get(el.labelCadastroNLotes).should('have.text', 'Número de lotes')
    }
    validarLabelCadastroAreaTotal(){
        cy.get(el.labelCadastroAreaTotal).should('have.text', 'Área Total (ha)')
    }
    validarLabelCadastroResumoStatus(){
        cy.get(el.labelCadastroResumoStatus).should('have.text', 'Resumo do status')
    }
    selecionarRegiaoAdminContainer(){
        cy.get(el.regiaoAdminContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('RA-I - BRASILIA ').click({force: true})
    }
    botaoLimpar(){
        cy.get(el.botaoReset).click()
    }
    digitarOrgaoProcessoSei(){
        cy.get(el.orgaoProcessoSei).type('11111')
    }
    digitarNumeroProcessoSei(){
        cy.get(el.nrProcessoSei).type('11111111')
    }
    digitarAnoProcessoSei(){
        cy.get(el.anoProcessoSei).type('1111')
    }
    selecionarTpEmpreendimento(empreendimento){
        cy.get(el.tpEmpreendimentoContainer).click()
        cy.get(el.dropdownGLA).find('li').contains(empreendimento).click({force: true})
    }
    digitarDescricaoEmpreendimento(){
        cy.get(el.dsEmpreendimento).type('teste')
    }
    selecionarTpPrioridade(){
        cy.get(el.tpPrioridadeContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('Planejamento Estratégico ').click({force: true})
    }
    selecionarPessoaTitular(){
        cy.get(el.pessoaTitularContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }
    selecionarPessoaSuplente(){
        cy.get(el.pessoaSuplenteContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('ALLAN GUIMARAES DIOGENES ').click({force: true})
    }
    selecionarOrgaoResponsavel(){
        cy.get(el.orgaoResponsavelContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('TERRACAP - COMPANHIA IMOBILIARIA DE BRASILIA ').click({force: true})
    }
    clicarBotaoSalvar(){
        cy.get(el.botaoSalvar).click()
    }
    clicarModalConfirmar(){
        cy.get(el.modalConfirmar).click()
    }
    clicarModalOk(){
        cy.get(el.modalOk).should('have.text', 'OK').click()
    }

    validarCampoEmpreendimentoRA(){
        cy.get(el.campoEmpreendimentoRA).should('have.text', 'RA:')
    }
    validarCampoEmpreendimentoEmpreendimento(){
        cy.get(el.campoEmpreendimentoEmpreendimento).should('have.text', 'Empreendimento:')
    }
    validarCampoEmpreendimentoEmpreendedorResponsavel(){
        cy.get(el.campoEmpreendimentoEmpreendedorResponsavel).should('have.text', 'Empreendedor Responsável:')
    }
    validarCampoEmpreendimentoTipo(){
        cy.get(el.campoEmpreendimentoTipo).should('have.text', 'Tipo:')
    }
    validarCampoEmpreendimentoSEI(){
        cy.get(el.campoEmpreendimentoSEI).should('have.text', 'SEI Empreendimento:')
    }
    validarCampoEmpreendimentoPrioridade(){
        cy.get(el.campoEmpreendimentoPrioridade).should('have.text', 'Prioridade:')
    }
    validarCampoEmpreendimentoAreaTotal(){
        cy.get(el.campoEmpreendimentoAreaTotal).should('have.text', 'Área Total (ha):')
    }
    validarCampoEmpreendimentoNLotes(){
        cy.get(el.campoEmpreendimentoNLotes).should('have.text', 'Número de lotes:')
    }
    validarCampoEmpreendimentoNURB(){
        cy.get(el.campoEmpreendimentoNURB).should('have.text', 'Número URB:')
    }
    validarCampoEmpreendimentoNNGB(){
        cy.get(el.campoEmpreendimentoNNGB).should('have.text', 'Número NGB:')
    }
    validarCampoEmpreendimentoNMDE(){
        cy.get(el.campoEmpreendimentoNMDE).should('have.text', 'Número MDE:')
    }
    validarCampoEmpreendimentoTitular(){
        cy.get(el.campoEmpreendimentoTitular).should('have.text', 'Titular:')
    }
    validarCampoEmpreendimentoSuplente(){
        cy.get(el.campoEmpreendimentoSuplente).should('have.text', 'Suplente:')
    }
    validarCampoEmpreendimentoArquivado(){
        cy.get(el.campoEmpreendimentoArquivado).should('have.text', 'Arquivado:')
    }
    validarCampoEmpreendimentoConcluido(){
        cy.get(el.campoEmpreendimentoConcluido).should('have.text', 'Concluído:')
    }
    validarCampoEmpreendimentoResumoStatus(){
        cy.get(el.campoEmpreendimentoResumoStatus).should('have.text', 'Resumo do Status:')
    }
    validarCampoEmpreendimentoObservacao(){
        cy.get(el.campoEmpreendimentoObservacao).should('have.text', 'Observação (processos):')
    }
    clicarBotaoVoltar(){
        cy.get(el.botaoVoltar).click()
        cy.get(el.botaoVoltar).click()
    }
    clicarBotaoPesquisar(){
        cy.get(el.botaoPesquisar).click()
    }

    clicarPrimeiroBotaoVisualizar(){
        cy.get(el.primeiroBotaoVisualizar).first().click();
    }
    irAbaEmpreendimento(){
        cy.get(el.botaoEmpreendimento).click()
    }
    selecionarRegiaoAdmin(){
        cy.get(el.regiaoAdminContainer).click()
        cy.get(el.dropdownGLA).find('li').contains('RA-III - TAGUATINGA ').click({force: true})
    }
    limparOrgaoProcessoSei(){
        cy.get(el.orgaoProcessoSei).clear();
    }
    limparNrProcessoSei(){
        cy.get(el.nrProcessoSei).clear();
    }
    limparProcessoSei(){
        cy.get(el.anoProcessoSei).clear();
    }
    clicarBotaoDeleteEmpreendimento(){
        cy.get(el.botaoDeletarEmpreendimento).click()
    }
    confirmar(){
        cy.get(el.modalDialogConfirmar).click()
    }
    clicarAbaDemanda(){cy.get('.demandas-aba').click()}
    clicarNovaDemanda(){cy.get(':nth-child(1) > .box-body > .panel > .panel-body > .panel-footer > .btn-toolbar > .btn-success').click()}
    clicarVoltar(){cy.get('[onclick="window.history.back()"]').click()}
}
export default new empreendimento()