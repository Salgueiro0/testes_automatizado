/// <reference types="cypress" />

import estudos from "../../../support/pages/estudos";
//Inválidos:
//GLA - EU018 - US052 - RN102 - TITULAR/ SUPLENTE
//EU020 - US054 - RN115 - CAMPOS AUTOMÁTICOS SEM DISPARO DE E-MAIL
//EU020 - US054 - RN146
//EU025 - US059 - RN121
//EU018 - US052 - RN059
//EU018 - US052 - RN232
//EU039 - US074 - RN140

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
function visualizarEstudo(pesTitular,pesSuplente,filtro=null){
    estudos.irAbaEstudos()
    estudos.selecionarPesTitular()
    estudos.seletorDropdown(pesTitular)
    estudos.selecionarPesSuplente()
    estudos.seletorDropdown(pesSuplente)
    estudos.botaoPesquisar()
    estudos.filtrarEstudo(filtro)
    estudos.clicarPrimeiroBotaoVisualizar()
}
function cadastrarExigencia(ra,empreendimento,demanda,exigencia){
    estudos.selecionarRegiaoAdminExi()
    estudos.seletorDropdown(ra)
    cy.wait(1000)
    estudos.selecionarEmpreendimentoExi() //EU019.2 - US053 - RN231
    estudos.seletorDropdown(empreendimento)
    estudos.selecionarEmpreendimentoExi()
    estudos.seletorDropdown(empreendimento)
    cy.wait(1000)
    estudos.selecionarDemandaContainer()
    estudos.seletorDropdown(demanda)
    cy.wait(1000)
    estudos.selecionarExigenciaContainer()
    estudos.exigenciasHabilitado() //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA / EU018 - US052 - RN098 - COMBO EXIGÊNCIAS
    estudos.validarExigencia(exigencia) //EU019 - US053 - RN058 - INCLUIR EXIGÊNCIA
    estudos.seletorDropdown(exigencia)
    estudos.clicarBotaoAdicionarExigencia()
}
function selecionaTipoNatureza(tipo,natureza){
    estudos.selecionarTpEstudoContainer()
    estudos.seletorDropdown(tipo)
    cy.wait(1000)
    estudos.selecionarTpNaturezaContainer()
    estudos.validaDropdownObjeto(natureza)
    cy.wait(2000)
}
function visualizarEmpreendimento(){
    estudos.irEmpreendimentos()
    estudos.pesquisarEstudo()
    estudos.pesquisarEstudo()
    estudos.filtrar('Polos 06, 07, 08')
    estudos.clicarPrimeiroBotaoVisualizar()
    estudos.clicarEstudos()
    estudos.validarTituloEmpreendimento()
}
function referenciarRequerimento(ra,empreendimento,tipoRequerimento,requerimento){
    estudos.selecionarRegiaoAdmin()
    estudos.seletorDropdown(ra)
    estudos.selecionarEmpreendimento()
    estudos.seletorDropdown(empreendimento)
    estudos.selecionarTpRequerimento()
    estudos.seletorDropdown(tipoRequerimento)
    estudos.requerimentosHabilitado() //EU019 - US053 - RN057 - INCLUIR REQUERIMENTO /  EU018 - US052 - RN097 - COMBO REQUERIMENTOS
    estudos.selecionarCdRequerimento()
    estudos.validarRequerimento(requerimento)//EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
    estudos.seletorDropdown(requerimento)
    estudos.clicarBotaoAdicionarRequerimento()
}
function excluirDadosDetalhados(posicaoExcluir){
    estudos.clicarExcluirDadosDetalhados(posicaoExcluir)
    estudos.clicarConfirmarExcluirDadosDetalhados()
    estudos.botaoOkProduto()
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

        //Cadastro
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        estudos.requerimentosDesabilitado() //EU019 - US053 - RN057 - INCLUIR REQUERIMENTO
        referenciarRequerimento('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','Nova Permissão','88 - LP - Licença Prévia - Ofício nº 6/1565 - ACJUR p/ ADASA')
        referenciarRequerimento('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','Prorrogação / Renovação','39 - LP - Licença Prévia - n° 737/1998 - Ofício nº 123/2010 - ACJUR p/ ABDI')
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')

        //Voltar
        estudos.clicarBotaoVoltar()

        //Pesquisar
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA','Licença Prévia')
        estudos.validarTabelaReq() //EU020 - US054 - RN147 - VISUALIZAR REQUERIMENTO

        //Edição
        estudos.botaoEditar()
        estudos.valorEstimado(4000)
        estudos.clicarBotaoSalvar()
        estudos.clicarBotaoContinuar()
        estudos.clicarBotaoOk()

        estudos.excluirEstudo()
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

        //EDITAR
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA','LP n° 212/2025')
        estudos.validaTabelaExigencia() //EU020 - US054 - RN147 - VISUALIZAR EXIGÊNCIA
        estudos.validaTitularReq() // EU018 - US052 - RN102 - TITULAR/ SUPLENTE
        estudos.validaSuplenteReq() // EU018 - US052 - RN102 - TITULAR/ SUPLENTE

        //EXCLUIR
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA')
        estudos.excluirEstudo()
    })
    it('Incluir pendência', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        estudos.adicionarSemCamposObrigatorios() //EU021.3 - US055 - Pendências obrigatório
        //EU018 - US052 - RN233
        estudos.referenciarPendencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','Lista de Pendências para obter (LP)','Audiência Pública - teste - Cumprida') //EU018 - US052 - RN233
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')

        //EXCLUIR
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA')
        estudos.excluirEstudo()
    })
    it.only('Campos de Texto', () => {
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

        //Caminhos para estudos
        //EU022 - US056 - RN108
        visualizarEmpreendimento()
        estudos.validaIdentificacao()
        estudos.validaTabela() //EU023 - US057 - RN113
        estudos.validaTabelaEmpreendimento() //EU023 - US057 - RN116

        estudos.visualizarDemandas()
        estudos.validaIdentificacao()
        estudos.validaTabela() //EU023 - US057 - RN113

        estudos.visualizarRequerimento()
        estudos.validaIdentificacao()
        estudos.validaTabela() //EU023 - US057 - RN113

        estudos.visualizarExigencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago')
        estudos.validaIdentificacao()
        estudos.validaTabela() //EU023 - US057 - RN113

        visualizarEstudo('ALLAN GUIMARAES DIOGENES','ALLAN GUIMARAES DIOGENES')
        //DADOS GERAIS
        //EU020 - US054 - RN119 - COLUNA FIXA - VISUALIZAÇÃO
        estudos.validarDGTipo()
        estudos.validarDGNatureza()
        estudos.validarDGObjeto()
        estudos.validarDGDescricaoObjeto()
        estudos.validarDGAreaPoligonal()
        estudos.validarDGStatus()
        estudos.validarDGDescStatus()
        estudos.validarDGOrgaoExAvaliador()
        estudos.validarDGProcessoSEI()
        estudos.validarDGTitular()
        estudos.validarDGSuplente()
        estudos.validarDGCaminhoDepart()
        estudos.validarDGDataElab()
        estudos.validarDGPrevConclusaoEstudo()
        estudos.validarDGObservacoes()
        estudos.validarDGValorEstudo()
        estudos.validarDGValorPagoEstudo()
        estudos.validarDGSaldoEstudo()

        //DADOS DETALHADOS
        estudos.validarAcordeoes( //EU018.3 - US052
            'Referências',
            'Dados Gerais',
            'Dados do Contrato',
            'Vínculos CA e CF',
            'Produto / Subproduto / Serviço',
            'Dados da OS da Empresa',
            'Pagamento do Estudo'
        )
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
        //
        //
        // //DADOS DETALHADOS
        // estudos.irAbaEstudos()
        // estudos.pesquisarEstudo()
        // estudos.clicarPrimeiroBotaoVisualizar()
        //
        // //PRODUTOS  EU018 - US052 - Obrigatório
        // estudos.expandirProduto()
        // estudos.botaoAdicionarProduto()
        //
        // //tipo
        // estudos.clicarTipoProduto()
        // estudos.seletorDropdown('PRODUTO')
        // estudos.botaoSalvarProduto()
        // estudos.botaoOkProduto()
        // estudos.validaMSGPreenchaCampos()
        // estudos.limparTipoProduto()
        //
        // //número
        // estudos.digitarNumeroProduto(1)
        // estudos.botaoSalvarProduto()
        // estudos.botaoOkProduto()
        // estudos.validaMSGPreenchaCampos()
        // estudos.limparNumero()
        //
        // //nome
        // estudos.digitarNomeProduto('a'.repeat(231)) //EU018 - US052 - Limite de 250 caracteres
        // estudos.botaoSalvarProduto()
        // estudos.botaoOkProduto()
        // estudos.validaMSGPreenchaCampos()
        // estudos.limparNome()
        //
        // //status
        // estudos.selecionarStatusProduto()
        // estudos.seletorDropdown('Não Executado')
        // estudos.botaoSalvarProduto()
        // estudos.botaoOkProduto()
        // estudos.validaMSGPreenchaCampos()
        // estudos.limparStatus()
        //
        // estudos.fecharModalProduto()
        //
        // //DADOS DA OS  EU018 - US052 - Obrigatório
        // estudos.expandirDadosOS()
        // estudos.clicarAdicionar()
        //
        // //produto
        // estudos.selecionarProduto()
        // estudos.seletorDropdown('PRODUTO 1 - teste - -')
        // estudos.adicionarProduto()
    })

    it('Pagamentos e Produtos', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        cadastrarExigencia('RA-I - BRASILIA','12 - Polos 06, 07, 08 - Projeto Orla - Beira Lago','LP nº 737/1998','82|1|----------------- ÇÇÇ Â ÂÂ' )
        cadastroDadosGerais('Obra/Serviço','Licitação','Paisagismo','A licitar','PAULO CESAR COSTA','LUCAS DIAS DE LIMA','1000')
        visualizarEstudo('PAULO CESAR COSTA','LUCAS DIAS DE LIMA')

         //ADICIONAR PRODUTO
        estudos.expandirProduto()
        estudos.botaoAdicionarProduto()
        estudos.clicarTipoProduto()
        estudos.seletorDropdown('PRODUTO')
        estudos.digitarNumeroProduto(1)
        estudos.digitarNomeProduto('teste') //EU018 - US052 - Limite de 250 caracteres
        estudos.selecionarStatusProduto()
        estudos.seletorDropdown('Não Executado')
        estudos.botaoSalvarProduto()
        estudos.botaoOkProduto()

        //ADICIONAR PAGAMENTO
        estudos.expandirPagamento()
        estudos.botaoAdicionarPagamento()
        estudos.digitarDataPagamento('2020-01-01')
        estudos.digitarValorPagamento('10000000000000') //12 caracteres antes da virgula
        estudos.selecionarProdutoPagamento()
        estudos.seletorDropdown('PRODUTO 1 - teste - -')
        estudos.digitarDescricaoPagamentos('a'.repeat(500) + 'Mais de 500 caracteres') //EU018 - US052 Limitado a 500 caracteres
        estudos.botaoSalvarPagamento()
        estudos.botaoOkPagamento()
        estudos.validaSubtracao() //EU020.2 - US054 - RN242

        //ADICIONAR DADOS DA OS DA EMPRESA
         estudos.expandirDadosOS()
        estudos.clicarAdicionar()
        estudos.selecionarProduto()
        estudos.seletorDropdown('PRODUTO 1 - teste - -')
        estudos.adicionarProduto()
        estudos.digitarNumero(1)
        estudos.digitarAno(2000) //4 dígitos - EU018 - US052
        estudos.botaoSalvar()
        estudos.botaoOk()

        estudos.validaMSGImpossivelExcluir() //EU044 - US076 - EXCLUIR ESTUDOS - RN148 - Estudos - Botão Excluir - EU018 - US052 - RN234 - Estudos - Regras de Exclusão
        excluirDadosDetalhados(1)
        excluirDadosDetalhados(2)
        excluirDadosDetalhados(0)

        estudos.excluirEstudo()
    })
    it('Tipo/Natureza/Status', () => {
        //EU023 - US057 - RN0101 - STATUS/ESTUDOS
        estudos.irParaGLA()
        estudos.login()
        estudos.irAbaEstudos()
        estudos.botaoNovoCadastro()
        estudos.clicarBotaoMais()
        selecionaTipoNatureza('Obra/Serviço','Licitação') //EU023 - US057 - RN100 - NATUREZA/ ESTUDOS
        selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')
        selecionaTipoNatureza('Compra de Bens','Licitação')
        selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')

        //EU023 - US057 - RN099
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
        //EU018 - US052 - RN0101
        estudos.selecionaTipoNatureza('Obra/Serviço','Licitação')
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
        estudos.seletorDropdown('A licitar')
        estudos.dadosContratoDesab() //EU018 - US052 - RN144 - DADOS DO CONTRATO / DADOS DA ORDEM DE SERVIÇO

        estudos.selecionaTipoNatureza('Obra/Serviço','Elaborado internamente')
        estudos.selecionarTpStatusContainer()
        estudos.validaDropdownStatus([
            "Não iniciado",
            "Em execução",
            "Pausado/Suspenso",
            "Executado",
            "Em análise por órgão externo",
            "Atendendo exigências externas",
            "Aprovado por órgão externo"
        ])
        estudos.dadosContratoDesab() //EU018 - US052 - RN144 - DADOS DO CONTRATO / DADOS DA ORDEM DE SERVIÇO

        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Compra de Bens')
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
        estudos.dadosContratoHabilitado() //EU018 - US052 - RN144 - DADOS DO CONTRATO / DADOS DA ORDEM DE SERVIÇO

        estudos.selecionarTpEstudoContainer()
        estudos.seletorDropdown('Dação em Pagamento')
        estudos.selecionarTpStatusContainer()
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
    it('Validações Gerais', () => {
        estudos.irParaGLA()
        estudos.login()
        estudos.irEmpreendimentos()
        estudos.pesquisarEstudo()
        estudos.filtrar('Polos 06, 07, 08')
        estudos.clicarPrimeiroBotaoVisualizar()
        estudos.clicarEstudos()
        estudos.validaResultadosEstudos() //EU023 - US057 - RN113

        visualizarEstudo('NELSON ALVES LOUZEIRO JUNIOR','PEDRO RAFAEL MANDAI')
        estudos.validaTitularReq('NELSON ALVES LOUZEIRO JUNIOR') // EU018 - US052 - RN102 - TITULAR/ SUPLENTE
        estudos.validaSuplenteReq('PEDRO RAFAEL MANDAI') // EU018 - US052 - RN102 - TITULAR/ SUPLENTE
    })
})
