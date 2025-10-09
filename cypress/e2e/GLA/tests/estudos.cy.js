/// <reference types="cypress" />

import estudos from "../../../support/pages/estudos";
//destualizados:
// EU019 - US053 - (RN055,RN056)
// EU019.2 - US053 - (RN232,RN234)
// EU019.4 - US053 - (RN234,RN243)
// EU020 - US054 - (RN147)
//EU020.1 - US054 - (RN233)
function cadastroDadosGerais(tipo,natureza,objeto,status,titular,suplente,valor){
    estudos.selecionarTpEstudoContainer()
    estudos.seletorDropdown(tipo)
    estudos.selecionarTpNaturezaContainer()
    estudos.seletorDropdown(natureza)
    estudos.selecionarTpObjetoContainer()
    estudos.seletorDropdown(objeto)
    estudos.selecionarTpStatusContainer()
    estudos.seletorDropdown(status)
    estudos.selecionarCdPessoaTitularContainer()
    estudos.seletorDropdown(titular)
    estudos.selecionarCdPessoaSuplenteContainer()
    estudos.seletorDropdown(suplente)
    estudos.valorEstimado(valor)
    estudos.clicarBotaoSalvar()
    estudos.clicarBotaoContinuar()
    estudos.clicarBotaoOk()
}
function pesquisarEstudo(pesTitular,pesSuplente){
    estudos.irAbaEstudos()
    estudos.selecionarPesTitular()
    estudos.seletorDropdown(pesTitular)
    estudos.selecionarPesSuplente()
    estudos.seletorDropdown(pesSuplente)
    estudos.botaoPesquisar()
}
function visualizarEstudo(pesTitular,pesSuplente){
    estudos.irAbaEstudos()
    estudos.selecionarPesTitular()
    estudos.seletorDropdown(pesTitular)
    estudos.selecionarPesSuplente()
    estudos.seletorDropdown(pesSuplente)
    estudos.botaoPesquisar()
    estudos.clicarPrimeiroBotaoVisualizar()
}
function excluir(){
    estudos.clicarPrimeiroBotaoExcluir()
    estudos.clicarModalOk()
}
function cadastrarExigencia(ra,empreendimento,demanda,exigencia){
    estudos.selecionarRegiaoAdminExi()
    estudos.seletorDropdown(ra)
    cy.wait(1000)
    estudos.selecionarEmpreendimentoExi() //EU019.2 - US053 - RN231
    estudos.seletorDropdown(empreendimento)
    cy.wait(1000)
    estudos.selecionarDemandaContainer()
    estudos.seletorDropdown(demanda)
    cy.wait(1000)
    estudos.selecionarExigenciaContainer()
    estudos.exigenciasHabilitado() //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
    estudos.validarExigencia(exigencia) //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
    estudos.seletorDropdown(exigencia)
    estudos.clicarBotaoAdicionarExigencia()
}
function selecionaTipoNatureza(tipo,natureza){
    estudos.selecionarTpEstudoContainer()
    estudos.seletorDropdown(tipo)
    estudos.selecionarTpNaturezaContainer()
    estudos.validaDropdownObjeto(natureza)
}
describe('estudos', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(1980, 1200)
    })

    it('Incluir Requerimento', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.validarTituloPendencia()
        estudos.irAbaEstudos()

        //Limpar
        estudos.selecionarRA()
        estudos.limparFormularioPesquisa()

        //Cadastro Requerimento
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        estudos.requerimentosDesabilitado() //EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
        estudos.selecionarRegiaoAdmin()
        estudos.seletorDropdown('RA-I - BRASILIA')
        estudos.selecionarEmpreendimento()
        estudos.seletorDropdown('12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        estudos.selecionarTpRequerimento()
        estudos.seletorDropdown('Nova Permissão')
        estudos.requerimentosHabilitado() //EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
        estudos.selecionarCdRequerimento()
        estudos.validarRequerimento('88 - LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA')//EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
        estudos.seletorDropdown('88 - LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA')
        estudos.clicarBotaoAdicionarRequerimento()
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')

        //Voltar
        estudos.clicarBotaoVoltar()

        //Pesquisar
        estudos.selecionarPesTitular()
        estudos.seletorDropdown('PAULO CESAR COSTA')
        estudos.selecionarPesSuplente()
        estudos.seletorDropdown('LUCAS DIAS DE LIMA')
        estudos.botaoPesquisar()

        //Edição
        estudos.clicarPrimeiroBotaoEditar()
        estudos.validarTituloEditar()
        estudos.seletorPessoaTitular()
        estudos.seletorDropdown('NELSON ALVES LOUZEIRO JUNIOR')
        estudos.seletorPessoaSuplente()
        estudos.seletorDropdown('PEDRO RAFAEL MANDAI')
        estudos.clicarBotaoSalvar()
        estudos.clicarBotaoContinuar()
        estudos.clicarBotaoOk()
        cy.wait(6000)

        //Salvamento
        // estudos.irAbaEstudos()
        // estudos.selecionarPesTitular()
        // estudos.seletorDropdown('NELSON ALVES LOUZEIRO JUNIOR')
        // estudos.selecionarPesSuplente()
        // estudos.seletorDropdown('PEDRO RAFAEL MANDAI')
        // estudos.botaoPesquisar()
        pesquisarEstudo('NELSON ALVES LOUZEIRO JUNIOR','PEDRO RAFAEL MANDAI')

        //EXCLUIR
        excluir()
    })
    it('Incluir exigência', () => {
        //CADASTRO
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        estudos.exigenciasDesabilitado() //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
        estudos.clicarBotaoAdicionarExigencia()
        estudos.validarMSGObrigatorios() //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
        estudos.clicarBotaoOkObrigatorios()
        cadastrarExigencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','LP nº 737/1998','82|1|----------------- ÇÇÇ Â ÂÂ' )
        cadastrarExigencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','LP nº 212/2025','363|10454457|teste' ) //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')


        //EXCLUIR
        pesquisarEstudo('NELSON ALVES LOUZEIRO JUNIOR','PEDRO RAFAEL MANDAI')
        excluir()
    })
    it('Campos de Texto', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.validarTituloPendencia()
        estudos.irAbaEstudos()
        //validação dos campos na tela de estudos
        estudos.validarLabelEstudo()      // -- US033 - RN015 identificação/título--
        estudos.validarLabelRA()
        estudos.validarLabelEmpreendimento()
        estudos.validarLabelDemanda()
        estudos.validarLabelListaPendencia()
        estudos.validarLabelTipo()
        estudos.validarLabelNatureza()
        estudos.validarLabelObjeto()
        estudos.validarLabelDescricaoObjeto()
        estudos.validarLabelStatus()
        estudos.validarLabelPrevisaoConclusao()
        estudos.validarLabelValorEstimado()
        estudos.validarLabelDataElaboracao()
        estudos.validarLabelTitular()
        estudos.validarLabelSuplente()
        estudos.validarLabelDadosContrato()
        estudos.validarLabelNContrato()
        estudos.validarLabelAnoContrato()
        estudos.validarLabelContratada()
        estudos.validarLabelValorContratoInicial()
        estudos.validarLabelValorContratoFinal()
        estudos.validarLabelInicioVigenciaContrato()
        estudos.validarLabelFimVigenciaContrato()
        estudos.validarLabelDescricaoObjetoContrato()
        estudos.validarLabelDadosOrdem()
        estudos.validarLabelNumeroOS()
        estudos.validarLabelAnoOS()
        estudos.validarLabelUnidadeResponsavelOS()
        estudos.validarAriaLabelEmpreendimento()
        estudos.validarAriaLabelReferencia() //EU019 - US053 - RN095 - TABELA DE RESULTADOS /ESTUDOS
        estudos.validarAriaLabelObjeto()
        estudos.validarAriaLabelStatus()
        estudos.validarAriaLabelContratoOS()
        estudos.validarAriaLabelAcao()

        //Novo cadastro
        estudos.botaoNovoCadastro()
        estudos.validarTextoNovoCadastro()
        estudos.validarTextoReferencias()
        estudos.validarTextoIncluirRequerimento()
        estudos.validarLabelCadastroRA()
        estudos.validarLabelCadastroEmpreendimento()
        estudos.validarLabelCadastroTipoRequerimento()
        estudos.validarLabelCadastroRequerimentos()
        estudos.validarLabelCadastroRequerimentosReferenciados()
        estudos.validarLabelCadastroRequerimento()
        estudos.validarLabelCadastroIncluirExigencia()
        estudos.validarFormCadastroRA()
        estudos.validarFormCadastroEmpreendimento()
        estudos.validarFormCadastroDemanda()
        estudos.validarFormCadastroExigencias()
        estudos.validarFormCadastroExigenciasRef()
        estudos.validarTabelaCadastroN()
        estudos.validarTabelaCadastroDescricao()
        estudos.validarTabelaCadastroAcao()
        estudos.validarLabelCadastroDadosGerais()
        estudos.validarFormCadastroTipo()
        estudos.validarFormCadastroNatureza()
        estudos.validarLabelCadastroObjeto()
        estudos.validarFormCadastroDescricao()
        estudos.validarFormCadastroAreaPoligonal()
        estudos.validarFormCadastroStatus()
        estudos.validarFormCadastroDescricaoStatus()
        estudos.validarFormCadastroOrgaoExterno()
        estudos.validarFormCadastroValorEstimado()
        estudos.validarFormCadastroProcessoSEI()
        estudos.validarFormCadastroTitular()
        estudos.validarFormCadastroSuplente()
        estudos.validarFormCadastroCaminhoDepart()
        estudos.validarFormCadastroDataElaboracao()
        estudos.validarFormCadastroPrevisaoConclusaoEstudo()
        estudos.validarFormCadastroDadosContrato()
        estudos.validarFormCadastro()
        estudos.validarFormCadastroNumeroContrato()
        estudos.validarFormCadastroAnoContrato()
        estudos.validarFormCadastroContratada()
        estudos.validarFormCadastroValorContratoInicial()
        estudos.validarFormCadastroValorContrato()
        estudos.validarFormCadastroInicioVigenciaContrato()
        estudos.validarFormCadastroFimVigenciaContrato()
        estudos.validarFormCadastroDescricaObjetoContrato()
        estudos.validarFormCadastroDadosOrdemServico()
    })
    it('Campos Obrigatórios', () => {
        //EU019 - US053 - RN047 - VALIDAÇÃO DOS CAMPOS OBRIGATÓRIOS
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoSalvar()
        estudos.clicarBotaoContinuar()
        estudos.clicarBotaoOkObrigatorios()
        estudos.referenciaObrigatoria() //EU019.2 - US053 - RN230 - Estudos - Incluir pendência
        estudos.tipoDeEstudoObrigatoria()
        estudos.naturezaObrigatoria()
        estudos.objetoObrigatoria()
        estudos.statusObrigatoria()
        estudos.titularObrigatoria()
        estudos.suplenteObrigatoria()
        estudos.clicarBotaoAdicionarRequerimento()
        estudos.MSGRequerimentoObrigatorio() //EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
        estudos.clicarBotaoOkObrigatorios()
    })

    it('Pagamentos', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        cadastrarExigencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','LP nº 737/1998','82|1|----------------- ÇÇÇ Â ÂÂ' )
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA')
        estudos.adicionarPagamento('2020-01-01','10000000000000') //12 caracteres antes da virgula
    })
    it.only('Tipo/Natureza/Status', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        selecionaTipoNatureza('Obra/Serviço','Licitação') //EU023 - US057 - RN100 - NATUREZA/ ESTUDOS
        selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')
        selecionaTipoNatureza('Compra de Bens','Licitação')
        selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')

        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Obra/Serviço')
        estudos.clicaObjeto()
        estudos.validaDropdownObjeto([
            "Elaboração de Inventário Florestal",
            "Resgate de Flora",
            "Estudo de Fauna",
            "Programa de Monitoramento de Fauna",
            "Plantio de gramado",
            "Elaboração de PRAD",
            "Execução de PRAD",
            "Elaboração de EIA/RIMA",
            "Elaboração de PCA",
            "Execução de PCA",
            "Elaboração de RCA",
            "Elaboração de PCA/RCA",
            "Elaboração de PEA",
            "Execução de PEA",
            "Elaboração de RIAC",
            "Elaboração de RIAP",
            "Elaboração de RIVI",
            "Elaboração de RAS",
            "Elaboração de PGAI",
            "Execução de PGAI",
            "Elaboração de PGAO",
            "Execução de PGAO",
            "Elaboração de RIPA",
            "Elaboração de Plano de Manejo",
            "Elaboração de Zoneamento",
            "Elaboração de Plano de Monitoramento de Recursos Hídricos",
            "Execução de Monitoramento de Recursos Hídricos",
            "Elaboração de Plano de Monitoramento Ambiental",
            "Acompanhamento de Condicionantes de Licenças",
            "Execução de Auditoria e Fiscalização",
            "Estudo de Viabilidade",
            "Estudo Arqueológico",
            "Investigação do Solo e Subsolo",
            "Estudo de Tráfego",
            "Estudo para Certificação",
            "Estudo para cálculo da Compensação Florestal Pretérita",
            "Estudo para  atualização da compensação florestal ao Decreto nº 39.469/2018",
            "Monitoramento de Ruídos",
            "Mapeamento de Risco Geotécnico",
            "Elaboração de Plano de Arborização e Paisagismo",
            //"Elaboração de Projeto de Arborização e Paisagismo",
            "Execução de Projeto de Arborização e Paisagismo",
            "Plantio de Mudas ou Semeadura",
            "Manutenção de Gramado",
            "Identificação de Lançamentos Irregulares",
            "Estudo para Desativação de Tanque de Combustível",
            "Elaboração de Projeto de Aproveitamento de Água",
            "Execução de Limpeza de Vias",
            "Serviços de Vigilância",
            "Cercamento",
            "Mapeamento com Drone",
            "Projeto de Engenharia (não listado)",
            "Obra de Engenharia (não listada)",
            "Serviço de Engenharia (não listado)"
        ])
        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Compra de Bens')
        estudos.clicaObjeto()
        estudos.validaDropdownObjeto([
            "Veículo",
            "Mobiliário",
            "Máquinas / Equipamentos / Materiais / Insumos"
        ])
        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Dação em Pagamento')
        estudos.digitaObjeto('Texto livre')

        selecionaTipoNatureza('Obra/Serviço','Licitação')
        estudos.selecionarTpStatusContainer()
        estudos.validaDropdownStatus([
            "A licitar",
            "Em licitação",
            "Contratado, a solicitar OS",
            "OS Solicitada",
            "Em execução",
            "Pausado/Suspenso",
            "Executado",
            "Em análise por órgão externo",
            "Atendendo exigências externas",
            "Aprovado por órgão externo"
        ])

        selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')
        estudos.validaDropdownStatus([
            "Não iniciado",
            "Em execução",
            "Pausado/Suspenso",
            "Executado",
            "Em análise por órgão externo",
            "Atendendo exigências externas",
            "Aprovado por órgão externo"
        ])

        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Compra de Bens')
        estudos.validaDropdownStatus([
            "A licitar",
            "Em licitação",
            "Contratado, a emitir OS",
            "OS Solicitada",
            "Em execução",
            "Pausado/Suspenso",
            "Executado",
            "Em análise por órgão externo",
            "Atendendo exigências externas",
            "Aprovado por órgão externo"
        ])

        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Dação em Pagamento')
        estudos.validaDropdownStatus([
            "Não iniciado",
            "Em execução",
            "Pausado/Suspenso",
            "Executado",
            "Em análise por órgão externo",
            "Atendendo exigências externas",
            "Aprovado por órgão externo"
        ])
    })
})
