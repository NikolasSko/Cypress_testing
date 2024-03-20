describe('Регистрация', () => {
  it('Регистрация', () => {
    cy.log('Регистрация')
    cy.visit('https://dev.profteam.su/');
    cy.get('[href="/registration"] > .button').click();
    cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type('Символы');
    cy.get('.form-input--email').type('nikita12345');
    cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type('QWEasd123');
    cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type('QWEasd123');
    cy.get(':nth-child(4) > .button').click({force: true});
    cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type('Скобелев');
    cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type('Никита');
    cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type('Алексеевич');
    cy.get(':nth-child(3) > .button').click({force: true});

  })
})
