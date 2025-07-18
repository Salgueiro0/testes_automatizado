//
// //PÁGINA ESTUDO/SERVIÇO
//
// //REFERÊNCIAS
//
// //INCLUIR REQUERIMENTO
// cy.get('#select2-cd_regiao_admin_req-container').click()
// cy.get('.select2-results')
//      .find('li')
//      .eq(0)
//      .click({force:true})
// cy.wait(1000)
// cy.get('#select2-cd_empreendimento_req-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.get('#select2-tp_requerimento-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.wait(1000)
// cy.get('#select2-cd_requerimento-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.get('#btnAdicionar_requerimento > .fa').click()
//
// //INCLUIR EXIGÊNCIA
// cy.get('#select2-cd_regiao_admin_exi-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.wait(1000)
// cy.get('#select2-cd_empreendimento_exi-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.wait(2000)
// cy.get('#select2-cd_demanda-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
//
// //INCLUIR PENDÊNCIA
//
// cy.get('#select2-cd_regiao_admin_pen-container').click()
// cy.get('.select2-results')
//      .find('li')
//      .eq(0)
//      .click({force:true})
// cy.wait(1000)
//
// cy.get('#select2-cd_empreendimento_pen-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
// cy.wait(1000)
//
// cy.get('#select2-cd_pendencia-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#btnAdicionar_pendencia').click()
//
// //DADOS GERAIS
//
// cy.get('#select2-tp_estudo-container').click()
// cy.get('.select2-results')
//      .find('li')
//      .eq(0)
//      .click({force:true})
//
// cy.get('#select2-tp_natureza-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#select2-tp_objeto-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#ds_objeto_estudo').type('teste')
// cy.get('#nr_area_poligonal').type('1')
//
// cy.get(':nth-child(6) > .form-group > .select2-container > .selection > .select2-selection > #select2-tp_status-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#ds_observacao_status').type('teste')
//
// cy.get('#select2-cd_orgao_avaliador-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#vl_estimado').type('1')
//
//
// cy.get('#cd_org_proc_sei_contratacao').type('a')
// cy.get('#nr_proc_sei_contratacao').type('b')
// cy.get('#nr_proc_sei_contratacao').type('c')
//
// cy.get('#select2-cd_pessoa_titular-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#select2-cd_pessoa_suplente-container').click()
// cy.get('.select2-results')
//     .find('li')
//     .eq(0)
//     .click({force:true})
//
// cy.get('#ds_caminho_departamento').type('teste')
//
// cy.get('#dt_elaboracao').type('2020-01-01')
//
// cy.get('#dt_prev_conclusao_estudo').type('2020-01-01')
//
// //DADOS DO CONTRATO
//
// cy.get('#ct_plus').click()
//
// cy.get('#btnSalvar').click()
// cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
// // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
// // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
// // cy.get('[onclick="window.history.back()"]').click()
// cy.contains('button', 'Sim')
//     .should('be.visible')
//     .click();
// cy.get('[onclick="limparEstudo()"]').click()
// cy.go('back')