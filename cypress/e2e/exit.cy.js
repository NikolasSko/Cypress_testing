describe('Выход', () => {
  it('Выход', () => {
    cy.log('Выход')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1', {timeout: 3000});
    cy.get(':nth-child(3) > .button').click();
    cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button').click();
  })
})
