Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Patrícia')
    cy.get('#lastName').type('Midori')
    cy.get('#email').type('patriciamidori@mail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})