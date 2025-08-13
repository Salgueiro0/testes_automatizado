const el = require('./elements').ELEMENTS
class documentos{

    clicarEmpreendimento(){
        cy.get(el.botaoEmpreendimento).click()
    }

    selecionarEmpreendimento(){
        cy.get(el.campoEmpreendimento).click()
        cy.get(el.dropdwonGla).find('li').contains('Polos 06, 07, 08 - Projeto Orla - Beira Lago').click()
    }

    pesquisarEmpreendimento(){
        cy.get(el.botaoPesquisarEmpreendimento).click()
    }

    clicarVisualizarEmpreendimento(){
        cy.get(el.botaoVisualizar).first().click()
    }

    clicarBotaoNovoDocumento(){
        cy.contains('a', 'Novo Documento').click({ force: true });
    }

    digitarCampoDescricaoDocumento(){
        cy.get(el.campoDescricaoDocumento).type('teste')
    }

    clicarBotaoLimpar(){
        cy.contains('button', 'Limpar').click()
    }

    selecionarTipoDocumento(){
        cy.get(el.campoTipoDocumento).click()
        cy.get(el.dropdwonGla).find('li').contains('Outros').click({force: true})
    }

    digitarNumeroDocumento(){
        cy.get(el.campoNumeroDocumento).type('1245')
    }

    digitarDataDocumento(){
        cy.get(el.dataDocumento).type('2025-01-01')
    }

    selecionarOrgaoDocumento(){
        cy.get(el.campoOrgaoDocumento).click()
        cy.get(el.dropdwonGla).find('li').contains('ADETUR - AGÊNCIA DE DESENVOLVIMENTO DO TURISMO DO DISTRITO FEDERAL').click({force: true})
    }

    digitarNumeroSeiDocumento(){
        cy.get().type('435456')
    }
}


export default new documentos()