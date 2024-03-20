describe('Отклик студента', () => {
  it('Отклик студента', () => {
    cy.log('Отклик студента')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerStudent');
    cy.get('.form-input--password').type('Password1', {timeout: 3000});
    cy.get(':nth-child(3) > .button').click();
    cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label').click();
    cy.get(':nth-child(2) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click({force: true});
    
  })
})
