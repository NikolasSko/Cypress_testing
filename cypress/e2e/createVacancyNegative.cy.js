describe('Создание новой вакансии работодателем', () => {
  it('Создастся новая вакансия', () => {
    cy.log('Создание новой вакансии работодателем')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/login"] > .button').click();
    cy.get('.form-input--text').type('testerEmployer');
    cy.get('.form-input--password').type('Password1', {timeout: 3000});
    cy.get(':nth-child(3) > .button').click();
    cy.get(':nth-child(7) > .menu-item__item-name').click();
    cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click();
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--').type('33123434124', {force: true});
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__input').click();
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input').click();
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area').type('example@mail.ru', {timeout: 3000});
    cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area').type('54352^%&&*#(*%@@HBKJDS&SD*', {timeout: 3000});
    cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({force: true})
  })
})