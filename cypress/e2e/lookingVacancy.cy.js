describe('Просмотр вакансий', () => {
  it('Просматриваются вакансии (с помощью фильтров и поиска)', () => {
    cy.log('Просмотр вакансий')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1', {timeout: 3000});
    cy.get(':nth-child(3) > .button').click();
    cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click();
    cy.get('.form-input--text').type('Системный администратор', {force: true});
    // cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click();
    cy.get('.form-select__items > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click();
    cy.get('.form-select__items > :nth-child(2)').click();
    cy.get('div.search-input__field > .button').click(); 
  })
})
