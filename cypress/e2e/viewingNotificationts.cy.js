describe('Просмотр вакансий', () => {
  it('Просматриваются вакансии (с помощью фильтров и поиска)', () => {
    cy.log('Просмотр вакансий')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerStudent');
    cy.get('.form-input--password').type('Password1', {timeout: 3000});
    cy.get(':nth-child(3) > .button').click();
    cy.get('div[class="header-container__desktop"]').click();

  })
})
